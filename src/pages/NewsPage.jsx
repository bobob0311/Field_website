import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import CategoryButton from '../components/CategoryButton';
import LoadingSpinner from '../components/LoadingSpinner';
import ModalSection from '../components/ModalSection';
import NewsPagination from '../components/News/NewsPagination';
import {NewsApi, NewsMonthApi} from '../lib/Apiservice';
import {setMonthTitle} from '../redux/monthFieldSlice';

const NewsMain = styled.section`
  height: calc(100vh - 4.5rem - 140.78px);
`;

const H1 = styled.h1`
  font-size: 1.875rem;
  padding: 2rem 0;
  font-family: 'Goblin one';
  text-align: center;
`;

const SwiperContainer = styled.div`
  width: 100%;
  margin: 3rem 0;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;

const ButtonWrapper = styled.div`
  margin: 0 5%;
`;

function NewsPage() {
  const dispatch = useDispatch();
  const monthFieldTitle = useSelector(state => state.monthTitle.value);
  const [loading, setLoading] = useState(true);
  const [showedMonthField, setShowedMonthField] = useState({});
  const [selectCategory, setSelectCategory] = useState('월간필드');
  const categoryArr = ['월간필드', '취업/진로', 'FIELD', '공모전'];
  const [newsData, setNewsData] = useState([]);
  const imageUrl = `${VITE_API_URL}/api/files/damzbyg116zhar4/`;
  const handleButtonClick = item => {
    setSelectCategory(item);
  };
  const monthLocalData = JSON.parse(localStorage.getItem('monthFieldTitle'));

  const fetchNewsData = async category => {
    let response = JSON.parse(localStorage.getItem(category));
    if (!response) {
      response = await NewsApi(category);
      localStorage.setItem(category, JSON.stringify(response));
    }
    return response;
  };

  const updateMonthFieldTitle = (response, category, title) => {
    if (category === '월간필드' && title === '') {
      const titleArr = response.map(item => item.title);
      dispatch(setMonthTitle(titleArr[titleArr.length - 1]));
    }
  };

  const getDataNews = async () => {
    try {
      const response = await fetchNewsData(selectCategory);
      updateMonthFieldTitle(response, selectCategory, monthFieldTitle);
      setNewsData(response);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getDataMonthField = async () => {
    let response;
    try {
      if (monthLocalData && monthFieldTitle === monthLocalData.photo) {
        response = JSON.parse(monthLocalData);
      } else {
        response = await NewsMonthApi(monthFieldTitle);
        localStorage.setItem('monthFieldTitle', JSON.stringify(response));
      }
      setShowedMonthField(response[0]);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataNews();
  }, [selectCategory]);

  useEffect(() => {
    if (selectCategory === '월간필드' && monthFieldTitle !== '') {
      getDataMonthField(monthFieldTitle);
    }
  }, [monthFieldTitle]);

  let content;

  if (loading) {
    content = <LoadingSpinner />;
  } else if (selectCategory === '월간필드' && showedMonthField?.photo) {
    content = (
      <>
        <ModalSection
          timeDatalst={newsData.map(item => item.title)}
          title={monthFieldTitle}
          color='yellow'
          $margin='3rem 0'
        />
        <SwiperContainer>
          <Swiper slidesPerView={1.2} spaceBetween={20} centeredSlides='true'>
            {showedMonthField.photo.map(item => (
              <SwiperSlide key={item}>
                <Image src={`${imageUrl}${showedMonthField.id}/${item}`} alt={showedMonthField} />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </>
    );
  } else if (selectCategory !== '월간필드') {
    content = <NewsPagination newsData={newsData} category={selectCategory} />;
  }
  return (
    <NewsMain>
      <H1>NEWS</H1>
      <ButtonWrapper>
        {categoryArr.map(category => (
          <CategoryButton
            key={category}
            label={category}
            isActive={selectCategory === category}
            onClick={() => handleButtonClick(category)}
          />
        ))}
      </ButtonWrapper>
      {content}
    </NewsMain>
  );
}

export default NewsPage;

import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {Swiper, SwiperSlide} from 'swiper/react';
import CategoryButton from '../components/CategoryButton';
import ModalSection from '../components/ModalSection';
import {NewsApi, NewsMonthApi} from '../lib/Apiservice';
import {setModalTitle} from '../redux/modalTitleSlice';
import 'swiper/swiper-bundle.css';
import NewsPagination from '../components/News/NewsPagination';

const NewsMain = styled.section`
  height: 67.9vh;
`;

const H1 = styled.h1`
  font-size: 1.875rem;
  margin: 5rem 0 2.5rem 0;
  font-family: 'Goblin one';
  text-align: center;
`;

const SwiperContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
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
  const monthFieldTitle = useSelector(state => state.modalTitle.value);
  const [showedMonthField, setShowedMonthField] = useState([]);
  const [selectCategory, setSelectCategory] = useState('월간필드');
  const categoryArr = ['월간필드', '취업/진로', 'FIELD', '공모전'];
  const [newsData, setNewsData] = useState([]);
  const imageUrl = `${import.meta.env.VITE_API_URL}/api/files/damzbyg116zhar4/`;
  const handleButtonClick = item => {
    setSelectCategory(item);
  };

  const getDataNews = async () => {
    try {
      const response = await NewsApi(selectCategory);
      if (selectCategory === '월간필드') {
        const title = response.map(item => item.title);
        dispatch(setModalTitle(title[title.length - 1]));
      }
      setNewsData(response);
    } catch (err) {
      console.log(err);
    }
  };

  const getDataMonthField = async () => {
    try {
      const response = await NewsMonthApi(monthFieldTitle);
      setShowedMonthField(response[0]);
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
      {selectCategory === '월간필드' ? (
        <>
          <ModalSection
            timeDatalst={newsData.map(item => item.title)}
            title={monthFieldTitle}
            color='yellow'
          />
          <SwiperContainer>
            <Swiper slidesPerView={1.2} spaceBetween={20} centeredSlides='true'>
              {showedMonthField.photo ? (
                showedMonthField.photo.map(item => (
                  <SwiperSlide key={item}>
                    <Image
                      key={item}
                      src={`${imageUrl}${showedMonthField.id}/${item}`}
                      alt={showedMonthField}
                    />
                  </SwiperSlide>
                ))
              ) : (
                <div>로딩중</div>
              )}
            </Swiper>
          </SwiperContainer>
        </>
      ) : (
        <NewsPagination newsData={newsData} />
      )}
    </NewsMain>
  );
}

export default NewsPage;

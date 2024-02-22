import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {Swiper, SwiperSlide} from 'swiper/react';
import CategoryButton from '../components/CategoryButton';
import ModalSection from '../components/ModalSection';
import {NewsApi, NewsMonthApi} from '../lib/Apiservice';
import {setMonthTitle} from '../redux/monthFieldSlice';
import 'swiper/swiper-bundle.css';
import NewsPagination from '../components/News/NewsPagination';
import LoadingSpinner from '../components/LoadingSpinner';

const NewsMain = styled.section`
  height: 67.9vh;
`;

const H1 = styled.h1`
  font-size: 1.875rem;
  margin: 2rem 0 2rem 0;
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
  const imageUrl = `${import.meta.env.VITE_API_URL}/api/files/damzbyg116zhar4/`;
  const handleButtonClick = item => {
    setSelectCategory(item);
  };

  const getDataNews = async () => {
    try {
      const response = await NewsApi(selectCategory);
      if (selectCategory === '월간필드' && monthFieldTitle === '') {
        const title = response.map(item => item.title);
        dispatch(setMonthTitle(title[title.length - 1]));
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
          margin='3rem 0'
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
      {/* {loading ? (
        <LoadingSpinner /> // 로딩 상태일 때 로딩 인디케이터 표시
      ) : selectCategory === '월간필드' ? (
        showedMonthField && showedMonthField.photo ? ( // `월간필드` 선택 및 데이터 로드 완료
          <>
            <ModalSection
              timeDatalst={newsData.map(item => item.title)}
              title={monthFieldTitle}
              color='yellow'
              margin='3rem 0'
            />
            <SwiperContainer>
              <Swiper slidesPerView={1.2} spaceBetween={20} centeredSlides='true'>
                {showedMonthField.photo.map(item => (
                  <SwiperSlide key={item}>
                    <Image
                      src={`${imageUrl}${showedMonthField.id}/${item}`}
                      alt={showedMonthField}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </SwiperContainer>
          </>
        ) : null // `showedMonthField` 또는 `photo` 배열이 없으면 렌더링하지 않음
      ) : (
        <NewsPagination newsData={newsData} category={selectCategory} /> // 그 외의 카테고리 선택 시
      )} */}
      {content}
    </NewsMain>
  );
}

export default NewsPage;

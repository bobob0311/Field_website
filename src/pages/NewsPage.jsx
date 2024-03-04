import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useNavigate, useLocation} from 'react-router-dom';
import CategoryButton from '../components/CategoryButton';
import NewsPagination from '../components/News/NewsPagination';
import {NewsApi} from '../lib/Apiservice';

const NewsMain = styled.section`
  height: calc(100vh - 58px - 112px);
`;

const H1 = styled.h1`
  font-size: 1.875rem;
  padding: 2rem 0;
  font-family: 'Goblin one';
  text-align: center;
`;

const ButtonWrapper = styled.div`
  margin: 0 5%;
`;

export default function NewsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const categoryArr = ['월간필드', '취업/진로', '공모전', '공지'];
  const [selectCategory, setSelectCategory] = useState('월간필드');
  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);
  const handleButtonClick = item => {
    setSelectCategory(item);
    navigate(`/news?category=${item}`);
  };

  const getDataNews = async () => {
    const localData = JSON.parse(localStorage.getItem(selectCategory));
    if (localData) {
      setNewsData(localData);
      console.log(localData);
      setLoading(false);
    } else {
      try {
        console.log('csd');
        const response = await NewsApi(selectCategory);
        setNewsData(response);
        localStorage.setItem(selectCategory, JSON.stringify(response));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getDataNews();
  }, [selectCategory]);

  useEffect(() => {
    const urlCategory = new URLSearchParams(location.search).get('category') || '월간필드';
    setSelectCategory(urlCategory);
  }, [location.search]);

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
      {/* {selectCategory === '월간필드'&&  } */}
      <NewsPagination newsData={newsData} category={selectCategory} loading={loading} />
    </NewsMain>
  );
}

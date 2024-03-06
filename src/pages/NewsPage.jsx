import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useNavigate, useLocation} from 'react-router-dom';
import CategoryButton from '../components/CategoryButton';
import NewsPagination from '../components/News/NewsPagination';
import {NewsApi, NewsYearApi} from '../lib/Apiservice';
import theme from '../theme';

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

const TypeSelect = styled.select`
  margin: 1rem 0 0 0;
  color: black;
  appearance: none;
  font-size: 1rem;
  font-family: 'SUIT-Regular';
  font-weight: 700;
  background: ${theme.colors.lightgray} url('Expand_down.png') no-repeat 95% / 25px 25px;
  border-radius: 1rem;
  padding: 0.375rem 0 0.375rem 0.5rem;
  width: ${props => props.width || '5.75rem'};
  height: 2rem;
  z-index: 0;
`;

const Option = styled.option`
  color: black;
  appearance: none;
  font-family: 'SUIT-Regular';
  font-weight: 900;
  font-size: 1rem;
`;

const DropdownWrapper = styled.div`
  margin: 0 7.5%;
  display: flex;
  gap: 0.5rem;
  justify-content: end;
`;

export default function NewsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const categoryArr = ['월간필드', '취업/진로', '공모전', '공지'];
  const [selectCategory, setSelectCategory] = useState('월간필드');
  const [loading, setLoading] = useState(true);
  const [newsYear, setNewsYear] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [newsMonth, setNewsMonth] = useState([]);
  const [datalength, setDataLength] = useState(0);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');

  const handleYearChange = e => {
    setSelectedYear(e.target.value);
    setSelectedMonth('');
  };

  const handleMonthChange = e => {
    setSelectedMonth(e.target.value);
  };

  const handleButtonClick = item => {
    setSelectCategory(item);
    navigate(`/news?category=${item}`);
  };

  const getDataYear = async () => {
    const localYearData = JSON.parse(localStorage.getItem('년도'));
    const localMonthData = JSON.parse(localStorage.getItem('월'));
    const localDataLength = parseInt(localStorage.getItem(`${selectCategory}개수`), 10);
    if (localMonthData && localYearData && localDataLength) {
      setNewsYear(localYearData);
      setNewsMonth(localMonthData);
      setDataLength(localDataLength);
    } else {
      try {
        console.log('asdasd');
        const response = await NewsYearApi(selectCategory);
        console.log(response);
        const dataSize = response.length;
        setDataLength(dataSize);
        localStorage.setItem(`${selectCategory}개수`, dataSize);
        if (selectCategory === '월간필드') {
          const uniqueYears = [
            ...new Set(response.map(item => item.year).filter(year => year !== 0)),
          ].sort((a, b) => b - a);
          const uniqueMonths = [
            ...new Set(response.map(item => item.month).filter(month => month !== 0)),
          ].sort((a, b) => a - b);
          localStorage.setItem('년도', JSON.stringify(uniqueYears));
          localStorage.setItem('월', JSON.stringify(uniqueMonths));
          setNewsYear(uniqueYears);
          setNewsMonth(uniqueMonths);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getDataNews = async (page, category) => {
    try {
      const response = await NewsApi(page, category);
      setNewsData(response);
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const urlCategory = new URLSearchParams(location.search).get('category') || '월간필드';
    const urlPage = new URLSearchParams(location.search).get('page') || 1;
    getDataYear();
    getDataNews(urlPage, urlCategory);
    setSelectCategory(urlCategory);
  }, [location.search, selectCategory]);

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
      {selectCategory === '월간필드' && (
        <DropdownWrapper>
          <TypeSelect name='Type' autoComplete='off' onChange={handleYearChange}>
            <Option value='선택하지않음'>년도</Option>
            {newsYear.map(item => (
              <Option value={item} key={item}>
                {item}년
              </Option>
            ))}
          </TypeSelect>
          <TypeSelect name='Type' autoComplete='off' width='4.25rem' onChange={handleMonthChange}>
            <Option value='선택하지않음'>월</Option>
            {newsMonth.map(item => (
              <Option value={item} key={item}>
                {item}월
              </Option>
            ))}
          </TypeSelect>
        </DropdownWrapper>
      )}
      <NewsPagination
        // newsData={selectCategory === '월간필드' ? filteredNewsData : newsData}
        newsDataLength={datalength}
        newsData={newsData}
        category={selectCategory}
        loading={loading}
      />
    </NewsMain>
  );
}

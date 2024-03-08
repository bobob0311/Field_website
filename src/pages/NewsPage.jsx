import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useNavigate, useLocation} from 'react-router-dom';
import CategoryButton from '../components/CategoryButton';
import NewsPagination from '../components/News/NewsPagination';
import {NewsApi} from '../lib/Apiservice';
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
  const [loading, setLoading] = useState(false);
  const [newsYear, setNewsYear] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [newsMonth, setNewsMonth] = useState([]);
  const [renderData, setRenderData] = useState([]);
  const [filter, setFilter] = useState(false);
  const [selectedYear, setSelectedYear] = useState('선택하지않음');

  const handleYearChange = e => {
    setSelectedYear(e.target.value);
    let monthByYear;
    if (e.target.value === '선택하지않음') {
      setRenderData(newsData);
      setNewsMonth(
        [...new Set(response1.map(item => item.month).filter(month => month !== 0))].sort(
          (a, b) => a - b,
        ),
      );
    } else {
      const yearFilterData = newsData.filter(item => item.year === parseInt(e.target.value, 10));
      monthByYear = [...new Set(yearFilterData.map(item => item.month))];
      setRenderData(yearFilterData);
      console.log(yearFilterData);
      setFilter(true);
    }
    console.log(monthByYear);
    setNewsMonth(monthByYear);
  };

  const handleMonthChange = e => {
    let monthFilterData;
    if (e.target.value === '선택하지않음') {
      monthFilterData = newsData.filter(item =>
        selectedYear === '선택하지않음' ? item : item.year === parseInt(selectedYear, 10),
      );
    } else {
      monthFilterData = newsData.filter(
        item =>
          item.month === parseInt(e.target.value, 10) &&
          (selectedYear === '선택하지않음' ? true : item.year === parseInt(selectedYear, 10)),
      );
    }
    setRenderData(monthFilterData);
    setFilter(true);
  };

  const handleButtonClick = item => {
    setSelectCategory(item);
    navigate(`/news?category=${item}`);
  };

  const getDataNews = async category => {
    try {
      const response1 = await NewsApi(category);
      console.log(response1);
      setNewsData(response1);
      setRenderData(response1);
      if (category === '월간필드') {
        const uniqueYears = [
          ...new Set(response1.map(item => item.year).filter(year => year !== 0)),
        ].sort((a, b) => b - a);
        const uniqueMonths = [
          ...new Set(response1.map(item => item.month).filter(month => month !== 0)),
        ].sort((a, b) => a - b);
        setNewsYear(uniqueYears);
        setNewsMonth(uniqueMonths);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const urlCategory = new URLSearchParams(location.search).get('category') || '월간필드';
    setLoading(true);
    getDataNews(urlCategory);
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
        newsData={selectCategory === '월간필드' ? renderData : newsData}
        // newsData={newsData}
        category={selectCategory}
        loading={loading}
        filter={filter}
      />
    </NewsMain>
  );
}

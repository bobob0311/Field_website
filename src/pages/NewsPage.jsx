import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useNavigate, useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
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
  const currentPage = useSelector(state => state.monthTitle.value);
  const categoryArr = ['월간필드', '취업/진로', '공모전', '공지'];
  const [selectCategory, setSelectCategory] = useState('월간필드');
  const [loading, setLoading] = useState(false);
  const [newsYear, setNewsYear] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [newsMonth, setNewsMonth] = useState([]);
  const [datalength, setDataLength] = useState(0);
  const [renderData, setRenderData] = useState([]);
  const [selectedYear, setSelectedYear] = useState('선택하지않음');

  const handleYearChange = e => {
    console.log(newsData);
    setSelectedYear(e.target.value);
    console.log(e.target.value);
    let dataSize;
    let monthByYear;
    if (e.target.value === '선택하지않음') {
      setRenderData(newsData);
      dataSize = newsData.length;
      monthByYear = [...new Set(newsData.map(item => item.month))];
    } else {
      const yearFilterData = newsData.filter(item => item.year === parseInt(e.target.value, 10));
      monthByYear = [...new Set(yearFilterData.map(item => item.month))];
      dataSize = yearFilterData.length;
      setRenderData(yearFilterData);
    }
    setDataLength(dataSize);
    setNewsMonth(monthByYear);
  };

  const handleMonthChange = e => {
    let monthFilterData;
    if (e.target.value === '선택하지않음') {
      monthFilterData = newsData.filter(item =>
        selectedYear === '선택하지않음' ? item : item.year === parseInt(selectedYear, 10),
      );
    } else {
      console.log(newsData);
      console.log(selectedYear);
      monthFilterData = newsData.filter(
        item =>
          item.month === parseInt(e.target.value, 10) &&
          (selectedYear === '선택하지않음' ? true : item.year === parseInt(selectedYear, 10)),
      );
    }
    const dataSize = monthFilterData.length;
    console.log(monthFilterData);
    setDataLength(dataSize);
    setRenderData(monthFilterData);
  };

  const handleButtonClick = item => {
    setSelectCategory(item);
    navigate(`/news?category=${item}`);
  };

  // const filteredNewsData = newsData.filter(item => {
  //   const year = item.actDate.slice(0, 4);
  //   const month = item.actDate.slice(5, 7);
  //   return (!selectedYear || year === selectedYear) && (!selectedMonth || month === selectedMonth);
  // });

  // const getDataYear = async () => {
  //   const localYearData = JSON.parse(localStorage.getItem('년도'));
  //   const localMonthData = JSON.parse(localStorage.getItem('월'));
  //   const localDataLength = parseInt(localStorage.getItem(`${selectCategory}개수`), 10);
  //   if (localMonthData && localYearData && localDataLength) {
  //     setNewsYear(localYearData);
  //     setNewsMonth(localMonthData);
  //     setDataLength(localDataLength);
  //   } else {
  //     try {
  //       const response = await NewsYearApi(selectCategory);
  //       console.log(response);
  //       const initalDataSize = response.length;
  //       setDataLength(initalDataSize);
  //       if (selectCategory === '월간필드') {
  //         const uniqueYears = [
  //           ...new Set(response.map(item => item.year).filter(year => year !== 0)),
  //         ].sort((a, b) => b - a);
  //         const uniqueMonths = [
  //           ...new Set(response.map(item => item.month).filter(month => month !== 0)),
  //         ].sort((a, b) => a - b);
  //         setNewsYear(uniqueYears);
  //         setNewsMonth(uniqueMonths);
  //         setRenderData(newsData);
  //         console.log(newsData);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  const getDataNews = async () => {
    try {
      const response1 = await NewsApi(selectCategory);
      console.log(response1.items);
      setNewsData(response1.items);

      setLoading(false);

      const response = await NewsYearApi(selectCategory);
      console.log(response);
      const initalDataSize = response.length;
      setDataLength(initalDataSize);
      if (selectCategory === '월간필드') {
        const uniqueYears = [
          ...new Set(response.map(item => item.year).filter(year => year !== 0)),
        ].sort((a, b) => b - a);
        const uniqueMonths = [
          ...new Set(response.map(item => item.month).filter(month => month !== 0)),
        ].sort((a, b) => a - b);
        setNewsYear(uniqueYears);
        setNewsMonth(uniqueMonths);
        setRenderData(response1.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getDataNews();
  }, [selectCategory, currentPage]);

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
        newsData={selectCategory === '월간필드' ? renderData : newsData}
        category={selectCategory}
        loading={loading}
      />
    </NewsMain>
  );
}

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
  const [loading, setLoading] = useState(true);
  const [newsYear, setNewsYear] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [newsMonth, setNewsMonth] = useState([]);
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

  const filteredNewsData = newsData.filter(item => {
    const year = item.actDate.slice(0, 4);
    const month = item.actDate.slice(5, 7);
    return (!selectedYear || year === selectedYear) && (!selectedMonth || month === selectedMonth);
  });

  const getDataNews = async () => {
    const localData = JSON.parse(localStorage.getItem(selectCategory));
    if (localData) {
      const newsYearArr = localData.map(item => item.actDate.slice(0, 4));
      const newsMonthArr = localData.map(item => item.actDate.slice(5, 7));
      setNewsYear(newsYearArr);
      setNewsData(localData);
      setNewsMonth(newsMonthArr);
      console.log(localData);
      setLoading(false);
    } else {
      try {
        console.log('csd');
        const response = await NewsApi(selectCategory);
        setNewsData(response);
        setNewsYear(newsYearArr);
        setNewsMonth(newsMonthArr);
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

  console.log(filteredNewsData);

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
        newsData={selectCategory === '월간필드' ? filteredNewsData : newsData}
        category={selectCategory}
        loading={loading}
      />
    </NewsMain>
  );
}

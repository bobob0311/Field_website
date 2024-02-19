import React, {useState} from 'react';
import styled from 'styled-components';
import CategoryButton from '../components/CategoryButton';

const NewsMain = styled.section`
  margin: 0 10%;
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 1.875rem;
  margin: 5rem 0 2.5rem 0;
`;

function NewsPage() {
  const [selectCategory, setSelectCategory] = useState('월간필드');
  const categoryArr = ['월간필드', '취업/진로', 'FIELD', '공모전'];
  const handleButtonClick = item => {
    setSelectCategory(item);
  };

  return (
    <NewsMain>
      <H1>NEWS</H1>
      {categoryArr.map(category => (
        <CategoryButton
          label={category}
          isActive={selectCategory === category}
          onClick={() => handleButtonClick(category)}
        />
      ))}
    </NewsMain>
  );
}

export default NewsPage;

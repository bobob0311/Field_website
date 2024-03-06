import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Pagination} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import LoadingSpinner from '../LoadingSpinner';
import {setMonthTitle} from '../../redux/monthFieldSlice';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ul = styled.ul`
  margin: 0.75rem 7.5%;
`;

const Li = styled.li`
  display: grid; // 이 부분 추가
  grid-template-areas:
    'thumbnail title1'
    'thumbnail title2'
    'thumbnail date';
  font-size: 1.125rem;
  color: white;
  border: None;
  border-bottom: solid 0.0625rem;
  padding: 0.5rem 0;
  text-align: end;
  a {
    border: none;
    color: inherit;
    text-decoration: none;
    display: contents;
  }
`;

const Thumbnail = styled.img`
  grid-area: thumbnail;
  width: 100px;
  height: 70px;
`;

const TitleSpan = styled.span`
  grid-area: title1;
  font-weight: 800;
`;

const Title2Span = styled.span`
  margin: 0.625rem 0 0 0;
  grid-area: title2;
  font-weight: 800;
`;

const DateSpan = styled.span`
  grid-area: date;
  font-size: 0.625rem;
  margin: 1.125rem 0 0 0;
`;

const CustomPagination = styled(Pagination)`
  .MuiPaginationItem-root {
    color: white;
  }
`;

function NewsPagination({newsData, category, loading, newsDataLength}) {
  const navigate = useNavigate();
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const imageUrl = `${import.meta.env.VITE_API_URL}/api/files/`;
  const handlePageChange = (event, value) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('page', value);
    navigate(`?${searchParams.toString()}`);
    setCurrentPage(value);
    console.log(value);
  };
  console.log(newsData.length);
  const currentItemPerPage = newsData;
  return !loading &&
    currentItemPerPage.length > 0 &&
    currentItemPerPage[0].category === category ? (
    <>
      <Ul>
        {currentItemPerPage.map(item => (
          <Li key={item.id}>
            <Link to={`/detail/${item.newsId}`}>
              <Thumbnail src={`${imageUrl}/${item.collectionId}/${item.id}/${item.thumbnail}`} />
              <TitleSpan>{item.title1} </TitleSpan>
              <Title2Span>{item.title2 ? item.title2 : ''}</Title2Span>
              <DateSpan />
            </Link>
          </Li>
        ))}
      </Ul>
      <PageWrapper>
        <CustomPagination
          count={Math.ceil(newsDataLength / itemsPerPage)}
          color='primary'
          defaultPage={1}
          page={currentPage}
          onChange={handlePageChange}
        />
      </PageWrapper>
    </>
  ) : (
    <LoadingSpinner />
  );
}

export default NewsPagination;

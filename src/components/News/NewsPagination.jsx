import React, {useState} from 'react';
import styled from 'styled-components';
import {Pagination} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ul = styled.ul`
  margin: 2rem 7.5%;
`;

const Li = styled.li`
  font-size: 1rem;
  color: white;
  border: None;
  border-bottom: solid 0.0625rem;
  padding: 0.5rem 0;
  a {
    border: none;
    color: inherit;
    text-decoration: none;
  }
`;

const CustomPagination = styled(Pagination)`
  .MuiPaginationItem-root {
    color: white;
  }
`;

function NewsPagination({newsData, category}) {
  const navigate = useNavigate();
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('page', value);
    navigate(`?${searchParams.toString()}`);
  };
  const currentItemPerPage = newsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  return newsData.length > 0 && newsData[0].category === category ? (
    <>
      <Ul>
        {currentItemPerPage.map(item => (
          <Li key={item.id}>
            <Link to={`/detail/${item.newsId}`}>{item.title}</Link>
          </Li>
        ))}
      </Ul>
      <PageWrapper>
        <CustomPagination
          count={Math.ceil(newsData.length / itemsPerPage)}
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

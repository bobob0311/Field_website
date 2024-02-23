import React, {useState} from 'react';
import styled from 'styled-components';
import {Pagination} from '@mui/material';
import {Link} from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* 이 부분이 중앙 정렬을 담당합니다 */
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
`;

const CustomPagination = styled(Pagination)`
  .MuiPaginationItem-root {
    color: white; /* 원하는 색상으로 변경 */
  }
`;

function NewsPagination({newsData, category}) {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = page => {
    setCurrentPage(page);
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
            <Link
              style={{border: 'none', color: 'inherit', textDecoration: 'none'}}
              to={`/detail/${item.newsId}`}
            >
              {item.title}
            </Link>
          </Li>
        ))}
      </Ul>
      <PageWrapper>
        <CustomPagination
          count={Math.ceil(newsData.length / itemsPerPage)}
          color='primary'
          defaultPage={1}
          page={currentPage} // 현재 페이지를 지정
          onChange={handlePageChange}
        />
      </PageWrapper>
    </>
  ) : (
    <LoadingSpinner />
  );
}

export default NewsPagination;

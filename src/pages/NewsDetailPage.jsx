import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {NewsDetailApi} from '../lib/Apiservice';
import fileIcon from '../assets/fileIcon.png';

const Section = styled.section`
  margin: 0 7.5%;
  height: 70vh;
`;

const H1 = styled.h1`
  font-size: 1.875rem;
  margin: 5rem 0 2.5rem 0;
  font-family: 'Goblin one';
  text-align: center;
`;

const H2 = styled.h2`
  font-size: 1.25rem;
  font-family: 'SUIT-Heavy';
  padding: 0 0 0.5rem 0;
  border-bottom: solid 1px;
`;

const P = styled.p`
  font-size: 1rem;
  margin: 2.5rem 0;
  font-weight: 500;
  line-height: 1.5;
  word-break: keep-all;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const A = styled.a`
  display: flex;
  gap: 3px;
  align-items: center;
  color: white;
  margin: 1rem 0;
`;

const Icon = styled.img``;

const DateP = styled.p`
  font-size: 1rem;
`;

function NewsDetailPage() {
  const {id} = useParams();
  const [detailNewsData, setDetailNewsData] = useState({});
  const getDataDetail = async () => {
    try {
      const response = await NewsDetailApi(id);
      setDetailNewsData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataDetail();
  }, []);

  return (
    <Section>
      <H1>NEWS</H1>
      <H2>{detailNewsData.title}</H2>
      <P>{detailNewsData.contents}</P>
      {detailNewsData && <A href={`${detailNewsData.url}`}>👉해당 공모전 보러가기</A>}

      <Wrapper>
        {detailNewsData ? (
          <A>
            첨부파일
            <Icon src={fileIcon} />
          </A>
        ) : (
          <div style={{flex: 1}} />
        )}
        <DateP>일자: {detailNewsData.created ? detailNewsData.created.slice(0, 10) : ''}</DateP>
      </Wrapper>
    </Section>
  );
}

export default NewsDetailPage;

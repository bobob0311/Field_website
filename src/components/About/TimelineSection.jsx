import styled from 'styled-components';
import TimeLine from '../TimeLine';

const H2 = styled.h2`
  font-size: 1.7rem;
  margin: ${props => props.margin || '0'};
  text-align: center;
`;

const GoblinH2 = styled(H2)`
  font-family: 'Goblin One';
  font-size: 1.875rem;
`;

function TimelineSection() {
  const data = {
    2008: [{title: 'FIELD의 시작', get: ' '}],
    2009: [{title: '첫 FIELD CAMP 개최', get: ' '}],
    2016: [{title: '대한산업공학회', title2: '산하 공식 단체 인준', get: ' '}],
    2017: [{title: '전국 단위 활동', get: ' '}],
    2018: [{title: '고교방문 설명회 진행', get: ' '}],
    2022: [{title: 'FIELD 유튜브 개설', get: ' '}],
  };
  return (
    <>
      <GoblinH2 margin='5rem 0'>Road of FIELD</GoblinH2>
      <TimeLine data={data} height='100' />
    </>
  );
}

export default TimelineSection;

import styled from 'styled-components';
import TimeLine from '../TimeLine';

const MainSection = styled.section`
  margin: 7.5%;
  display: flex;
  flex-direction: column;
`;

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
    2008: [{title: 'FIELD의 시작', get: '서울대학교, KAIST, POSTECH에서 학술 및 인적 교류 시작'}],
    2009: [{title: '첫 FIELD CAMP 개최', get: '고려대학교, 연세대학교 참여 시작'}],
    2016: [
      {title: '대한산업공학회 산하 공식 단체 인준', get: '전국 대학교 학생 대상 캠프 주최 및 참여'},
    ],
    2017: [{title: '전국 단위 활동', get: '전국 단위 FIELD 활동'}],
    2018: [{title: '고교방문 설명회 진행', get: '고등학생들을 대상으로 한 멘토링 진행'}],
    2022: [{title: 'FIELD 유튜브 개설', get: '산업공학 관련 영상 제작'}],
    2023: [{title: '코로나 이후 FIELD', get: '2년 만에 성황리에 개최된 FIELD CAMP'}],
  };
  return (
    <MainSection>
      <GoblinH2>Road of FIELD</GoblinH2>
      <TimeLine data={data} height='100' />
    </MainSection>
  );
}

export default TimelineSection;

import React from 'react';
import styled from 'styled-components';
import TimeLine from '../TimeLine';

const Section = styled.section`
  margin: 0 7.5%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H2 = styled.h2`
  font-family: 'Goblin One';
  font-size: 1.875rem;
  margin: 4rem 0 2rem 0;
`;

function CampTimeLine() {
  const data = {
    day1: ['개회식', '레크레이션', 'OHT / 레고 AGB 실험실견학', '교수님과의 식사'],
    day2: ['컴페티션 예선', '컴페티션 본선', '산공인의 밤'],
    day3: ['시상식', '폐회식', '기념사진 촬영'],
  };
  return (
    <Section>
      <H2>Time Line</H2>
      <TimeLine data={data} height='80' />
    </Section>
  );
}

export default CampTimeLine;

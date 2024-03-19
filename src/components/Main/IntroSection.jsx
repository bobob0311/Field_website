import styled from 'styled-components';

const MainSection = styled.section`
  margin: 0 7.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H3 = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  margin: ${props => props.$margin || '0'};
`;

const NanumH3 = styled(H3)`
  font-family: 'Nanum Myeongjo', serif;
  font-weight: 700;
  gap: 2rem;
  font-size: 1.625rem;
  margin: 10rem 0 5rem 0;
  @media screen and (min-width: 769px) {
    font-size: 40px;
  }
`;

const Image = styled.img`
  margin: ${props => props.$margin || '0'};
  width: 140px;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: ${props => props.radius || ''};
  @media screen and (min-width: 769px) {
    width: 160px;
  }
`;

const H2 = styled.h2`
  font-size: 1.7rem;
  margin: ${props => props.margin || '0'};
  text-align: center;
`;

const GoblinH2 = styled(H2)`
  font-family: 'Goblin One';
  font-size: 1.875rem;
  @media screen and (min-width: 769px) {
    font-size: 40px;
  }
`;

function IntroSection() {
  return (
    <MainSection>
      <GoblinH2 margin='5rem 0 2rem 0'>OUR GOAL</GoblinH2>
      <NanumH3>
        <span>꿈과 비전, 생각을 공유하는</span>
        <span>교류의 장을 만든다</span>
      </NanumH3>
      <Image src='fieldLogo.png' alt='필드 로고' $margin='3rem 0 3rem 0' />
    </MainSection>
  );
}

export default IntroSection;

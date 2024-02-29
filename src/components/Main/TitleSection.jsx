import styled from 'styled-components';
import TextGenerator from '../TextGenerator';

const TitleContainer = styled.section`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: ${props => props.$position || ''};
  bottom: 1rem;
`;

const Icon = styled.img`
  width: 1.875rem;
  height: 1.875rem;
  order: 2;
`;

const IconFigcaption = styled.figcaption`
  font-size: 0.625rem;
`;

function TitleSection() {
  return (
    <TitleContainer>
      <TextGenerator text="Let's Lead The Industry To A Broader FIELD" font='Goblin One' />
      <Figure $position='absolute'>
        <Icon src='./../../public/scrollDown.png' />
        <IconFigcaption>아래로 스크롤하세요</IconFigcaption>
      </Figure>
    </TitleContainer>
  );
}

export default TitleSection;

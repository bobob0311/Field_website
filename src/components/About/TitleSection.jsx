import styled from 'styled-components';
import theme from '../../theme';

const TitleContainer = styled.section`
  height: 90vh;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 7.5%;
  justify-content: space-around;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const H2 = styled.h2`
  font-size: 1.7rem;
  margin: ${props => props.margin || '0'};
  text-align: center;
`;

const NanumH2 = styled(H2)`
  font-size: 1.5rem;
  font-family: 'Nanum Myeongjo', serif;
  line-height: 1.3;
  word-break: keep-all;
  font-weight: 800;
`;

const P = styled.p`
  word-break: keep-all;
  margin: ${props => props.margin || '0'};
  line-height: ${props => props.line || ''};
  color: ${props => (props.color ? theme.colors[props.color] : '')};
  font-size: ${props => (props.size ? props.size : '1rem')};
  display: flex;
  flex-direction: column;
  font-weight: ${props => (props.weight ? props.weight : '')};
`;

const GoblinP = styled(P)`
  font-family: 'Goblin One';
`;

const FirstAlphabet = styled.span`
  color: ${props => (props.color ? theme.colors[props.color] : '')};
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: ${props => props.position || ''};
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

const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function TitleSection() {
  return (
    <TitleContainer>
      <NanumH2>전국 대학생 산업공학도 모임</NanumH2>
      <ContentContainer>
        <GoblinP size='2.25rem' line='1.4'>
          <span>
            <FirstAlphabet color='red'>F</FirstAlphabet>uture
          </span>
          <span>
            <FirstAlphabet color='yellow'>I</FirstAlphabet>ndustrial
          </span>
          <span>
            <FirstAlphabet color='yellow'>E</FirstAlphabet>ngineering
          </span>
          <span>
            <FirstAlphabet color='blue'>L</FirstAlphabet>eaders&
          </span>
          <span>
            <FirstAlphabet color='blue'>D</FirstAlphabet>reamers
          </span>
        </GoblinP>
        <P line='1.5' margin='2rem 0 0 0' size='1rem'>
          FIELD란, ‘Future Industrial Engineering Leaders and Dreamers’ 의 약자로, 미래의 핵심
          리더들이 될 산업공학도들이 모여 서로의 꿈과 비전, 생각 등을 공유할 수 있는 교류의 장을
          만든다는 목표 아래 모인 &apos;전국 대학생 산업공학도 모임&apos; 입니다.
        </P>
      </ContentContainer>
      <FlexCenter>
        <Figure position='absolute'>
          <Icon src='/scrollDown.png' />
          <IconFigcaption>아래로 스크롤하세요</IconFigcaption>
        </Figure>
      </FlexCenter>
    </TitleContainer>
  );
}

export default TitleSection;

import styled from 'styled-components';
import theme from '../theme';

const Header = styled.header`
  height: 10vh;
  background-color: gray;
`;

const AccessibilityHidden = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const TitleContainer = styled.section`
  height: 90vh;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 10%;
`;

const H2 = styled.h2`
  font-size: 1.875rem;
  margin: ${props => props.margin || '0'};
  text-align: center;
`;

const H3 = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  margin: ${props => props.margin || '0'};
`;

const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const Figcaption = styled.figcaption`
  margin: ${props => props.margin || '0'};
  word-break: keep-all;
  line-height: 1.5;
  text-align: center;
`;

const P = styled.p`
  word-break: keep-all;
  margin: ${props => props.margin || '0'};
  line-height: ${props => props.line || ''};
  color: ${props => (props.color ? theme.colors[props.color] : '')};
  font-size: ${props => (props.size ? props.size : '1rem')};
  display: flex;
  flex-direction: column;
`;

const FirstAlphabet = styled.span`
  color: ${props => (props.color ? theme.colors[props.color] : '')};
`;

const Image = styled.img`
  margin: ${props => props.margin || '0'};
  width: ${props => props.width || ''};
  border-radius: ${props => props.radius || ''};
`;

const MainSection = styled.section`
  margin: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
  margin: ${props => props.margin || '0'};
`;

const Li = styled.li`
  width: 40%;
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  border: 2px solid white;
  padding: 0 1rem;
  border-radius: 1rem;
`;

const Dt = styled.dt`
  font-size: 1.5rem;
`;

const Dd = styled.dd`
  font-size: 1rem;
`;

const Dl = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const CardUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardKeyWordLi = styled.li`
  padding: 0;
  margin: ${props => props.margin || '0'};
`;

const CardKeyWordSpan = styled.span`
  display: inline-block;
  background-color: ${props => (props.color ? theme.colors[props.color] : '')};
  padding: 0.7rem 2rem;
  text-align: center;
  border: 2px solid white;
  border-radius: 1rem;
`;

const CardHashTagUl = styled.ul`
  margin: ${props => props.margin || '0'};
  display: flex;
  flex-direction: column;
  color: ${theme.colors.yellow};
  gap: 0.5rem;
  font-weight: bold;
`;

const CardHashTagLi = styled.li`
  font-size: 1.1rem;
`;

function AboutPage() {
  return (
    <>
      <Header />
      <AccessibilityHidden>어바웃 필드</AccessibilityHidden>
      <TitleContainer>
        <H2 margin='2rem 0'>전국 대학생 산업공학도 모임</H2>
        <P size='2.25rem'>
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
            <FirstAlphabet color='blue'>L</FirstAlphabet>eaders
          </span>
          <span>
            <FirstAlphabet color='blue'>D</FirstAlphabet>reamers
          </span>
        </P>
        <P line='1.5' margin='2rem 0 0 0'>
          FIELD란, ‘Future Industrial Engineering Leaders and Dreamers’ 의 약자로, 미래의 핵심
          리더들이 될 산업 공학도들이 모여 서로의 꿈과 비전, 생각 등을 공유할 수 있는 교류의 장을
          만든다는 목표 아래 모인 &apos;전국 대학생 산업공학도 동아리&apos; 입니다.
        </P>
        <FlexCenter>
          <Figure position='absolute'>
            <Icon src='/scrollDown.png' alt='아래로 스크롤하세요' />
            <IconFigcaption>아래로 스크롤하세요</IconFigcaption>
          </Figure>
        </FlexCenter>
      </TitleContainer>
      <MainSection>
        <H2>Road of FIELD</H2>
      </MainSection>
      <MainSection>
        <H2>16기 단장단과 함께 여러분의 꿈을 실현하세요.</H2>
        <Ul margin='2rem 0'>
          <li>
            <Figure>
              <Image src='/profile1.png' alt='총기획단장' />
              <Figcaption>
                <P>16기 총기획단장</P>
                <P>이민재</P>
              </Figcaption>
            </Figure>
            <P>
              안녕하세요! 16기 총기획단장 이민재입니다! FIELD가 앞으로도 지속적으로 전국
              산업공학도들의 인적, 학술적 교류의 장이 될 수 있도록 열심히, 최선을 다해
              활동하겠습니다. FIELD에 많은 관심 부탁드립니다.
            </P>
          </li>
          <li>
            <Figure>
              <Image src='/profile1.png' alt='총기획단장' />
              <Figcaption>
                <P>16기 총기획단장</P>
                <P>이민재</P>
              </Figcaption>
            </Figure>
            <P>
              안녕하세요! 16기 총기획단장 이민재입니다! FIELD가 앞으로도 지속적으로 전국
              산업공학도들의 인적, 학술적 교류의 장이 될 수 있도록 열심히, 최선을 다해
              활동하겠습니다. FIELD에 많은 관심 부탁드립니다.
            </P>
          </li>
        </Ul>
        <Ul>
          <Li>
            <Figure>
              <Image src='/profile1.png' alt='총기획단장' />
              <Figcaption>
                <P>16기 총기획단장</P>
                <P>이민재</P>
              </Figcaption>
            </Figure>
          </Li>
          <Li>
            <Figure>
              <Image src='/profile1.png' alt='총기획단장' />
              <Figcaption>
                <P>16기 총기획단장</P>
                <P>이민재</P>
              </Figcaption>
            </Figure>
          </Li>
          <Li>
            <Figure>
              <Image src='/profile1.png' alt='총기획단장' />
              <Figcaption>
                <P>16기 총기획단장</P>
                <P>이민재</P>
              </Figcaption>
            </Figure>
          </Li>
          <Li>
            <Figure>
              <Image src='/profile1.png' alt='총기획단장' />
              <Figcaption>
                <P>16기 총기획단장</P>
                <P>이민재</P>
              </Figcaption>
            </Figure>
          </Li>
        </Ul>
      </MainSection>
      <MainSection>
        <H2>부서소개</H2>
        <Image width='100%' src='./../../public/fieldIntro1.png' alt='' />
        <div>
          <button type='button'>기획부</button>
          <button type='button'>대협</button>
          <button type='button'>컴페</button>
          <button type='button'>홍보</button>
        </div>
        <Card>
          <Dl>
            <Dt>기획부</Dt>
            <Dd>FIELD 인적, 학술적 교류를 활성화하기 위한 컨텐츠를 기획하고 진행, 총괄하는 부서</Dd>
          </Dl>
          <CardUl>
            <CardKeyWordLi margin='0 0 0 40%'>
              <CardKeyWordSpan color='yellow'>대인관계능력</CardKeyWordSpan>
            </CardKeyWordLi>
            <CardKeyWordLi margin='0 0 0 5%'>
              <CardKeyWordSpan color='red'>리더쉽</CardKeyWordSpan>
            </CardKeyWordLi>
            <CardKeyWordLi margin='0 0 0 35%'>
              <CardKeyWordSpan color='blue'>창의력</CardKeyWordSpan>
            </CardKeyWordLi>
          </CardUl>
          <CardHashTagUl margin='1rem 0'>
            <CardHashTagLi>#FIELD열정맨</CardHashTagLi>
            <CardHashTagLi>#FIELD에너지</CardHashTagLi>
            <CardHashTagLi>#즐거움이공존하는이곳</CardHashTagLi>
          </CardHashTagUl>
        </Card>
        <div>
          <h4>What&apos;s Activity Planning Department</h4>
          <ul>
            <li>Field 유튜브</li>
            <li>Field 유튜브</li>
            <li>Field 유튜브</li>
            <li>Field 유튜브</li>
          </ul>
        </div>
      </MainSection>
    </>
  );
}

export default AboutPage;

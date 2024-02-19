import React from 'react';
import styled from 'styled-components';
import DepartmentIntro from '../components/About/DepartmentIntro';
import theme from '../theme';

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

function AboutPage() {
  return (
    <>
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
        <DepartmentIntro />
      </MainSection>
    </>
  );
}

export default AboutPage;

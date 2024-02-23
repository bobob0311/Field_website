import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import DepartmentIntro from '../components/About/DepartmentIntro';
import {ProfileApi} from '../lib/Apiservice';
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
  margin: 0 7.5%;
`;

const H2 = styled.h2`
  font-size: 1.7rem;
  margin: ${props => props.margin || '0'};
  text-align: center;
`;

const NanumH2 = styled(H2)`
  font-family: 'Nanum Myeongjo', serif;
`;

const GoblinH2 = styled(H2)`
  font-family: 'Goblin One';
  font-size: 1.875rem;
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
  font-weight: ${props => (props.weight ? props.weight : '')};
`;

const GoblinP = styled(P)`
  font-family: 'Goblin One';
`;

const FirstAlphabet = styled.span`
  color: ${props => (props.color ? theme.colors[props.color] : '')};
`;

const Image = styled.img`
  margin: ${props => props.margin || '0'};
  width: ${props => props.width || ''};
  border-radius: ${props => props.radius || ''};
  height: auto;
  aspect-ratio: 1/1.3;
`;

const MainSection = styled.section`
  margin: 7.5%;
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
  const [profileData, setProfileData] = useState([]);
  const imageUrl = `${import.meta.env.VITE_API_URL}/api/files/i4n7e8c0u8882do/`;
  const getProfile = async () => {
    try {
      const response = await ProfileApi();
      setProfileData(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const leader = profileData.slice(0, 2);
  const depart = profileData.slice(2, 6);

  return (
    <>
      <AccessibilityHidden>어바웃 필드</AccessibilityHidden>
      <TitleContainer>
        <NanumH2 margin='2rem 0'>전국 대학생 산업공학도 모임</NanumH2>
        <GoblinP size='2.25rem' line='1.5'>
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
        <P line='1.5' margin='2rem 0 0 0' size='1.3rem'>
          FIELD란, ‘Future Industrial Engineering Leaders and Dreamers’ 의 약자로, 미래의 핵심
          리더들이 될 산업 공학도들이 모여 서로의 꿈과 비전, 생각 등을 공유할 수 있는 교류의 장을
          만든다는 목표 아래 모인 &apos;전국 대학생 산업공학도 동아리&apos; 입니다.
        </P>
        <FlexCenter>
          <Figure position='absolute'>
            <Icon src='/scrollDown.png' />
            <IconFigcaption>아래로 스크롤하세요</IconFigcaption>
          </Figure>
        </FlexCenter>
      </TitleContainer>
      <MainSection>
        <GoblinH2>Road of FIELD</GoblinH2>
      </MainSection>
      <MainSection>
        <NanumH2>16기 단장단과 함께 여러분의 꿈을 실현하세요.</NanumH2>
        <Ul margin='2rem 0'>
          {leader.map(item => (
            <li>
              <Figure>
                <Image
                  src={`${imageUrl}${item.id}/${item.photo}`}
                  alt='총기획단장'
                  width='50%'
                  radius='50%'
                />
                <Figcaption margin='1rem 0'>
                  <P weight='900'>{item.department}</P>
                  <P weight='900'>{item.name}</P>
                </Figcaption>
              </Figure>
              <P line='1.5'>{item.intro}</P>
            </li>
          ))}
        </Ul>
        <Ul>
          {depart.map(item => (
            <Li>
              <Figure>
                <Image
                  src={`${imageUrl}${item.id}/${item.photo}`}
                  alt='총기획단장'
                  width='100%'
                  radius='50%'
                />
                <Figcaption margin='1rem 0'>
                  <P weight='900'>{item.department}</P>
                  <P weight='900'>{item.name}</P>
                </Figcaption>
              </Figure>
            </Li>
          ))}
        </Ul>
      </MainSection>
      <MainSection>
        <DepartmentIntro />
      </MainSection>
    </>
  );
}

export default AboutPage;

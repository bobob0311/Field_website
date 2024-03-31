import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {ProfileApi} from '../../lib/Apiservice';

const MainSection = styled.section`
  margin: 7.5%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1280px) {
    margin: 0 15%;
  }
`;

const H2 = styled.h2`
  font-size: 1.7rem;
  margin: ${props => props.$margin || '0'};
  text-align: center;
`;

const NanumH2 = styled(H2)`
  font-size: 1.625rem;
  font-family: 'Nanum Myeongjo', serif;
  line-height: 1.3;
  word-break: keep-all;
  display: flex;
  font-weight: 600;
  flex-direction: column;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: ${props => props.$gap || '2rem'};
  margin: ${props => props.$margin || '0'};
  @media screen and (min-width: 1280px) {
    margin: ${props => props.$desktopMargin || ''};
  }
`;

const Li = styled.li`
  width: 40%;
  @media screen and (min-width: 1280px) {
    width: 20%;
  }
`;

const Image = styled.img`
  margin: ${props => props.$margin || '0'};
  width: 120px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  @media screen and (min-width: 1280px) {
    width: ${props => props.width || props.width || ''};
    height: ${props => props.height || props.width || ''};
  }
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: ${props => props.position || ''};
  bottom: 1rem;
`;

const ProfileLi = styled.li`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    gap: 130px;
  }
`;

const Figcaption = styled.figcaption`
  margin: ${props => props.$margin || '0'};
  line-height: 1.5;
  text-align: center;
  font-size: ${props => props.$size || '1.25rem'};
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;

const Container = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    order: ${props => props.order || ''};
    justify-content: end;
    margin-bottom: 3rem;
  }
`;

const P = styled.p`
  margin: ${props => props.$margin || '0'};
  line-height: ${props => props.$line || ''};
  color: ${props => (props.color ? theme.colors[props.color] : '')};
  font-size: ${props => (props.$size ? props.$size : '1.25rem')};
  display: flex;
  flex-direction: column;
  max-width: 408px;
  font-weight: ${props => (props.$weight ? props.$weight : '')};
  @media screen and (min-width: 1280px) {
    font-size: ${props => (props.$desktopSize ? props.$desktopSize : '')};
    margin-top: ${props => props.$desktopMargin || ''};
  }
`;

function ManagerIntro() {
  const [profileData, setProfileData] = useState([]);
  const EXPIRY_DURATION = 365 * 24 * 60 * 60 * 1000;

  const getProfile = async () => {
    try {
      const localData = localStorage.getItem('profileData');
      const expiryTime = localStorage.getItem('expiryTime');
      if (localData && expiryTime && new Date().getTime() < expiryTime) {
        setProfileData(JSON.parse(localData));
      } else {
        const response = await ProfileApi();
        setProfileData(response);
        localStorage.setItem('profileData', JSON.stringify(response));
        localStorage.setItem('expiryTime', new Date().getTime() + EXPIRY_DURATION);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const imageUrl = `${import.meta.env.VITE_API_URL}/api/files/i4n7e8c0u8882do/`;

  useEffect(() => {
    getProfile();
  }, []);

  const leader = profileData.slice(0, 1);
  const secondLeader = profileData.slice(1, 2);
  const depart = profileData.slice(2, 6);
  return (
    <MainSection>
      <NanumH2 $margin='5rem 0'>
        <span>16기 단장단과 함께</span>
        <span>여러분의 꿈을 실현하세요.</span>
      </NanumH2>
      <Ul $margin='2rem 0' $gap='5rem'>
        {leader.map(item => (
          <ProfileLi key={item.id}>
            <Figure>
              <Image
                src={`${imageUrl}${item.id}/${item.photo}`}
                width='250px'
                height='300px'
                radius='50%'
              />
              <Figcaption $margin='3rem 0'>
                <P $weight='900' $desktopSize='1rem'>
                  {item.department}
                </P>
                <P $weight='900' $desktopSize='1rem'>
                  {item.name}
                </P>
              </Figcaption>
            </Figure>
            <Container>
              <P
                $desktopSize='1rem'
                $line='1.3'
                $weight='800'
                $desktopMargin='1rem'
                $size='1.125rem'
              >
                {item.introTitle}
              </P>
              <P
                $size='1rem'
                $line='1.5'
                $margin='1rem 0 0 0'
                $desktopSize='0.8rem'
                $desktopMargin='2rem'
              >
                {item.intro}
              </P>
            </Container>
          </ProfileLi>
        ))}
      </Ul>
      <Ul $margin='4rem 0' $gap='5rem'>
        {secondLeader.map(item => (
          <ProfileLi key={item.id}>
            <Figure>
              <Image
                src={`${imageUrl}${item.id}/${item.photo}`}
                width='250px'
                height='300px'
                radius='50%'
              />
              <Figcaption $margin='3rem 0'>
                <P $weight='900' $desktopSize='1rem'>
                  {item.department}
                </P>
                <P $weight='900' $desktopSize='1rem'>
                  {item.name}
                </P>
              </Figcaption>
            </Figure>
            <Container order='-1'>
              <P
                $desktopSize='1rem'
                $line='1.3'
                $weight='800'
                $desktopMargin='1rem'
                $size='1.125rem'
              >
                {item.introTitle}
              </P>
              <P
                $size='1rem'
                $line='1.5'
                $margin='1rem 0 0 0'
                $desktopSize='0.8rem'
                $desktopMargin='2rem'
              >
                {item.intro}
              </P>
            </Container>
          </ProfileLi>
        ))}
      </Ul>
      <Ul $margin='4rem 0' $desktopMargin='10rem 0'>
        {depart.map(item => (
          <Li key={item.id}>
            <Figure>
              <Image
                src={`${imageUrl}${item.id}/${item.photo}`}
                width='200px'
                height='250px'
                radius='50%'
              />
              <Figcaption $margin='1rem 0'>
                <P $weight='900' $desktopSize='0.8rem' $size='1rem'>
                  {item.department}
                </P>
                <P $weight='900' $desktopSize='0.8rem' $size='1rem'>
                  {item.name}
                </P>
              </Figcaption>
            </Figure>
          </Li>
        ))}
      </Ul>
    </MainSection>
  );
}

export default ManagerIntro;

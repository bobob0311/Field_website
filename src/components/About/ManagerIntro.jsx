import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

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

const NanumH2 = styled(H2)`
  font-size: 1.5rem;
  font-family: 'Nanum Myeongjo', serif;
  line-height: 1.3;
  word-break: keep-all;
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

const Image = styled.img`
  margin: ${props => props.margin || '0'};
  width: ${props => props.width || ''};
  border-radius: ${props => props.radius || ''};
  height: ${props => props.height || ''};
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: ${props => props.position || ''};
  bottom: 1rem;
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

function ManagerIntro() {
  const [profileData, setProfileData] = useState([]);
  const imageUrl = `${import.meta.env.VITE_API_URL}/api/files/i4n7e8c0u8882do/`;
  const getProfile = async () => {
    try {
      const localData = localStorage.getItem('profileData');
      if (localData) {
        setProfileData(JSON.parse(localData));
      } else {
        const response = await ProfileApi();
        setProfileData(response);
        localStorage.setItem('profileData', JSON.stringify(response));
      }
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
    <MainSection>
      <NanumH2>16기 단장단과 함께 여러분의 꿈을 실현하세요.</NanumH2>
      <Ul margin='2rem 0'>
        {leader.map(item => (
          <li>
            <Figure>
              <Image
                src={`${imageUrl}${item.id}/${item.photo}`}
                width='120px'
                height='150px'
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
                width='120px'
                height='150px'
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
  );
}

export default ManagerIntro;

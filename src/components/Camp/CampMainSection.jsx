import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../../assets/CampBackground.jpg';
import scrollDown from '../../assets/transfer-down-light.svg';
import theme from '../../theme';

const H1 = styled.h1`
  position: ${props => (props.position ? props.position : '')};
  bottom: ${props => (props.bottom ? props.bottom : '')};
  top: ${props => (props.top ? props.top : '')};
  font-size: 1.875rem;
  text-align: center;
`;

const TitleContainer = styled.section`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${props => props.src});
  background-position: center;
  background-size: ${props => (props.size ? props.size : 'cover')};
  background-repeat: no-repeat;
`;

const Button = styled.button`
type=button
  background: ${theme.colors.white};
  color: ${theme.colors.black};
  width: 8rem;
  padding: .625rem;
  margin-bottom: 1.25rem;
  border: none;
  border-radius: 5rem;
  font-weight: bold;
  font-family: "SUIT-Regular";
  font-size: .9375rem;
  word-break: keep-all;
`;

const TitleH2 = styled.h2`
  font-size: 2.5rem;
  padding: ${props => (props.padding ? props.padding : '2rem 10%  0 10% ')};
  text-align: center;
  font-family: 'Nanum Brush Script', cursive;
`;

const Figure = styled.figure`
  position: ${props => (props.position ? props.position : '')};
  bottom: ${props => (props.bottom ? props.bottom : '0')};
  left: ${props => (props.left ? props.left : '0')};
  transform: ${props => (props.transform ? props.transform : '')};
  align-items: center;
  display: flex; /* 추가됨 */
  flex-direction: column; /* 추가됨 */
  align-items: center; /* 추가됨 */
`;

const Img = styled.img`
  width: ${props => (props.width ? props.width : '')};
  height: ${props => (props.height ? props.height : '')};
  object-fit: cover;
  align-self: ${props => (props.alignSelf ? props.alignSelf : '')};
`;

const Figcaption = styled.figcaption`
  color: ${props => (props.color ? theme.colors[props.color] : theme.colors.white)};
`;

function CampMainSection() {
  return (
    <div>
      <TitleContainer src={backgroundImg}>
        <H1 position='absolute' top='5rem'>
          FIELD CAMP
        </H1>
        <TitleH2 padding='0rem 10% 0 10%'>팀원과 함께</TitleH2>
        <TitleH2 padding='0 10% 0 10%'>여러분의 열정을 보여주세요!!</TitleH2>

        <Figure bottom='1rem' position='absolute' left='50%' transform='translate(-50%)'>
          <Button>FIELD CAMP 지원하기</Button>
          <Img
            src={scrollDown}
            width='1.875rem'
            height='1.875rem'
            object-fit='cover'
            alt='아래로 스크롤하세요'
            alignSelf='center'
          />
          <Figcaption>아래로 스크롤하세요</Figcaption>
        </Figure>
      </TitleContainer>
    </div>
  );
}

export default CampMainSection;

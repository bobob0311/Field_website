import {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import theme from '../../theme';
import Instagram from '../../../public/InstagramIcon.png';
import Youtube from '../../../public/YoutubeIcon.png';
import KakaoTalk from '../../../public/KakaoTalkIcon.png';

const slideUp110 = keyframes`
  0% {

    transform: translateY(110%);
  }

  100% {
 
    transform: translateY(0%);
  }
`;
const slideUp230 = keyframes`
  0% {

    transform: translateY(230%);
  }

  100% {
 
    transform: translateY(0%);
  }
`;

const slideUp350 = keyframes`
  0% {

    transform: translateY(350%);
  }

  100% {
 
    transform: translateY(0%);
  }
`;

const IconWrapper = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: 10%;
  right: 1rem;
  z-index: 2;
`;

const BaseIcon = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  background: ${theme.colors.white};
  border-radius: 50%;
  margin: 0.25rem 0;
`;

const Icon = styled.a`
  animation: ${props => props.$move} 0.5s ease-in-out;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin: 0.25rem 0;
`;

function LinkIcon({move, src, alt, href}) {
  return (
    <Icon $move={move} href={href} target='_blank'>
      <img src={src} alt={alt} />
    </Icon>
  );
}

export default function SideBar() {
  const [toggle, setToggle] = useState(false);

  function openHandler() {
    setToggle(!toggle);
  }
  return (
    <IconWrapper $toggle={toggle}>
      {toggle && (
        <>
          <LinkIcon
            move={slideUp350}
            src={KakaoTalk}
            alt='KakaoTalk Icon'
            href='http://pf.kakao.com/_uwNxeK'
          />
          <LinkIcon
            move={slideUp230}
            src={Instagram}
            alt='instagram Icon'
            href='https://www.instagram.com/iefield/'
          />
          <LinkIcon
            move={slideUp110}
            src={Youtube}
            alt='Youtube Icon'
            href='https://www.youtube.com/@field2023'
          />
        </>
      )}
      <BaseIcon onClick={() => openHandler()} />
    </IconWrapper>
  );
}

import {useState} from 'react';
import styled, {keyframes, css} from 'styled-components';
import theme from '../../theme';
import Instagram from '../../../public/InstagramIcon.png';
import Youtube from '../../../public/YoutubeIcon.png';
import KakaoTalk from '../../../public/KakaoTalkIcon.png';

const turnRight = keyframes`
  0% {
    transform: rotate(0deg) ;
  }
  100% {
    transform: rotate(-45deg) 
  }
`;

const turnLeft = keyframes`
  0% {
    transform: rotate(-45deg) ;
  }
  100% {
    transform: rotate(0deg) 
  }
`;

const slideUp70 = keyframes`
  0% {

    transform: translateY(70%);
  }

  100% {
 
    transform: translateY(0%);
  }
`;
const slideUp190 = keyframes`
  0% {

    transform: translateY(190%);
  }

  100% {
 
    transform: translateY(0%);
  }
`;

const slideUp310 = keyframes`
  0% {

    transform: translateY(310%);
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

const Plus = styled.svg`
  animation: ${({$toggle}) =>
    $toggle
      ? css`
          ${turnRight} 0.3s forwards
        `
      : css`
          ${turnLeft} 0.3s forwards
        `};
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
    <IconWrapper onClick={() => openHandler()}>
      {toggle && (
        <>
          <LinkIcon
            move={slideUp310}
            src={KakaoTalk}
            alt='KakaoTalk Icon'
            href='http://pf.kakao.com/_uwNxeK'
          />
          <LinkIcon
            move={slideUp190}
            src={Instagram}
            alt='instagram Icon'
            href='https://www.instagram.com/iefield/'
          />
          <LinkIcon
            move={slideUp70}
            src={Youtube}
            alt='Youtube Icon'
            href='https://www.youtube.com/@field2023'
          />
        </>
      )}
      <BaseIcon>
        <Plus
          $toggle={toggle ? 'true' : undefined}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'
          fill='none'
          stroke='currentColor'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <line x1='0' y1='12' x2='24' y2='12' />
          <line x1='12' y1='0' x2='12' y2='24' />
        </Plus>
      </BaseIcon>
    </IconWrapper>
  );
}

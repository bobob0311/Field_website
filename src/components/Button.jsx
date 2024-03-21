import React from 'react';
import styled, {keyframes, css} from 'styled-components';
import theme from '../theme';

const buttonAnimation = keyframes`
  30% { transform: scale(1.1); }
  40%, 60% { transform: rotate(-10deg) scale(1.1); }
  50% { transform: rotate(10deg) scale(1.1); }
  70% { transform: rotate(0deg) scale(1.1); }
  100% { transform: scale(1); }
}
`;

const WhiteButton = styled.button`
  background: ${theme.colors.white};
  color: ${theme.colors.black};
  width: 8rem;
  padding: 0.75rem;
  margin-bottom: 1.25rem;
  border: none;
  border-radius: 5rem;
  font-family: SUIT;
  font-weight: 800;
  font-size: 0.9375rem;
  word-break: keep-all;
  box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
  ${props =>
    props.$animate &&
    css`
      animation: ${buttonAnimation} 3s infinite;
    `}
  @media screen and (min-width: 1280px) {
    font-size: 22px;
    width: 200px;
    height: 80px;
    padding: 0;
  }
`;

function Button({label, onClick, animate}) {
  return (
    <WhiteButton $animate={animate} onClick={onClick}>
      {label}
    </WhiteButton>
  );
}

export default Button;

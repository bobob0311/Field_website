import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const WhiteButton = styled.button`
type=button
  background: ${theme.colors.white};
  color: ${theme.colors.black};
  width: 8rem;
  padding: 0.75rem;
  margin-bottom: 1.25rem;
  border: none;
  border-radius: 5rem;
  font-family: SUIT;
  font-weight: bold;
  font-size: .9375rem;
  word-break: keep-all;
  letter-spacing: 0.05em;
  box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
`;

function Button({label, onClick}) {
  return <WhiteButton onClick={onClick}>{label}</WhiteButton>;
}

export default Button;

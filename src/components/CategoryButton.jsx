import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Button = styled.button`
  background-color: transparent;
  color: white;
  margin: 0rem;
  cursor: pointer;
  width: 25%;
  border: 1px solid white;
  font-size: 0.8rem;

  ${props =>
    props.isActive &&
    `
    background-color: ${theme.colors.blue};
    color: blue;
  `}
`;

function CategoryButton({label, onClick, isActive}) {
  return (
    <Button onClick={onClick} isActive={isActive}>
      {label}
    </Button>
  );
}

export default CategoryButton;

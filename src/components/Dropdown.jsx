import React from 'react';
import styled from 'styled-components'; // styled-components import 추가
import theme from '../theme'; // theme 객체 import (경로는 실제 상황에 맞게 조정해야 함)

const TypeSelect = styled.select`
  color: white;
  appearance: none;
  border: 0.13rem solid ${theme.colors.white};
  font-size: 1rem;
  font-family: 'SUIT-Regular';
  font-weight: 900;
  background-color: white;
  background: url('Expand_down_white.png') no-repeat 100% 10%;
  background-size: 2rem 2rem;
  border-radius: 0.7rem;
  padding: 0 0 0 0.5rem;
  width: 15rem;
  height: 2.4rem;
  z-index: 0;
`;

const Option = styled.option`
  color: black;
  appearance: none;
  font-family: 'SUIT-Regular';
  font-weight: 900;
  font-size: 1rem;
  background-color: transparent;
`;

function Dropdown({title, titleArr}) {
  return (
    <TypeSelect name='Type' autoComplete='off'>
      <Option value='선택하지않음'>{title}</Option>
      {titleArr.map(item => (
        <Option>{item} FIELD CAMP</Option>
      ))}
      <Option value='후원'>후원</Option>
      <Option value='문의'>문의</Option>
      <Option value='기타'>기타</Option>
    </TypeSelect>
  );
}

export default Dropdown;

import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {setCampTitle} from '../redux/campTitleSlice';

const TypeSelect = styled.select`
  margin: 1rem 7.5%;
  color: white;
  appearance: none;
  border: 0.11rem solid white;
  font-size: 1rem;
  font-family: 'SUIT-Regular';
  font-weight: 800;
  background-color: white;
  background: url('Expand_down_white.png') no-repeat 100% 10%;
  background-size: 2rem;
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
  const dispatch = useDispatch();
  const handleChange = event => {
    const selectedTitle = parseInt(event.target.value, 10);
    console.log(selectedTitle);
    dispatch(setCampTitle(selectedTitle));
  };

  return (
    <TypeSelect name='Type' autoComplete='off' onChange={handleChange}>
      <Option value='선택하지않음'>{title}</Option>
      {titleArr.map(item => (
        <Option key={item} value={item}>
          {item} FIELD CAMP
        </Option>
      ))}
    </TypeSelect>
  );
}

export default Dropdown;

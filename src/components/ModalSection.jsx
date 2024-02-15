import React, {useState} from 'react';
import styled from 'styled-components';
import modalIcon from '../assets/modalIcon.png';
import Modal from './Modal';

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  item-align: center;
  gap: 0.25rem;
  margin: ${props => (props.margin ? props.margin : '2rem 0 ')};
`;

const IconImg = styled.img`
  width: auto;
  height: auto;
`;

const H2 = styled.h2`
  font-size: ${props => (props.size ? props.size : '1.625rem')};
  color: ${props => (props.color ? theme.colors[props.color] : 'white')};
  font-family: ${props => (props.font ? props.font : '')};
  font-weight: bold;
`;

function ModalSection({title, color, font, fontSize}) {
  const [showModal, setShowModal] = useState(false);
  const lst = [2022, 2023];
  return (
    <IconWrapper>
      <IconImg
        src={modalIcon}
        alt='모달창 아이콘'
        onClick={() => {
          setShowModal(true);
        }}
      />
      <H2 font={font} color={color} size={fontSize}>
        {title}
      </H2>
      <Modal titleData={lst} showModal={showModal} setShowModal={setShowModal} />
    </IconWrapper>
  );
}

export default ModalSection;

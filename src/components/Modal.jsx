import React from 'react';
import styled from 'styled-components';
import modalCloseIcon from '../assets/modalClose.png';
import theme from '../theme';

const ModalBackground = styled.section`
  position: fixed;
  top: 25%;
  left: 12.5%;
  width: 75%;
  height: 25%;
  background: rgba(0, 0, 0, 0.35);
  border: solid;
  border-radius: 1.875rem;
`;

const ButtonWrapper = styled.div`
  border-bottom: solid;
  display: flex;
  jusitfy-content: start;
`;

const CloseButton = styled.img`
  width: 2.25rem;
  height: 2.25rem;
  padding: 0 0.5rem;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const Li = styled.li`
  font-size: 1rem;
  text-align: center;
  color: ${theme.colors.yellow};
  margin: 1rem 0 0 0;
`;

function Modal({titleData, showModal, setShowModal}) {
  if (!showModal) {
    return null;
  }
  return (
    <ModalBackground>
      <ButtonWrapper>
        <CloseButton onClick={() => setShowModal(false)} src={modalCloseIcon} />
      </ButtonWrapper>
      <Ul>{titleData ? titleData.map(item => <Li type='disc'>{item} Field Camp</Li>) : ''}</Ul>
    </ModalBackground>
  );
}

export default Modal;

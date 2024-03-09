import React, {useEffect} from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import {useDispatch} from 'react-redux';
import modalCloseIcon from '../assets/modalClose.png';
import theme from '../theme';

const ModalContainer = styled.section`
  position: fixed;
  top: 20%;
  left: 10%;
  width: 80%;
  max-height: 70%;
  background: rgba(0, 0, 0, 1);
  border: solid;
  border-radius: 1.25rem;
  z-index: 1000;
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
  flex-wrap: wrap;
  gap: 5%;
  overflow: auto;
  max-height: 300px;
  width: 100%;
`;

const Li = styled.li`
  font-size: 1rem;
  width: 45%;
  color: ${theme.colors.yellow};
  margin: 1rem 0;
  cursor: pointer;
`;

function Modal({titleData, showModal, setShowModal, name = '', setModalItem}) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!showModal) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalContainer>
      <ButtonWrapper>
        <CloseButton onClick={() => setShowModal(false)} src={modalCloseIcon} />
      </ButtonWrapper>
      <Ul>
        {titleData &&
          titleData.map(item => (
            <Li
              key={item}
              onClick={() => {
                setShowModal(false);
                dispatch(setModalItem(item));
                console.log(item);
              }}
            >
              {item} {name}
            </Li>
          ))}
      </Ul>
    </ModalContainer>,
    document.getElementById('modal'),
  );
}

export default Modal;

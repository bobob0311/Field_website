import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {setDataCampYear} from '../redux/campYearSlice';
import modalCloseIcon from '../assets/modalClose.png';
import theme from '../theme';

const ModalBackground = styled.section`
  position: fixed;
  top: 25%;
  width: 75%;
  height: full;
  background: rgba(0, 0, 0, 0.5);
  border: solid;
  border-radius: 1.25rem;
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
  margin: 1rem 1rem;
  ::marker {
    padding: 0;
    margin: 0;
  }
`;

function Modal({titleData, showModal, setShowModal}) {
  const dispatch = useDispatch();

  if (!showModal) {
    return null;
  }

  return (
    <ModalBackground>
      <ButtonWrapper>
        <CloseButton onClick={() => setShowModal(false)} src={modalCloseIcon} />
      </ButtonWrapper>
      <Ul>
        {titleData
          ? titleData.map((item, idx) => (
              <Li
                key={idx}
                type='disc'
                onClick={() => {
                  dispatch(setDataCampYear(item)); // 클릭된 항목의 값을 dispatch
                }}
              >
                {item} Field Camp
              </Li>
            ))
          : ''}
      </Ul>
    </ModalBackground>
  );
}

export default Modal;

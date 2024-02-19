import React, {useEffect} from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom'; // createPortal을 사용하기 위해 필요
import {useDispatch} from 'react-redux';
import {setDataCampYear} from '../redux/campYearSlice';
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
  overflow: auto; // 스크롤 가능하도록 설정
  max-height: 300px; // 예시로 300px로 설정. 적절한 값으로 조절하세요.
  width: 100%; // 전체 너비를 사용하도록 설정
`;

const Li = styled.li`
  font-size: 1rem;
  width: 38%;
  color: ${theme.colors.yellow};
  margin: 1rem 0;
  cursor: pointer;
`;

function Modal({titleData, showModal, setShowModal}) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    }

    // 클린업 함수: 모달이 닫힐 때 스크롤을 다시 활성화한다
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
                dispatch(setDataCampYear(item));
                setShowModal(false); // 클릭된 항목의 값을 dispatch
              }}
            >
              {item} Field Camp
            </Li>
          ))}
        <Li>2021 Field Camp</Li>
        <Li>2025 Field camp</Li>
        <Li>2026 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
        <Li>2021 Field camp</Li>
      </Ul>
    </ModalContainer>,
    document.getElementById('modal'),
  );
}

export default Modal;

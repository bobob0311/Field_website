import {createPortal} from 'react-dom';
import styled, {keyframes} from 'styled-components';
import theme from '../../theme';

const slideDownAnimation = keyframes`
  0% {
    transform: translateY(-100%);
  }

  80%{
    transform: translateY(10%);
  }

  100% {
    transform: translateY(0%);
  }
`;

const ModalBackground = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const Modal = styled.section`
  position: relative;
  top: 35%;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  height: 20%;
  width: 80%;
  animation: ${slideDownAnimation} 0.5s ease-in-out;
  border-radius: 2rem;
  align-items: center;
  &::before {
    position: absolute;
    content: '';
    background: url('fieldLogo.png') no-repeat;
    width: 4rem;
    height: 4rem;
    top: -0.5rem;
    left: -0.5rem;
    background-size: cover;
  }
`;

const ModalButton = styled.button`
  appearance: none;
  width: 10rem;
  height: 3rem;
  font-size: 1.25rem;
  border-radius: 2rem;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  margin: 1.5rem 0 0 0;
  font-weight: 800;
`;

const ModalP = styled.p`
  margin: ${props => (props.mg ? props.mg : '0 0 0 0')};
  color: ${theme.colors.black};
  font-size: 1.2rem;
  font-weight: 800;
`;

const portalElement = document.getElementById('modal');

export default function ContactModal(props) {
  const {valid, onClose} = props;

  let content;
  if (valid) {
    content = (
      <>
        <ModalP mg='2.2rem 0 0 0'>소중한 의견 감사합니다.</ModalP>
        <ModalP mg='0.7rem 0 0 0'>추후에 메일로 연락드리겠습니다.</ModalP>
      </>
    );
  } else {
    content = (
      <>
        <ModalP mg='2.2rem 0 0 0'>올바르지 않는 형식입니다.</ModalP>
        <ModalP mg='0.7rem 0 0 0'>체크된 항목을 확인해주세요</ModalP>
      </>
    );
  }

  function MessageBox() {
    return (
      <ModalBackground>
        <Modal>
          {content}
          <ModalButton type='button' onClick={onClose}>
            확인하기
          </ModalButton>
        </Modal>
      </ModalBackground>
    );
  }

  return createPortal(MessageBox(), portalElement);
}

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

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingSpin = styled.div`
  margin: 1rem auto 0;
  width: 2rem;
  height: 2rem;
  border: 0.2rem solid transparent;
  border-top-color: ${theme.colors.black};
  border-radius: 50%;
  animation: ${spin} 0.5s linear infinite;
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
  height: 12rem;
  width: 85%;
  animation: ${slideDownAnimation} 0.5s ease-in-out;
  border-radius: 2rem;
  align-items: center;
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
  text-align: center;
`;

const portalElement = document.getElementById('modal');

export default function ContactModal(props) {
  const {valid, onClose, loading, error} = props;

  let content;
  if (loading) {
    content = (
      <>
        <LoadingSpin />
        <ModalP mg='3rem 0 0 0'>저장중입니다 잠시만 기다려주세요.</ModalP>
      </>
    );
  } else if (error) {
    content = (
      <>
        <ModalP mg='2.2rem 0 0 0'>실행에 실패하였습니다.</ModalP>
        <ModalP mg='0.7rem 0 0 0'>잠시 후 다시 시도해주세요.</ModalP>
        <ModalButton type='button' onClick={onClose}>
          확인하기
        </ModalButton>
      </>
    );
  } else if (valid) {
    content = (
      <>
        <ModalP mg='2.2rem 0 0 0'>소중한 의견 감사합니다.</ModalP>
        <ModalP mg='0.7rem 0 0 0'>추후에 메일로 연락드리겠습니다.</ModalP>
        <ModalButton type='button' onClick={onClose}>
          확인하기
        </ModalButton>
      </>
    );
  } else {
    content = (
      <>
        <div>
          <ModalP mg='2.2rem 0 0 0'>올바르지 않는 형식입니다.</ModalP>
          <ModalP mg='0.7rem 0 0 0'>별표된 항목을 확인해주세요.</ModalP>
        </div>
        <ModalButton type='button' onClick={onClose}>
          확인하기
        </ModalButton>
      </>
    );
  }

  function MessageBox() {
    return (
      <ModalBackground>
        <Modal>{content}</Modal>
      </ModalBackground>
    );
  }

  return createPortal(MessageBox(), portalElement);
}

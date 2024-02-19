import styled from 'styled-components';
import {useRef, useState} from 'react';
import PocketBase from 'pocketbase';
import theme from '../../theme';
import ContactModal from './ContactModal';

const ContactSection = styled.section`
  background: ${theme.colors.white};
  border-radius: 1rem;
`;

const Form = styled.form`
  padding: 3% 1%;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)),
    url('fieldLogo.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50% auto;
`;

const InputLabel = styled.label`
  font-size: 1.2rem;
  margin: 1rem 0 0 0;
  display: block;
  color: ${theme.colors.black};
  font-weight: bold;
  padding: 0 1rem;
`;

const TypeLabel = styled(InputLabel)`
  position: absolute;
  margin: 0.8rem 0 0 0;
  display: flex;
  right: 11%;
`;

const TypeSelect = styled.select`
  color: ${theme.colors.black};
  appearance: none;
  border: 0.13rem solid ${theme.colors.black};
  font-size: 1rem;
  font-weight: 600;
  background: url('Expand_down.png') no-repeat 100% 10%;
  background-size: 2rem 2rem;
  border-radius: 0.7rem;
  padding: 0 0 0 0.5rem;
  width: 7.3rem;
  height: 2.4rem;
  z-index: 0;
`;

const Input = styled.input`
  color: ${theme.colors.black};
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  height: 1.7rem;
  border: none;
  border-bottom: 0.15rem solid ${theme.colors.black};
  padding: 0rem 0.2rem 0 0.1rem;
  box-sizing: border-box;
  background: none;
`;

const TextArea = styled.textarea`
  padding: 0.4rem;
  width: 100%;
  border: none;
  margin: 0.8rem 0 0 0;
  box-sizing: border-box;
  border-radius: 0.7rem;
  border: 0.15rem solid ${theme.colors.black};
  background: none;
  font-weight: 600;
`;

const SubmitButton = styled.button`
  background: ${theme.colors.white};
  font-size: 1.25rem;
  color: ${theme.colors.black};
  appearance: none;
  border: none;
  border: 0.05rem solid ${theme.colors.black};
  border-radius: 1rem;
  margin: 1.5rem auto;
  padding: 0.65rem 0.8rem 0.5rem 0.8rem;
  display: block;
  font-weight: 600;
  box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
`;
const ButtonImg = styled.img`
  widht: 1.5rem;
  height: 1.5rem;
  padding: 0 0 0.1rem 0;
  margin: 0 0 0 0.1rem;
`;
const Img = styled.img`
  height: 1.8rem;
  margin: 0 0.4rem 0 0rem;
  padding: 0.2rem 0 0 0;
`;
const VerticalCenter = styled.div`
  display: flex;
  align-items: center;
`;

const Option = styled.option`
  appearance: none;
`;

const Notice = styled.span`
  position: relative;

  &::before {
    content: '*';
    color: #ff0202;
    position: absolute;
    margin: 0;
    font-size: 1.5rem;
    left: ${props => (props.left ? props.left : '')};
    top: 0.2rem;
  }
`;

const initialValidationState = {
  isNameValid: undefined,
  isPhoneValid: undefined,
  isEmailValid: undefined,
  isTitleValid: undefined,
  isContentValid: undefined,
};

export default function ContactForm() {
  const enteredData = {
    type: useRef(null),
    name: useRef(null),
    email: useRef(null),
    phoneNumber: useRef(null),
    content: useRef(null),
    title: useRef(null),
  };
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [validationState, setValidationState] = useState(initialValidationState);
  const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phoneValid = /^[0-9]{9,11}$/;

  async function SendMessage({type, name, email, phoneNumber, content, title}) {
    const pb = new PocketBase(import.meta.env.VITE_REACT_APP_URL);
    const data = {
      Name: name,
      Type: type,
      Phone: phoneNumber,
      Email: email,
      Title: title,
      Content: content,
    };

    setIsLoading(true);

    await pb
      .collection('Message')
      .create(data)
      .then(() => {
        setError(false);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const Validation = submittedData => {
    let isEveryThingValid = false;

    const isNameValid = submittedData.name.trim() !== '';
    const isPhoneValid = phoneValid.test(submittedData.phoneNumber);
    const isEmailValid = emailValid.test(submittedData.email);
    const isTitleValid = submittedData.title.trim() !== '';
    const isContentValid = submittedData.content.trim() !== '';
    isEveryThingValid =
      isContentValid && isEmailValid && isTitleValid && isPhoneValid && isNameValid;
    setIsValid(isEveryThingValid);

    setValidationState(prevState => ({
      ...prevState,
      isNameValid,
      isPhoneValid,
      isEmailValid,
      isTitleValid,
      isContentValid,
    }));

    return isEveryThingValid;
  };

  const enterdDataHandler = event => {
    event.preventDefault();
    setIsOpen(true);
    const submittedData = {
      type: enteredData.type.current.value,
      name: enteredData.name.current.value,
      email: enteredData.email.current.value,
      phoneNumber: enteredData.phoneNumber.current.value,
      content: enteredData.content.current.value,
      title: enteredData.title.current.value,
    };

    const validationResult = Validation(submittedData);
    // validationResult가 참이면 db에 data저장
    if (validationResult) {
      SendMessage(submittedData);
    }
  };

  function modalCloseHandler() {
    setIsOpen(false);
    setError(false);
    window.location.reload();
  }

  return (
    <>
      <ContactSection>
        <Form onSubmit={enterdDataHandler}>
          <InputLabel>
            {validationState.isNameValid === false ? <Notice left='8.5rem' /> : null}
            <VerticalCenter>
              <Img src='happy.png' alt='웃는 아이콘' />
              이름 (회사)
            </VerticalCenter>
            <Input type='text' name='name' ref={enteredData.name} autoComplete='name' />
          </InputLabel>

          <InputLabel>
            {validationState.isPhoneValid === false ? <Notice left='6rem' /> : null}
            <VerticalCenter>
              <Img src='Phone.png' alt='핸드폰 아이콘' />
              연락처
            </VerticalCenter>
            <Input
              placeholder='01012345678'
              type='tel'
              name='phonenumber'
              ref={enteredData.phoneNumber}
              autoComplete='tel'
            />
          </InputLabel>

          <InputLabel>
            {validationState.isEmailValid === false ? <Notice left='5.6rem' /> : null}
            <VerticalCenter>
              <Img src='Message.png' alt='메세지 아이콘' />
              Email
            </VerticalCenter>
            <Input type='email' name='email' ref={enteredData.email} autoComplete='email' />
          </InputLabel>

          <InputLabel>
            {validationState.isTitleValid === false ? <Notice left='4.8rem' /> : null}
            <VerticalCenter>
              <Img src='Check.png' alt='체크모양 아이콘' />
              제목
            </VerticalCenter>
            <Input type='text' name='title' ref={enteredData.title} autoComplete='off' />
          </InputLabel>

          <TypeLabel>
            <TypeSelect ref={enteredData.type} autoComplete='off'>
              <Option value='선택하지않음'>문의유형</Option>
              <Option value='후원'>후원</Option>
              <Option value='문의'>문의</Option>
              <Option value='기타'>기타</Option>
            </TypeSelect>
          </TypeLabel>

          <InputLabel>
            {validationState.isContentValid === false ? <Notice left='4.8rem' /> : null}
            <VerticalCenter>
              <Img src='Chat_alt_3.png' alt='대화창 아이콘' width={30} />
              내용
            </VerticalCenter>
            <TextArea
              placeholder='내용을 입력하세요.'
              name='content'
              rows={20}
              ref={enteredData.content}
              autoComplete='off'
            />
          </InputLabel>

          <SubmitButton type='submit'>
            SEND
            <ButtonImg src='right_up_arrow.png' alt='제출 화살표' />
          </SubmitButton>
        </Form>
      </ContactSection>
      {isOpen && (
        <ContactModal
          valid={isValid}
          onClose={() => modalCloseHandler()}
          loading={isLoading}
          error={error}
        />
      )}
    </>
  );
}

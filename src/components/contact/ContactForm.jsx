import styled from 'styled-components';
import {useEffect, useState, useRef} from 'react';
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
  font-weight: 900;
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
  font-family: 'SUIT-Regular';
  font-weight: 900;
  background: url('Expand_down.png') no-repeat 100% 10%;
  background-size: 2rem 2rem;
  border-radius: 0.7rem;
  padding: 0 0 0 0.5rem;
  width: 7.3rem;
  height: 2.4rem;
  z-index: 0;
`;

const Input = styled.input`
  appearance: none;
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
  border-radius: 0;
`;

const TextArea = styled.textarea`
  padding: 0.4rem;
  width: 100%;
  border: none;
  margin: 0.8rem 0 0 0;
  box-sizing: border-box;
  border-radius: 0.7rem;
  border: 0.15rem solid ${theme.colors.black};
  font-family: 'SUIT-Regular';
  font-size: 1rem;
  background: none;
  font-weight: 700;
`;

const SubmitButton = styled.button`
  background: ${theme.colors.white};
  font-family: 'SUIT';
  font-size: 1.25rem;
  color: ${theme.colors.black};
  appearance: none;
  border: none;
  border: 0.05rem solid ${theme.colors.black};
  border-radius: 1rem;
  margin: 1.5rem auto;
  padding: 0.65rem 1.4rem 0.7rem 1.4rem;
  display: block;
  font-weight: 900;
  box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
`;
const ButtonImg = styled.img`
  widht: 1.5rem;
  height: 1.5rem;
  margin: 0 0 0 0.1rem;
`;
const Img = styled.img`
  height: 1.8rem;
  margin: 0 0.4rem 0 0rem;
  padding: 0 0 0 0;
`;
const VerticalCenter = styled.div`
  display: flex;
  align-items: center;
`;

const Option = styled.option`
  appearance: none;
  font-family: 'SUIT-Regular';
  font-weight: 900;
  font-size: 1rem;
`;

const Check = styled.span`
filter : brightness(0.4) invert(0.7) sepia(0.4) saturate(10000%) hue-rotate(70deg);
  padding: 0 0 0.5rem 0.3rem;
  font-size: 1.2rem;
`;

const Star = styled.span`
  color: red;
  padding: 0 0 0.5rem 0.2rem;
  font-size: 1.4rem;
`;

const initialValidationState = {
  isNameValid: false,
  isPhoneValid: false,
  isEmailValid: false,
  isTitleValid: false,
  isContentValid: false,
};

function InputBox({validName, imgSrc, imgAlt, name, children}) {
  return (
    <InputLabel>
      <VerticalCenter>
        <Img src={imgSrc} alt={imgAlt} />
        {name}
        {!validName ? <Star>*</Star> : <Check> ✔</Check>}
      </VerticalCenter>
      {children}
    </InputLabel>
  );
}

export default function ContactForm() {
  const timeoutIdRef = useRef(null);
  const [enteredData, setEnteredData] = useState({
    type: '',
    name: '',
    email: '',
    phoneNumber: '',
    content: '',
    title: '',
  });
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [validationState, setValidationState] = useState(initialValidationState);
  const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phoneValid = /^[0-9]{9,11}$/;

  async function SendMessage({type, name, email, phoneNumber, content, title}) {
    const pb = new PocketBase(import.meta.env.VITE_API_URL);
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

  function changeHandler(e) {
    const {name, value} = e.target;

    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    timeoutIdRef.current = setTimeout(() => {
      setEnteredData(prev => ({
        ...prev,
        [name]: value,
      }));
    }, 300);
  }

  useEffect(() => {
    Validation(enteredData);
  }, [enteredData]);

  const enterdDataHandler = event => {
    event.preventDefault();
    setIsOpen(true);

    if (isValid) {
      SendMessage(enteredData);
    }
  };

  function modalCloseHandler() {
    setIsOpen(false);
    setError(false);
    if (isValid && !error) window.location.reload();
  }

  function NumberInputHandler(e) {
    e.target.value = e.target.value.replace(/\D/g, '');
    const {name, value} = e.target;
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    timeoutIdRef.current = setTimeout(() => {
      setEnteredData(prev => ({
        ...prev,
        [name]: value,
      }));
    }, 500);
  }

  return (
    <>
      <ContactSection>
        <Form onSubmit={enterdDataHandler}>
          <div>
            <InputBox
              validName={validationState.isNameValid}
              imgSrc='happy.png'
              imgAlt='웃는 아이콘'
              name='이름 (회사)'
            >
              <Input type='text' name='name' onChange={e => changeHandler(e)} autoComplete='name' />
            </InputBox>

            <InputBox
              validName={validationState.isPhoneValid}
              imgSrc='Phone.png'
              imgAlt='핸드폰 아이콘'
              name='연락처'
            >
              <Input
                id='Num'
                placeholder='01012345678'
                type='tel'
                name='phoneNumber'
                autoComplete='tel'
                onInput={e => NumberInputHandler(e)}
                pattern='[0-9]{9,11}'
                maxLength='11'
              />
            </InputBox>

            <InputBox
              validName={validationState.isEmailValid}
              imgSrc='Message.png'
              imgAlt='메세지 아이콘'
              name='Email'
            >
              <Input
                type='email'
                name='email'
                onChange={e => changeHandler(e)}
                autoComplete='email'
              />
            </InputBox>
          </div>
          <div>
            <InputBox
              validName={validationState.isTitleValid}
              imgSrc='Check.png'
              imgAlt='체크모양 아이콘'
              name='제목'
            >
              <Input type='text' name='title' onChange={e => changeHandler(e)} autoComplete='off' />
            </InputBox>

            <TypeLabel>
              <TypeSelect name='type' onChange={e => changeHandler(e)} autoComplete='off'>
                <Option value='선택하지않음'>문의유형</Option>
                <Option value='서비스 이용'>서비스 이용</Option>
                <Option value='후원'>후원</Option>
                <Option value='문의'>문의</Option>
                <Option value='기타'>기타</Option>
              </TypeSelect>
            </TypeLabel>

            <InputBox
              validName={validationState.isContentValid}
              imgSrc='Chat_alt_3.png'
              imgAlt='대화창 아이콘'
              name='내용'
            >
              <TextArea
                placeholder='내용을 입력하세요.'
                name='content'
                rows={15}
                onChange={e => changeHandler(e)}
                autoComplete='off'
              />
            </InputBox>
          </div>

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

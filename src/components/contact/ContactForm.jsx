import styled from 'styled-components';
import {useEffect, useState, useRef} from 'react';
import PocketBase from 'pocketbase';
import theme from '../../theme';
import ContactModal from './ContactModal';
import ContactInput from './ContactInput';

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

const Option = styled.option`
  appearance: none;
  font-family: 'SUIT-Regular';
  font-weight: 900;
  font-size: 1rem;
`;

export default function ContactForm() {
  const foo = {
    type: useRef({value: '', valid: false}),
    name: useRef({value: '', valid: false}),
    email: useRef({value: '', valid: false}),
    phoneNumber: useRef({value: '', valid: false}),
    content: useRef({value: '', valid: false}),
    title: useRef({value: '', valid: false}),
  };

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);
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

  const isEmpty = value => value.trim() !== '';
  const phoneNumberisValid = value => phoneValid.test(value);
  const emailisValid = value => emailValid.test(value);

  const enteredDataHandler = event => {
    event.preventDefault();
    // setIsOpen(true);
    console.log(foo);
    if (isValid) {
      SendMessage(enteredData);
    }
  };

  useEffect(() => {
    console.log('상위 컴포넌트 렌더링!');
  });

  function up(data, name) {
    foo[name].current = data;
    console.log(foo);
  }

  function modalCloseHandler() {
    setIsOpen(false);
    setError(false);
    if (isValid && !error) window.location.reload();
  }

  return (
    <>
      <ContactSection>
        <Form onSubmit={enteredDataHandler}>
          <div>
            <ContactInput
              imgSrc='happy.png'
              imgAlt='웃는 아이콘'
              title='이름 (회사)'
              inputType='text'
              inputName='name'
              validFn={isEmpty}
              autoComplete='name'
              changeFn={(data, name) => up(data, name)}
            />

            <ContactInput
              imgSrc='Phone.png'
              imgAlt='핸드폰 아이콘'
              title='연락처'
              inputType='tel'
              inputName='phoneNumber'
              validFn={phoneNumberisValid}
              autoComplete='tel'
              changeFn={(data, name) => up(data, name)}
              maxLength='11'
              placeholder='01012345678'
            />

            <ContactInput
              imgSrc='Message.png'
              imgAlt='메세지 아이콘'
              title='Email'
              inputType='email'
              inputName='email'
              validFn={emailisValid}
              autoComplete='email'
              changeFn={(data, name) => up(data, name)}
            />
          </div>
          <div>
            <ContactInput
              imgSrc='Check.png'
              imgAlt='체크모양 아이콘'
              title='제목'
              inputType='text'
              inputName='title'
              validFn={isEmpty}
              autoComplete='off'
              changeFn={(data, name) => up(data, name)}
            />

            <TypeLabel>
              <TypeSelect name='type' onChange={e => changeHandler(e)} autoComplete='off'>
                <Option value='선택하지않음'>문의유형</Option>
                <Option value='서비스 이용'>서비스 이용</Option>
                <Option value='후원'>후원</Option>
                <Option value='문의'>문의</Option>
                <Option value='기타'>기타</Option>
              </TypeSelect>
            </TypeLabel>

            <ContactInput
              imgSrc='Chat_alt_3.png'
              imgAlt='대화창 아이콘'
              title='내용'
              inputType='textArea'
              inputName='content'
              validFn={isEmpty}
              autoComplete='off'
              changeFn={(data, name) => up(data, name)}
              placeholder='내용을 입력하세요.'
            />
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

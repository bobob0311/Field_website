import styled from 'styled-components';
import {useRef} from 'react';
import theme from '../../theme';

const Form = styled.form`
  padding: 3% 1%;
  background: ${theme.colors.white};
  border-radius: 1rem;
`;

const InputLabel = styled.label`
  font-size: 1.25rem;
  margin: 1rem 0 0 0;
  display: block;
  color: ${theme.colors.black};
  font-weight: bold;
  padding: 0 1rem;
`;

const TypeLabel = styled(InputLabel)`
  margin: 1.2rem 0 2rem 0;
  display: flex;
  align-items: center;
`;

const TypeSelect = styled.select`
  color: ${theme.colors.black};
  appearance: none;
  background: url('down.png') no-repeat 100% 50%;
  background-size: 1.4rem 1rem;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  border-bottom: 0.1rem solid black;
  margin: 0 0 0 0.5rem;
  height: 1.5rem;
  padding: 0.3rem 0 0 0.2rem;
  width: 3.8rem;
`;

const Input = styled.input`
  color: ${theme.colors.black};
  font-size: 1rem;
  width: 100%;
  height: 2rem;
  border: none;
  border-bottom: 0.15rem solid ${theme.colors.black};
  padding: 0.5rem 0.2rem 0 0.2rem;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  border: none;
  margin: 0.8rem 0 0 0;
  box-sizing: border-box;
  border-radius: 0.7rem;
  border: 0.15rem solid ${theme.colors.black};
`;

const SummitButton = styled.button`
  background: ${theme.colors.white};
  font-size: 1.25rem;
  color: ${theme.colors.black};
  appearance: none;
  border: none;
  border: 0.05rem solid ${theme.colors.black};
  border-radius: 1rem;
  margin: 1.5rem auto;
  padding: 0.8rem 1.5rem;
  display: block;
  font-weight: 600;
  box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
`;

const Option = styled.option``;

export default function ContactForm() {
  const {
    current: {type, name, email, phoneNumber, content, title},
  } = useRef({});

  const submittedData = {
    type: type ? type.current.value : '',
    name: name ? name.current.value : '',
    email: email ? email.current.value : '',
    phoneNumber: phoneNumber ? phoneNumber.current.value : '',
    title: title ? title.current.value : '',
  };
  console.log(submittedData);

  return (
    <Form>
      <TypeLabel>
        문의 유형
        <TypeSelect ref={type} autoComplete='off'>
          <Option value='후원'>후원</Option>
          <Option value='문의'>문의</Option>
          <Option value='기타'>기타</Option>
        </TypeSelect>
      </TypeLabel>

      <InputLabel name='name' ref={name} autoComplete='name'>
        이름 (회사)
        <Input />
      </InputLabel>

      <InputLabel name='phonenumber' ref={phoneNumber} autoComplete='tel'>
        연락처
        <Input />
      </InputLabel>

      <InputLabel name='email' ref={email} autoComplete='email'>
        Email
        <Input />
      </InputLabel>

      <InputLabel name='title' ref={title} autoComplete='off'>
        제목
        <Input />
      </InputLabel>

      <InputLabel>
        내용
        <TextArea name='content' rows={20} ref={content} autoComplete='off' />
      </InputLabel>
      <SummitButton type='submit'>SEND</SummitButton>
    </Form>
  );
}

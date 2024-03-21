import styled from 'styled-components';
import ContactForm from '../components/contact/ContactForm';

const ContactMain = styled.main`
  margin: 0 7.5% 2rem 7.5%;
  @media (min-width: 1024px) {
    margin: 0 15% 2rem 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 1.875rem;
  text-align: center;
  margin: 2rem 0;
  font-family: 'Goblin One';
  font-weight: 300;
`;

export default function ContactPage() {
  return (
    <ContactMain>
      <Title>CONTACT</Title>
      <ContactForm />
    </ContactMain>
  );
}

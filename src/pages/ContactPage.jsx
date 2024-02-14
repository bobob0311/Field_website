import ContactAgree from '../components/contact/ContactAgree';
import ContactText from '../components/contact/ContactText';
import ContactForm from '../components/contact/ContactForm';
import styled from 'styled-components';

const ContactSection = styled.section`
  margin: 0 10%;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  text-align: center;
  margin: 2rem 0;
`;

export default function ContactPage() {
  return (
    <main>
      <ContactSection>
        <Title>Contact</Title>
        <ContactForm />
      </ContactSection>
    </main>
  );
}

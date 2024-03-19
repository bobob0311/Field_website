import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import TextGenerator from '../TextGenerator';

const Section = styled.section`
  height: calc(100vh - 4.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${props => props.src});
  background-position: center;
  background-size: ${props => (props.size ? props.size : 'cover')};
  background-repeat: no-repeat;
`;

const H2 = styled.h2`
  position: relative;
  bottom: 8rem;
  font-size: 1.5625rem;
  color: white;
  text-align: center;
  font-family: 'Goblin One';
  font-weight: bold;
  line-height: 2.5rem;
`;

const P = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  text-align: center;
  padding: 0 10% 1rem 10%;
  letter-spacing: -0.1em;
  font-weight: bold;
`;

const Span = styled.span`
  margin: 0 0 1rem 0;
`;

function CampImageSection({img, title, firstLine = '', secondLine = '', thirdLine = ''}) {
  const h2Ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      });
    });

    if (h2Ref.current) {
      observer.observe(h2Ref.current);
    }

    return () => {
      if (h2Ref.current) {
        observer.unobserve(h2Ref.current);
      }
    };
  }, []);

  return (
    <Section src={img}>
      <H2 ref={h2Ref}>{animate && <TextGenerator text={title} size='1.5625rem' />}</H2>
      <P>
        <Span>{firstLine}</Span>
        <Span>{secondLine}</Span>
        <Span>{thirdLine}</Span>
      </P>
    </Section>
  );
}

export default CampImageSection;

import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  height: 80vh;
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
  font-size: 1.5625rem;
  color: white;
  text-align: center;
  padding: ${props => (props.padding ? props.padding : '')};
  font-weight: bold;
`;

const P = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  text-align: center;
  padding: ${props => (props.padding ? props.padding : '')};
  letter-spacing: -0.1em;
  font-weight: bold;
`;

const Span = styled.span`
  margin: ${props => (props.margin ? props.margin : '')};
`;

function CampImageSection({img, title, firstLine = '', secondLine = '', thirdLine = ''}) {
  return (
    <Section src={img}>
      <H2 padding='0 10% 2rem 10%'>{title}</H2>
      <P padding='0 10% 1rem 10%'>
        <Span margin='0 0 1rem 0'>{firstLine}</Span>
        <Span margin='0 0 1rem 0'>{secondLine}</Span>
        <Span margin='0 0 1rem 0'>{thirdLine}</Span>
      </P>
    </Section>
  );
}

export default CampImageSection;

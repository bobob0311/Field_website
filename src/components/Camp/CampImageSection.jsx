import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

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
  font-size: ${props => (props.size ? props.size : '1.5625rem')};
  color: ${props => (props.color ? theme.colors[props.color] : theme.colors.white)};
  text-align: ${props => (props.align ? props.align : 'center')};
  padding: ${props => (props.padding ? props.padding : '')};
  font-weight: bold;
`;

const P = styled.p`
  font-size: ${props => (props.size ? props.size : '1.25rem')};
  color: ${props => (props.color ? theme.colors[props.color] : theme.colors.white)};
  word-break: keep-all;
  grid-area: desc;
  line-height: 1.3;
  text-align: ${props => (props.align ? props.align : '')};
  padding: ${props => (props.padding ? props.padding : '')};
`;

function CampImageSection({img, title, label1 = '', label2 = '', label3 = ''}) {
  return (
    <Section src={img}>
      <H2 padding='0 10% 2rem 10%'>{title}</H2>
      <P padding='0 10% 1rem 10%'>{label1}</P>
      <P padding='0 10% 1rem 10%'>{label2}</P>
      <P padding='0 10% 1rem 10%'>{label3}</P>
    </Section>
  );
}

export default CampImageSection;

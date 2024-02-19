import React from 'react';
import styled from 'styled-components';

const H3 = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  margin: ${props => props.$margin || '0'};
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: ${props => props.$position || ''};
  bottom: 1rem;
`;

const Image = styled.img`
  margin: ${props => props.$margin || '0'};
  width: ${props => props.width || ''};
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: ${props => props.radius || ''};
`;

const P = styled.p`
  word-break: keep-all;
  margin: ${props => props.$margin || '0'};
  line-height: 1.5;
  color: ${props => (props.color ? theme.colors[props.color] : '')};
  font-size: ${props => (props.size ? props.size : '1rem')};
`;

const Figcaption = styled.figcaption`
  margin: ${props => props.$margin || '0'};
  word-break: keep-all;
  line-height: 1.5;
`;

function FieldIntro({title, backgroundImage, content}) {
  return (
    <Figure>
      <H3 $margin='0 0 2rem 0'>{title}</H3>
      <Image src={backgroundImage} alt='산업공학도' width='100%' radius='1.875rem' />
      <Figcaption $margin='2rem 0'>
        <P>{content}</P>
      </Figcaption>
    </Figure>
  );
}

export default FieldIntro;

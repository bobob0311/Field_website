import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const P = styled.p`
  word-break: keep-all;
  margin: ${props => props.$margin || '0'};
  line-height: 1.5;
  color: ${props => (props.color ? theme.colors[props.color] : '')};
  font-size: 1.25rem;
  font-weight: 900;
  text-align: center;
`;

const Card = styled.article`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.src});
  background-color: ${theme.colors.blue};
  padding: 2rem 1rem;
  background-position: center;
  background-size: cover;
  object-fill: fill;
  aspect-ratio: 1/1.2;
  border-radius: 0.625rem;
  ${props => props.$border && 'border: 2px solid white;'}
`;

const H3 = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  margin: ${props => props.$margin || '0'};
`;

const CardTitle = styled(H3)`
  display: inline;
  border: 1px solid white;
  border-radius: 0.625rem;
  padding: 0.5rem 2rem;
  font-weight: 700;
`;

function ActivityIntro({backgroundImage, title, content}) {
  return (
    <Card src={backgroundImage}>
      <CardTitle>{title}</CardTitle>
      <P $margin='8rem 0 0 0'>{content}</P>
    </Card>
  );
}

export default ActivityIntro;

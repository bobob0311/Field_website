import React from 'react';
import styled from 'styled-components';
import ModalSection from '../ModalSection';
import theme from '../../theme';
import fieldImg from '../../assets/Group 19.png';
import Button from '../Button';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${props => (props.margin ? props.margin : '0 10% 0 10% ')};
  text-align: center;
  align-items: center;
  gap: 0.25rem;
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-item: center;
  item-align: center;
`;

const Img = styled.img`
  width: full;
  height: full;
`;

const Figcaption = styled.figcaption`
  text-align: center;
  color: ${props => (props.color ? theme.colors[props.color] : theme.colors.red)};
  font-size: 1.25rem;
`;

function CampTopicSection() {
  return (
    <Section>
      <ModalSection title='역대 FIELD CAMP' font='Nanum Myeongjo' />
      <Figure>
        <Img alt='필드 캠프 사진' src={fieldImg} />
        <Figcaption>1st topic</Figcaption>
      </Figure>
      <Button label='주제에 대해 더 알아보기' />
    </Section>
  );
}

export default CampTopicSection;

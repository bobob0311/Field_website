import React, {useState} from 'react';
import styled from 'styled-components';
import modalIcon from '../../assets/modalIcon.png';
import Modal from '../Modal';

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: ${props => (props.margin ? props.margin : '0 10% 0 10% ')};
  text-align: center;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 1.5625rem;
  color: white;
  font-family: Nanum Myeongjo;
  font-weight: bold;
`;

const IconImg = styled.img`
  width: auto;
  height: auto;
`;

function CampTopicSection() {
  const [showModal, setShowModal] = useState(false);
  const lst = [2022, 2023];
  return (
    <Section>
      <IconImg
        src={modalIcon}
        alt='모달창 아이콘'
        onClick={() => {
          setShowModal(true);
        }}
      />
      <H2>역대 FIELD CAMP</H2>
      <Modal titleData={lst} showModal={showModal} setShowModal={setShowModal} />
    </Section>
  );
}

export default CampTopicSection;

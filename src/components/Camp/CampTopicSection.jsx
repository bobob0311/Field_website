import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import ModalSection from '../ModalSection';
import theme from '../../theme';
import Button from '../Button';
import {CampyearApi, CampApi} from '../../lib/Apiservice';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${props => (props.margin ? props.margin : '0 10% 0 10% ')};
  text-align: center;
  align-items: center;
  gap: 0.25rem;
`;

const H3 = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-item: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  margin: 1rem 0;
  border-radius: 1rem;
  order: 2;
`;

const Figcaption = styled.figcaption`
  text-align: center;
  color: ${props => (props.color ? theme.colors[props.color] : theme.colors.red)};
  font-size: 1.25rem;
`;

const ButtonWrapper = styled.div`
  margin: 0 0 1.25rem 0;
`;

function CampTopicSection() {
  const [campDataYear, setCampDataYear] = useState([]);
  const [campFullData, setCampFullData] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const campYear = useSelector(state => state.campYear.value);
  const imageUrl = `${import.meta.env.VITE_API_URL}/api/files/chlj2bc39fagbcf/`;
  const getDataFieldYear = async () => {
    try {
      const response = await CampyearApi();
      const years = response.map(item => item.year);
      const uniqueYears = [...new Set(years)];
      setCampDataYear(uniqueYears);
    } catch (err) {
      console.log(err);
    }
  };

  const getFullDataField = async () => {
    try {
      const response = await CampApi(campYear);
      setCampFullData(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataFieldYear();
    getFullDataField(); // campYear 상태가 변경될 때 호출됩니다.
  }, [campYear]);

  const toggleImageDisplay = index => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <Section>
      <ModalSection title='역대 FIELD CAMP' font='Nanum Myeongjo' timeDatalst={campDataYear} />
      <H3>{campYear} FIELD CAMP</H3>
      {campFullData.map((camp, index) => (
        <ButtonWrapper>
          <Figure key={index}>
            {camp.topic === '1st' ? (
              <Figcaption>{camp.topic} topic</Figcaption>
            ) : (
              <Figcaption color='blue'>{camp.topic} topic</Figcaption>
            )}
            {expandedIndex === index ? (
              camp.file.map((file, fileIndex) => (
                <Img
                  key={fileIndex}
                  src={`${imageUrl}${camp.id}/${file}`}
                  alt={`camp-image-${fileIndex}`}
                />
              ))
            ) : (
              <Img src={`${imageUrl}${camp.id}/${camp.file[0]}`} alt='camp-image-0' />
            )}
          </Figure>
          <Button
            onClick={() => toggleImageDisplay(index)}
            label={expandedIndex === index ? '가리기' : `'주제${index + 1}'에 대해 더 알아보기`}
          />
        </ButtonWrapper>
      ))}
    </Section>
  );
}

export default CampTopicSection;

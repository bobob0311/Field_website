import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import theme from '../../theme';
import Button from '../Button';
import {CampApi} from '../../lib/Apiservice';
import {setCampTitle} from '../../redux/campTitleSlice';
import Dropdown from '../Dropdown';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 7.5%;
  text-align: center;
  align-items: center;
  gap: 0.25rem;
`;

const H2 = styled.h2`
  margin: 6rem 7.5% 1rem 7.5%;
  font-size: 1.625rem;
  color: ${props => (props.$color ? theme.colors[props.$color] : 'white')};
  font-family: Nanum Myeongjo;
  font-weight: 900;
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
  border-radius: 1rem;
  margin: 0 0 1.25rem 0;
  order: 2;
  @media screen and (min-width: 1024px) {
    width: 350px;
    height: 350px;
  }
`;

const Figcaption = styled.figcaption`
  text-align: center;
  color: ${props => (props.$color ? theme.colors[props.$color] : theme.colors.red)};
  font-family: 'Goblin One';
  font-size: 1.25rem;
  margin: 0 0 1.25rem 0;
  order: 1;
`;

const FigureWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;

function CampTopicSection() {
  const [campDataYear, setCampDataYear] = useState([]);
  const [campFullData, setCampFullData] = useState([]);
  const [showedCampData, setShowedCampData] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const campYear = useSelector(state => state.campTitle.value);
  const dispatch = useDispatch();

  const imageUrl = `${import.meta.env.VITE_API_URL}/api/files/chlj2bc39fagbcf/`;

  const filterData = year => {
    setShowedCampData(campFullData.filter(camp => camp.year === year));
  };

  const localData = localStorage.getItem('fieldData');

  const getDataFieldYear = async () => {
    try {
      let response;
      const now = new Date();
      const lastUpdate = localStorage.getItem('필드캠프-lastUpdate');
      const lastUpdateTime = lastUpdate ? new Date(parseInt(lastUpdate, 10)) : null;
      if (!lastUpdateTime || now - lastUpdateTime > 24 * 60 * 60 * 1000) {
        response = await CampApi();
        localStorage.setItem('fieldData', JSON.stringify(response));
        localStorage.setItem('필드캠프-lastUpdate', now.getTime().toString());
      } else {
        response = JSON.parse(localData);
      }
      const years = response.map(item => item.year);
      const uniqueYears = [...new Set(years)];
      const maxYear = Math.max(...uniqueYears);
      setCampFullData(response);
      setCampDataYear(uniqueYears);
      dispatch(setCampTitle(maxYear));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataFieldYear();
  }, []);

  useEffect(() => {
    if (campFullData.length > 0) {
      filterData(campYear);
    }
    setExpandedIndex(null);
  }, [campYear, campFullData]);

  const toggleImageDisplay = index => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <Section>
      <H2>역대 FIELD CAMP</H2>
      <Dropdown title='역대 FIELD CAMP' titleArr={campDataYear} />
      <FigureWrapper>
        {showedCampData.map((camp, index) => (
          <Figure key={camp.id}>
            {expandedIndex === index ? (
              camp.file.map((file, fileIndex) => (
                <Img
                  key={file}
                  src={`${imageUrl}${camp.id}/${file}`}
                  alt={`camp-image-${fileIndex}`}
                />
              ))
            ) : (
              <Img key={camp.id} src={`${imageUrl}${camp.id}/${camp.file[0]}`} alt='camp-image-0' />
            )}
            {camp.topic === '1st' ? (
              <Figcaption>{camp.topic} TOPIC</Figcaption>
            ) : (
              <Figcaption $color='blue'>{camp.topic} TOPIC</Figcaption>
            )}
            <Button
              onClick={() => toggleImageDisplay(index)}
              label={expandedIndex === index ? '가리기' : `'주제${index + 1}' \n 더 알아보기`}
              order='3'
              mg='0 0 2rem 0'
            />
          </Figure>
        ))}
      </FigureWrapper>
    </Section>
  );
}

export default CampTopicSection;

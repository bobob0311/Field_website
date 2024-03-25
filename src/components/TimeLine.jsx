import styled from 'styled-components';
import {useEffect, useState} from 'react';
import theme from '../theme';

const TimeLineDiv = styled.div`
  position: relative;
  width: 340px;
  margin: 2rem auto 0;
`;
const DataBox = styled.div`
  font-size: 1.25rem;
  font-family: 'Goblin One';
  position: absolute;
  top: ${props => props.$height};
`;
const Data = styled.div`
  font-family: 'SUIT';
  font-size: 1.25rem;
  font-weight: 900;
  position: absolute;
  width: 130px;
  word-break: keep-all;
  top: ${props => props.$top};
  left: 180px;
  &::before {
    color: red;
    position: absolute;
    content: '';
    padding: 0.8rem;
    border-radius: 50%;
    left: -49px;
    z-index: 1;
    background: ${theme.colors.yellow};
  }
  @media screen and (min-width: 769px) {
    width: 240px;
  }
`;
const Title = styled.h3`
  color: #f76363;
  font-size: 1.125rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const P = styled.p`
  color: white;
  font-size: 0.75rem;
  padding: 0.5rem 0 0 0;
`;

export default function TimeLine({data, height}) {
  const dataLabel = Object.keys(data);
  const contentStartPoint = 40;
  const [position, setPosition] = useState(144);
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setPosition(147.5);
    } else {
      setPosition(144);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const arrayLength = dataLabel.reduce(
    (dataLengthArray, label) => {
      dataLengthArray.push(
        dataLengthArray.length > 0
          ? dataLengthArray[dataLengthArray.length - 1] + data[label].length
          : data[label].length,
      );
      return dataLengthArray;
    },
    [0],
  );
  const count = arrayLength.pop();
  const startPoint = arrayLength.map(value => value * height + contentStartPoint);
  const result = startPoint.map((eachStartPoint, index) => ({
    start: eachStartPoint,
    label: dataLabel[index],
  }));

  const MaxHeight = count * height;
  return (
    <TimeLineDiv>
      {result.map(content => (
        <DataBox key={`${content.label}`} $height={`${content.start}px`}>
          {content.label}
          {data[content.label].map((item, index) => (
            <Data key={item} $top={`${index * height}px`}>
              {item.title && item.get ? (
                <>
                  <Title>
                    <span>{item.title}</span>
                    <span>{item.title2}</span>
                  </Title>

                  <P>{item.get}</P>
                </>
              ) : (
                <span>{item}</span>
              )}
            </Data>
          ))}
        </DataBox>
      ))}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox={`0 0 340 ${MaxHeight + 100}`}
        width='340'
        height={`${MaxHeight + 100}`}
        fill='none'
        stroke='currentColor'
        strokeWidth='6'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d={`M ${position} 1  v${MaxHeight + 50}`} />
        <path d={`M 175  ${MaxHeight + 25} l-30 30-30-30`} />
      </svg>
    </TimeLineDiv>
  );
}

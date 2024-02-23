import styled from 'styled-components';
import theme from '../theme';

const SVGContanier = styled.div`
  margin: 2rem 0 0 0;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  position: relative;
  width: 370px;
  color: white;
  padding: 0 0 0 0.5rem;
`;
const DataBox = styled.div`
  font-size: 1.5rem;
  font-family: 'Goblin One';
  position: absolute;
  top: ${props => props.$height};
  margin: 0;
  box-sizing: content-box;
`;
const Data = styled.div`
  font-family: 'SUIT';
  font-size: 1.25rem;
  font-weight: 900;
  position: absolute;
  width: 160px;
  word-break: keep-all;
  top: ${props => props.$top};
  left: 200px;
  &::before {
    color: red;
    position: absolute;
    content: '';
    padding: 0.8rem;
    border-radius: 50%;
    left: -53px;
    z-index: 1;
    background: ${theme.colors.yellow};
  }
`;
const Title = styled.span`
  color: ${props => (props.$color ? props.$color : 'white')};
`;

const P = styled.p`
  color: white;
  font-size: 0.75rem;
  padding: 0.5rem 0 0 0;
`;

// 데이터 각각 넣어주는 방법

// 이건 넣어드렸어요 ^^
// const data = {
//  day1: ['개회식', '레크레이션', 'OHT / 레고 AGB 실험실견학', '교수님과의 식사'],
//  day2: ['컴페티션 예선', '컴페티션 본선', '산공인의 밤'],
//  day3: ['시상식', '폐회식', '기념사진 촬영'],
// };

// 요긴 title하고 get으로 구분해서 넣어주세요
// const data = {
//  2008: [{title: 'FEILD의 시작', get: '서울대학교 KAIST, POSTECH에서 학술 및 인적 교류 시작'}],
//  2009: [{title: '첫 FIELD CAMP 개최', get: 'ㅋㅋ'}],
//  2016: ['대한산업공학회 산하공식단체 인준'],
//  2017: ['전국단위 활동'],
//  2018: ['고교방문 설명회 진행'],
//  2022: ['FIELD 유튜브 개설'],
//  2023: ['코로나 이후 FIELD'],
// };

// height는 점들의 간격입니다. 필드캠프는 80 연혁은 140정도면 적절 조절바람.

export default function TimeLine({data, height}) {
  const dataLabel = Object.keys(data);

  const arrayLength = dataLabel.reduce(
    (acc, label) => {
      acc.push(acc.length > 0 ? acc[acc.length - 1] + data[label].length : data[label].length);
      return acc;
    },
    [0],
  );
  const count = arrayLength.pop();
  const startPoint = arrayLength.map(value => value * height + 40);
  const result = startPoint.map((item, index) => ({start: item, label: dataLabel[index]}));

  const MaxHeight = count * height;

  return (
    <SVGContanier>
      <Box>
        {result.map(idx => (
          <DataBox $height={`${idx.start}px`}>
            {idx.label}
            {data[idx.label].map((item, index) => (
              <div>
                {item.title || item.get ? (
                  item.title && (
                    <Data $top={`${index * height}px`}>
                      <Title $color='#F76363'>{item.title}</Title>
                      <P>{item.get}</P>
                    </Data>
                  )
                ) : (
                  <Data $top={`${index * height}px`}>{item}</Data>
                )}
              </div>
            ))}
          </DataBox>
        ))}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox={`0 0 380 ${MaxHeight + 100}`}
          width='380'
          height={`${MaxHeight + 100}`}
          fill='none'
          stroke='currentColor'
          strokeWidth='6'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d={`M 160 1  v${MaxHeight + 50}`} />
          <path d={`M 190  ${MaxHeight + 25} l-30 30-30-30`} />
        </svg>
      </Box>
    </SVGContanier>
  );
}

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import {DepartmentApi} from '../../lib/Apiservice';

const H2 = styled.h2`
  font-size: 1.875rem;
  margin: ${props => props.margin || '0'};
  text-align: center;
`;

const NanumH2 = styled(H2)`
  font-family: 'Nanum Myeongjo', serif;
  font-weight: 700;
`;

const Image = styled.img`
  margin: 2rem 0 0 0;
  width: 100%;
  height: auto;
  aspect-ratio: 1/0.8;
  border-radius: 1rem;
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  border: 2px solid white;
  padding: 0 1rem;
  border-radius: 1rem;
  margin: ${props => props.margin || '0'};
`;

const Dt = styled.dt`
  font-size: 1.5rem;
`;

const Dd = styled.dd`
  font-size: 1rem;
`;

const Dl = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const CardUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardKeyWordLi = styled.li`
  padding: 0;
  margin: ${props => props.margin || '0'};
`;

const CardKeyWordSpan = styled.span`
  display: inline-block;
  background-color: ${props => (props.color ? theme.colors[props.color] : '')};
  padding: 0.7rem 2rem;
  text-align: center;
  border: 2px solid white;
  border-radius: 1rem;
`;

const CardHashTagUl = styled.ul`
  margin: ${props => props.margin || '0'};
  display: flex;
  flex-direction: column;
  color: ${theme.colors.yellow};
  gap: 0.5rem;
  font-weight: bold;
`;

const CardHashTagLi = styled.li`
  font-size: 1.1rem;
`;

const ActivityUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin: ${props => props.margin || '0'};
  gap: 0.5rem;
  border: 2px solid white;
  border-radius: 1rem;
  padding: 1rem 0.3rem 1rem 1.3rem;
  text-indent: -0.8rem;
  word-break: keep-all;
`;

const ActivityLi = styled.li`
  font-size: 1.25rem;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  cursor: pointer;
  width: 25%;
  border: none;
  padding: 0.375rem 0;
  border-radius: 1rem;
  font-size: 0.8rem;

  ${props =>
    props.isActive &&
    `
    background-color: ${theme.colors.gray};
    color: white;
  `}
`;

const ButtonWrapper = styled.div`
  margin: 2rem 0 0 0;
`;

const H3 = styled.h3`
  align-items: center;
  font-size: 1.25rem;
  width: 100%;
  text-align: center;
  border: 2px solid white;
  margin: ${props => props.margin || '0'};
  border-radius: 1rem;
  padding: 1rem 0;
`;

const CardContainer = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
`;

const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
`;

function DepartmentIntro() {
  const [photos, setPhotos] = useState({
    planning: '',
    cooperation: '',
    competition: '',
    publicRelation: '',
  });
  const imageUrl = `${import.meta.env.VITE_API_URL}/api/files/jopzyrph5gaoffm/`;

  const getDepartmentData = async () => {
    try {
      const localData = localStorage.getItem('departmentData');
      if (localData) {
        const data = JSON.parse(localData);
        setPhotos({
          planning: `${imageUrl}${data[0].id}/${data[0].photo}`,
          cooperation: `${imageUrl}${data[1].id}/${data[1].photo}`,
          competition: `${imageUrl}${data[2].id}/${data[2].photo}`,
          publicRelation: `${imageUrl}${data[3].id}/${data[3].photo}`,
        });
      } else {
        const response = await DepartmentApi();
        localStorage.setItem('departmentData', JSON.stringify(response));
        setPhotos({
          planning: `${imageUrl}${response[0].id}/${response[0].photo}`,
          cooperation: `${imageUrl}${response[1].id}/${response[1].photo}`,
          competition: `${imageUrl}${response[2].id}/${response[2].photo}`,
          publicRelation: `${imageUrl}${response[3].id}/${response[3].photo}`,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDepartmentData();
  }, []);

  const [selectCategory, setSelectCategory] = useState('기획부');
  const category = ['기획부', '대외협력부', '컴페티션부', '홍보부'];

  const handleButtonClick = item => {
    setSelectCategory(item);
  };

  return (
    <>
      <NanumH2 margin='2rem 0'>부서소개</NanumH2>
      <ButtonWrapper>
        {category.map(item => (
          <Button
            key={item}
            isActive={selectCategory === item}
            onClick={() => handleButtonClick(item)}
          >
            {item}
          </Button>
        ))}
      </ButtonWrapper>
      <CardContainer visible={selectCategory === '기획부'}>
        <Image width='100%' src={photos.planning} alt='' />
        <Card margin='1rem 0'>
          <Dl>
            <Dt>기획부</Dt>
            <Dd>FIELD 인적, 학술적 교류를 활성화하기 위한 컨텐츠를 기획하고 진행, 총괄하는 부서</Dd>
          </Dl>
          <CardUl>
            <CardKeyWordLi margin='0 0 0 40%'>
              <CardKeyWordSpan color='yellow'>대인관계능력</CardKeyWordSpan>
            </CardKeyWordLi>
            <CardKeyWordLi margin='0 0 0 5%'>
              <CardKeyWordSpan color='red'>리더십</CardKeyWordSpan>
            </CardKeyWordLi>
            <CardKeyWordLi margin='0 0 0 35%'>
              <CardKeyWordSpan color='blue'>창의력</CardKeyWordSpan>
            </CardKeyWordLi>
          </CardUl>
          <CardHashTagUl margin='1rem 0'>
            <CardHashTagLi>#FIELD열정맨</CardHashTagLi>
            <CardHashTagLi>#FIELD에너지</CardHashTagLi>
            <CardHashTagLi>#즐거움이공존하는이곳</CardHashTagLi>
          </CardHashTagUl>
        </Card>

        <H3>
          <FlexCenter>
            <span>What&apos;s Activity</span>
            <span>Planning Department</span>
          </FlexCenter>
        </H3>
        <ActivityUl margin='1rem 0'>
          <ActivityLi>- FIELD 유튜브 콘텐츠 기획 및 촬영</ActivityLi>
          <ActivityLi>- FIELD CAMP 레크레이션</ActivityLi>
          <ActivityLi>- 산공인의 밤 기획 및 총괄</ActivityLi>
          <ActivityLi>- FIELD 내의 인적 교류를 위한 콘텐츠 기획</ActivityLi>
        </ActivityUl>
      </CardContainer>
      <CardContainer visible={selectCategory === '대외협력부'}>
        <Image width='100%' src={photos.cooperation} alt='' />
        <Card margin='2rem 0'>
          <Dl>
            <Dt>대외협력부</Dt>
            <Dd>
              FIELD 내부와 외부의 교류를 담당하며 전반적인 활동에 필요한 인적, 물적 자원 관리를 하는
              부서
            </Dd>
          </Dl>
          <CardUl>
            <CardKeyWordLi margin='0 0 0 40%'>
              <CardKeyWordSpan color='yellow'>말하기능력</CardKeyWordSpan>
            </CardKeyWordLi>
            <CardKeyWordLi margin='0 0 0 5%'>
              <CardKeyWordSpan color='red'>소통능력</CardKeyWordSpan>
            </CardKeyWordLi>
            <CardKeyWordLi margin='0 0 0 35%'>
              <CardKeyWordSpan color='blue'>친화력</CardKeyWordSpan>
            </CardKeyWordLi>
          </CardUl>
          <CardHashTagUl margin='1rem 0'>
            <CardHashTagLi>#FIELD연결고리</CardHashTagLi>
            <CardHashTagLi>#FIELD의심장</CardHashTagLi>
            <CardHashTagLi>#소통과화합이중시되는곳</CardHashTagLi>
          </CardHashTagUl>
        </Card>

        <H3>
          <FlexCenter>
            <span>What&apos;s Activity</span>
            <span>External Cooperation Department</span>
          </FlexCenter>
        </H3>
        <ActivityUl margin='2rem 0'>
          <ActivityLi>- 기업 컨텍 및 대외업무 총괄</ActivityLi>
          <ActivityLi>- 고교 산업공학과 진로지도 강연</ActivityLi>
          <ActivityLi>- 산업공학과 출신 기업인 인터뷰</ActivityLi>
          <ActivityLi>- FIELD CAMP 인적 관리 및 조별 스태프 업무 수행</ActivityLi>
        </ActivityUl>
      </CardContainer>
      <CardContainer visible={selectCategory === '컴페티션부'}>
        <Image width='100%' src={photos.competition} alt='' />
        <Card margin='2rem 0'>
          <Dl>
            <Dt>컴페티션부</Dt>
            <Dd>
              FIELD 내 진행하는 학술교류에 관한 업무와 FIELD CAMP 컴페티션에 대한 자료와 평가기준을
              만드는 부서
            </Dd>
          </Dl>
          <CardUl>
            <CardKeyWordLi margin='0 0 0 40%'>
              <CardKeyWordSpan color='yellow'>봉사심</CardKeyWordSpan>
            </CardKeyWordLi>
            <CardKeyWordLi margin='0 0 0 5%'>
              <CardKeyWordSpan color='red'>열정</CardKeyWordSpan>
            </CardKeyWordLi>
            <CardKeyWordLi margin='0 0 0 35%'>
              <CardKeyWordSpan color='blue'>자기주장력</CardKeyWordSpan>
            </CardKeyWordLi>
          </CardUl>
          <CardHashTagUl margin='1rem 0'>
            <CardHashTagLi>#FIELD머리</CardHashTagLi>
            <CardHashTagLi>#FIELD브레인</CardHashTagLi>
            <CardHashTagLi>#지식과열정이융합되는곳</CardHashTagLi>
          </CardHashTagUl>
        </Card>

        <H3>
          <FlexCenter>
            <span>What&apos;s Activity</span>
            <span>Competition Department</span>
          </FlexCenter>
        </H3>
        <ActivityUl margin='2rem 0'>
          <ActivityLi>- FIELD 전체 회의 세미나</ActivityLi>
          <ActivityLi>- FIELD 스터디 주관</ActivityLi>
          <ActivityLi>- FIELD 내,외부 학술 교류</ActivityLi>
          <ActivityLi>- FIELD CAMP 컴페티션 주제 선정</ActivityLi>
          <ActivityLi>- FIELD CAMP 컴페티션 심사</ActivityLi>
        </ActivityUl>
      </CardContainer>
      <CardContainer visible={selectCategory === '홍보부'}>
        <Image width='100%' src={photos.publicRelation} alt='' />
        <Card margin='2rem 0'>
          <Dl>
            <Dt>홍보부</Dt>
            <Dd>FIELD와 산업공학을 알리는 전반적인 홍보물을 기획하고 제작하는 부서</Dd>
          </Dl>
          <CardUl>
            <CardKeyWordLi margin='0 0 0 40%'>
              <CardKeyWordSpan color='yellow'>팀워크</CardKeyWordSpan>
            </CardKeyWordLi>
            <CardKeyWordLi margin='0 0 0 5%'>
              <CardKeyWordSpan color='red'>열정</CardKeyWordSpan>
            </CardKeyWordLi>
            <CardKeyWordLi margin='0 0 0 35%'>
              <CardKeyWordSpan color='blue'>창의성</CardKeyWordSpan>
            </CardKeyWordLi>
          </CardUl>
          <CardHashTagUl margin='1rem 0'>
            <CardHashTagLi>#FIELD알리미</CardHashTagLi>
            <CardHashTagLi>#FIELD소통창구</CardHashTagLi>
            <CardHashTagLi>#창의와개성이표출되는곳</CardHashTagLi>
          </CardHashTagUl>
        </Card>

        <H3>
          <FlexCenter>
            <span>What&apos;s Activity</span>
            <span>Public Relation Department</span>
          </FlexCenter>
        </H3>
        <ActivityUl margin='2rem 0'>
          <ActivityLi>- FIELD 홍보 카드뉴스 제작</ActivityLi>
          <ActivityLi>- 산업공학 홍보 카드뉴스 제작</ActivityLi>
          <ActivityLi>- FIELD CAMP 홍보물 제작</ActivityLi>
          <ActivityLi>- FIELD 활동 촬영</ActivityLi>
          <ActivityLi>- FIELD 활동기록 책자 제작</ActivityLi>
        </ActivityUl>
      </CardContainer>
    </>
  );
}

export default DepartmentIntro;

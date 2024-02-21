import {useState} from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const DepartmentSection = styled.section`
  margin: 0 0 5rem 0;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  padding: 0 1rem 0 0;
  margin: 0 0 1rem 0;
  font-weight: 800;
`;

const QuestionBox = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0.65rem;
  color: ${theme.colors.black};
  margin: 0 0 2rem 0;
  padding: 1rem 0 0.5rem 0.5rem;
  font-weight: 400;
`;
const BoxSize = styled.div`
  width: 19rem;
`;

const Question = styled.h3`
  font-size: 1.2rem;
  letter-spacing: -0.05rem;
  font-weight: 900;
  margin: 0 0 1.25rem 0;
`;

const Answer = styled.li`
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 1rem 0.25rem;
  word-break: keep-all;
  text-indent: -1rem;
  letter-spacing: -0.05rem;
  padding: 0 0 0 0.8rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 0 1rem 0;

  ${props =>
    props.$activelink &&
    `button[name="${props.$activelink}"]{
    background: ${theme.colors.gray};

  }
`}
`;

const DepartmentButton = styled.button`
  font-family: 'SUIT';
  padding: 0.3rem 0.6rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  appearance: none;
  border: none;
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  font-weight: 600;
`;

const allDepartment = {
  planning: {
    department: '기획부',
    explain: [
      '타인과 소통하며 협업 하기를 원하는 분!',
      '인적, 학술적 교류 활성화를 중요시 하는 분!',
      '컨텐츠 제작 및 기획에 관심이 많으신 분!',
      '리더십있고 창의력이 넘치시는 분!',
    ],
    activity: [
      '인적, 학술적 콘텐츠 기획 및 진행합니다.',
      'FIELD 유튜브 콘텐츠 기획 및 촬영합니다.',
      'FIELD CAMP 레크레이션 및 산공인의 밤을 기획합니다.',
    ],
  },
  external: {
    department: '대외협력부',
    explain: [
      '타인과 소통하며 협업 하기를 원하는 분!',
      '인적, 학술적 교류 활성화를 중요시 하는 분!',
      '컨텐츠 제작 및 기획에 관심이 많으신 분!',
      '리더십있고 창의력이 넘치시는 분!',
    ],
    activity: [
      '고교 산업공학과 진로지도 강연',
      '산업공학과 출신 기업인 인터뷰',
      'FIELD CAMP 인적 관리 및 기업 컨택',
    ],
  },
  competition: {
    department: '컴페티션부',
    explain: [
      'FIELD 활동에 대한 의지가 강하신 분!',
      '학술적 정보 제공을 중요시 하는 분!',
      '세미나를 직접 기획하고 발표한 경험이 있는 분!',
      '자기 주장력이 강하고 봉사심이 투철하신 분!',
    ],
    activity: [
      'FIELD 세미나 및 학술 교류 주관',
      'FIELD CAMP 컴페티션 주제 선정',
      'FIELD CAMP 컴페티션 자료, 평가 기준 제작',
    ],
  },
  relation: {
    department: '홍보부',
    explain: [
      '타인과 소통하며 협업 하기를 원하는 분!',
      '인적, 학술적 교류 활성화를 중요시 하는 분!',
      '컨텐츠 제작 및 기획에 관심이 많으신 분!',
      '리더십있고 창의력이 넘치시는 분!',
    ],
    activity: [
      '산업공학과 및 FIELD 홍보 카드뉴스 제작',
      'FIELD 활동 책자 및 신문 제작',
      'FIELD CAMP 홍보물 제작 및 홍보',
    ],
  },
};

function DepartmentBox({part, p, target}) {
  return (
    <QuestionBox>
      <BoxSize>
        <Question>{`${allDepartment[part].department}${p}`}</Question>
        <ul>
          {allDepartment[part][target].map((item, index) => (
            <Answer key={index}>{`${index + 1}. ${item}`}</Answer>
          ))}
        </ul>
      </BoxSize>
    </QuestionBox>
  );
}

export default function Department() {
  const [selectedDepartment, setSelectedDepartment] = useState('planning');

  function DepartmentHandler(name) {
    setSelectedDepartment(name);
  }
  return (
    <DepartmentSection>
      <SubTitle>모집 분야</SubTitle>
      <ButtonWrapper $activelink={selectedDepartment}>
        <DepartmentButton name='planning' onClick={() => DepartmentHandler('planning')}>
          기획부
        </DepartmentButton>
        <DepartmentButton name='external' onClick={() => DepartmentHandler('external')}>
          대외협력부
        </DepartmentButton>
        <DepartmentButton name='competition' onClick={() => DepartmentHandler('competition')}>
          컴페티션부
        </DepartmentButton>
        <DepartmentButton name='relation' onClick={() => DepartmentHandler('relation')}>
          홍보부
        </DepartmentButton>
      </ButtonWrapper>
      <DepartmentBox part={selectedDepartment} p='는 어떤 인재를 원하나요! 🔍' target='explain' />
      <DepartmentBox part={selectedDepartment} p='는 어떤 활동을 하나요! 💪' target='activity' />
    </DepartmentSection>
  );
}

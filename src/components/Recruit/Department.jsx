import {useState} from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const SubTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin: 0 0 1rem 0;
  font-weight: 600;
`;

const QuestionBox = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0.65rem;
  color: ${theme.colors.black};
  margin: 0 0 2rem 0;
  padding: 1rem 0 0.5rem 0.5rem;
  font-weight: 400;
`;

const Question = styled.h3`
  font-size: 1.25rem;
  font-weight: 900;
  margin: 0 0 1.25rem 0;
`;

const AnswerUl = styled.ul`
  margin: 0 0 0;
`;

const Answer = styled.li`
  font-size: 1rem;
  letter-spacing: -0.04rem;
  font-weight: 700;
  margin: 0 0 1rem 0.25rem;
  word-break: keep-all;
`;

const DepartmentButton = styled.button`
  padding: 0.3rem;
  font-size: 1rem;
  border-radius: 0.5rem;
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
};

function DepartmentBox({part, p, target}) {
  return (
    <QuestionBox>
      <Question>{`${allDepartment[part].department}${p}`}</Question>
      <AnswerUl>
        {allDepartment[part][target].map((item, index) => (
          <Answer key={index}>{`${index + 1}. ${item}`}</Answer>
        ))}
      </AnswerUl>
    </QuestionBox>
  );
}

export default function Department() {
  const [selectedDepartment, setSelectedDepartment] = useState('planning');

  let nowDepartment;
  switch (selectedDepartment) {
    case 'planning':
      nowDepartment = 'planning';
      break;
    default:
      nowDepartment = 'error';
  }
  return (
    <>
      <SubTitle>모집 분야</SubTitle>
      <DepartmentButton>기획부</DepartmentButton>
      <DepartmentBox part={nowDepartment} p='는 어떤 인재를 원하나요! 🔍' target='explain' />
      <DepartmentBox part={nowDepartment} p='는 어떤 활동을 하나요! 💪' target='activity' />
    </>
  );
}

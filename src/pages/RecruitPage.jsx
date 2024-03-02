import styled from 'styled-components';
import Department from '../components/Recruit/Department';
import Question from '../components/Recruit/Qustion';
import Content from '../components/Recruit/Content';
import theme from '../theme';

const Title = styled.h1`
  font-family: 'Goblin One';
  font-size: 1.875rem;
  text-align: center;
  padding: 2rem 0;
  font-weight: 300;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin: 0 0 1.5rem 0;
  font-weight: 800;
`;

const MainSection = styled.section`
  height: 55vh;
  background: linear-gradient(to bottom, #313131 60%, ${theme.colors.black} 100%);
`;

const P = styled.p`
  font-size: ${props => (props.$fontSize ? props.$fontSize : '1rem')};
  color: ${theme.colors.white};
  font-weight: ${props => (props.$fontWeight ? props.$fontWeight : 300)};
  text-align: center;
  margin: ${props => (props.$margin ? props.$margin : '1rem 0')};
`;
const QUSANS = [
  {
    id: 1,
    qes: 'Q. 부서 별 인원 구성은 어떻게 되나요?',
    ans: 'A. 각 부서별로 10명 ~ 15명으로 구성됩니다!  지난 기수의 경우 기획부 10명, 대외협력부 14명, 컴페티션부 12명, 홍보부 10명으로 구성되었습니다.',
  },
  {
    id: 2,
    qes: 'Q. 전체 회의는 어디서 진행하나요?',
    ans: 'A. 수도권 대학교 강의실에서 진행합니다! 작년의 경우 동국대, 홍익대, 숭실대, 한양대 등에서 진행했습니다😁',
  },
  {
    id: 3,
    qes: 'Q. FIELD CAMP에 FIELD 멤버도 컴페티션에 참여할 수 있나요?',
    ans: 'A. 아니요. FIELD CAMP 기간 동안 FIELD 멤버들은 FIELD CAMP에 참가한 참가자들을 도와주는 스태프 역할을 합니다.',
  },
  {
    id: 4,
    qes: 'Q. 비수도권 거주자나 지방 대학 소속 대학들도 지원가능한가요?',
    ans: 'A. 저희 FIELD는 전국 대학생 산업공학도 모임으로 비수도권 거주자 혹은 지방 대학생이어도 지원 가능합니다😃',
  },
  {
    id: 5,
    qes: 'Q. 휴학생/대학원생도 지원 가능 한가요?',
    ans: 'A. 산업공학을 주/복수/부전공하는 대학(원)생이라면 누구나 지원 가능합니다! 휴학생도 신입생도 모두 가능입니다😆',
  },
];

export default function RecruitPage() {
  return (
    <main>
      <section>
        <MainSection>
          <Title>RECRUIT</Title>
          <P $fontSize='1.5rem' $fontWeight='600' $margin='5rem 0 2rem 0'>
            지금은 모집기간이 아닙니다.
          </P>
          <P>필드는 매년 1월에 새로운 멤버를 모집합니다.</P>
        </MainSection>
        <Content />
        <Department />
        <section style={{margin: '0 7.5%'}}>
          <SubTitle>자주 묻는 질문</SubTitle>
          {QUSANS.map(item => (
            <Question key={item.id} qes={item.qes} ans={item.ans} />
          ))}
        </section>
      </section>
    </main>
  );
}

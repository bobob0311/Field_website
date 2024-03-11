import styled from 'styled-components';
import DepartmentIntro from './DepartmentIntro';

const MainSection = styled.section`
  margin: 7.5%;
  display: flex;
  flex-direction: column;
`;

function DepartmentSection() {
  return (
    <MainSection>
      <DepartmentIntro />
    </MainSection>
  );
}

export default DepartmentSection;

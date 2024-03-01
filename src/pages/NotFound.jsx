import styled from 'styled-components';

const PageSection = styled.section`
  height: calc(100vh - 6.5rem - 127.69px);
`;

export default function NotFound() {
  return (
    <PageSection>
      <p>현재 페이지는 존재하지 않는 페이지입니다.</p>
    </PageSection>
  );
}

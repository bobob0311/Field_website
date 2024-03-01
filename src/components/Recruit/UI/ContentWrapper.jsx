import styled from 'styled-components';

const ContentWrapper = styled.section`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 980px;
  }

  @media (min-width: 1024px) {
    max-width: 980px;
  }
`;

export default ContentWrapper;

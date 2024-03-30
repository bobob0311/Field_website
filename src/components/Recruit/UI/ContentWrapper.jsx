import styled from 'styled-components';

const ContentWrapper = styled.section`
  margin: ${props => (props.$margin ? props.$margin : '3rem 0')};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;

  @media (min-width: 1024px) {
    margin: 6rem 0;
  }
`;

export const SmallContentWrapper = styled(ContentWrapper)`
  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

export const BigContentWrapper = styled(ContentWrapper)`
  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

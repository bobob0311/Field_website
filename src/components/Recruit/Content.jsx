import styled from 'styled-components';
import theme from '../../theme';

const Box = styled.div`
  background: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 5rem;
  border-radius: 0.65rem;
`;

const Wrapper = styled.div`
  margin: 5rem 0;
`;
const SubTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  padding: 0 1rem 0 0;
  margin: 0 0 1rem 0;
  font-weight: 900;
`;

const P = styled.p`
  font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
  color: ${props => (props.color ? theme.colors[props.color] : theme.colors.black)};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 300)};
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
  margin: ${props => (props.margin ? props.margin : '1rem 0')};
`;

function Contanier({subtitle, content}) {
  return (
    <Wrapper>
      <SubTitle>{subtitle}</SubTitle>
      <P color='white'>{content}</P>
    </Wrapper>
  );
}
function ContanierWithBox({subtitle, content}) {
  return (
    <Wrapper>
      <SubTitle>{subtitle}</SubTitle>
      <Box>
        <P color='white'>{content}</P>
      </Box>
    </Wrapper>
  );
}

export default function Content() {
  return (
    <>
      <P fontSize='1.5rem' fontWeight='600' color='white'>
        지금은 모집기간이 아닙니다.
      </P>
      <P color='white'>필드는 매년 1월에 새로운 멤버를 모집합니다.</P>
      <Contanier subtitle='😀 지원자격' content='산업공학을 주/복수/부전공하는 대학생' />
      <ContanierWithBox subtitle='📆 모집 일정' content='zz' />
      <Contanier subtitle='📚 활동 기간' content='매년 3월 ~ 12월 (10개월)' />
      <ContanierWithBox subtitle='💎 지원 방법' content='zz' />
    </>
  );
}

import PocketBase from 'pocketbase';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const Box = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0.65rem;
  padding: 0.5rem;
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
  word-break: keep-all;
`;

const Pspan = styled.span`
  margin: 0 0 0.2rem 0;
  text-indent: ${props => (props.textIndent ? props.textIndent : '')};
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WhiteMessage = styled.img`
  width: 1.5rem;
  margin: 0 0.2rem 0 0.4rem;
`;

const DateP = styled(P)`
  text-align: left;
  font-weight: 700;
  letter-spacing: -1px;
`;

const AddressLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.white};
  font-size: 1rem;
  font-weight: 700;
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
  const [data, setData] = useState([]);

  async function RecuitData() {
    const pb = new PocketBase(import.meta.env.VITE_APP_URL);
    try {
      const respone = await pb.collection('Recruit').getFullList();
      const formattedDateArray = respone.map(item => {
        const inputDate = new Date(item.Date);

        const year = inputDate.getFullYear();
        const month = String(inputDate.getMonth() + 1).padStart(2, '0');
        const day = String(inputDate.getDate()).padStart(2, '0');

        const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
        const dayOfWeek = daysOfWeek[inputDate.getDay()];

        return `${year}.${month}.${day} (${dayOfWeek})`;
      });
      setData(formattedDateArray);
    } catch (err) {
      Error(err);
    }
  }
  useEffect(() => {
    RecuitData();
  }, []);

  const APPLYMETHOD = (
    <>
      <P fontWeight='700' margin='0.5rem 0 0.5rem 0'>
        <Pspan>필드 리틀리 혹은 필드 블로그에서 지원서</Pspan>
        <Pspan>다운로드 후 서류 작성하여 아래 이메일로 제출</Pspan>
      </P>
      <FlexRow>
        👉
        <WhiteMessage src='MessageWhite.png' alt='하얀색 Messege 아이콘' width={20} />
        <address>
          <AddressLink href='mailto:iefieldcamp24@gamil.com' target='_blank'>
            iefieldcamp24@gamil.com
          </AddressLink>
        </address>
        👈
      </FlexRow>
    </>
  );
  const DATE = (
    <>
      <DateP>
        📄서류 접수: {data[0]} ~ {data[1]}
      </DateP>
      <DateP>✅1차 서류 전형 합격자 발표: {data[2]}</DateP>
      <DateP>
        <Pspan>
          💬2차 면접: {data[3]} ~ {data[4] ? data[4].slice(8) : ''}
        </Pspan>
        <Pspan textIndent='4.8rem'>
          {data[5]} ~ {data[6] ? data[6].slice(8) : ''}
        </Pspan>
      </DateP>
    </>
  );

  return (
    <>
      <P fontSize='1.5rem' fontWeight='600' color='white'>
        지금은 모집기간이 아닙니다.
      </P>
      <P color='white' margin='1rem 0 100% 0'>
        필드는 매년 1월에 새로운 멤버를 모집합니다.
      </P>
      <Contanier subtitle='😀 지원자격' content='산업공학을 주/복수/부전공하는 대학생' />
      <ContanierWithBox subtitle='📆 모집 일정' content={DATE} />
      <Contanier subtitle='📚 활동 기간' content='매년 3월 ~ 12월 (10개월)' />
      <ContanierWithBox subtitle='💎 지원 방법' content={APPLYMETHOD} />
    </>
  );
}

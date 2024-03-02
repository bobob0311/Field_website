import {useEffect, useState} from 'react';
import styled, {keyframes} from 'styled-components';
import theme from '../../theme';
import {LoadDateData} from '../../lib/Apiservice';
import ContentWrapper from './UI/ContentWrapper';

const P = styled.p`
  font-size: 1rem;
  color: ${props => (props.$color ? theme.colors[props.$color] : theme.colors.black)};
  font-weight: 700;
  text-align: center;
  margin: ${props => (props.$margin ? props.$margin : '1rem 0')};
  word-break: keep-all;
`;

const ContentBox = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0.65rem;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  padding: 0 1rem 0 0;
  margin: 0 0 1.5rem 0;
  font-weight: 800;
`;

const OneLine = styled.div`
  margin: 0 0 0 0.2rem;
  text-indent: ${props => (props.$textIndent ? props.$textIndent : '')};
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0.5rem 0;
`;

const WhiteMessage = styled.img`
  width: 1.5rem;
  margin: 0 0.2rem 0 0.4rem;
`;

const DateP = styled(P)`
  text-align: left;
  font-weight: 700;
  letter-spacing: -1.5px;
  display: flex;
  padding: 0 0 0 0.2rem;
`;

const AddressLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.white};
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0.4rem 0 0;
`;
const BoxSize = styled.div`
  margin: 0 auto;
`;

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingSpin = styled.div`
  margin: 1.5rem auto 1.5rem;
  width: 5rem;
  height: 5rem;
  border: 0.2rem solid transparent;
  border-top-color: ${theme.colors.black};
  border-radius: 50%;
  animation: ${spin} 0.5s linear infinite;
`;

function InfoGroup({subtitle, content}) {
  return (
    <ContentWrapper>
      <SubTitle>{subtitle}</SubTitle>
      <P $color='white'>{content}</P>
    </ContentWrapper>
  );
}

function InfoGroupWithBox({subtitle, content}) {
  return (
    <ContentWrapper>
      <SubTitle>{subtitle}</SubTitle>
      <ContentBox>
        <BoxSize>{content}</BoxSize>
      </ContentBox>
    </ContentWrapper>
  );
}

const APPLYMETHOD = (
  <>
    <P $margin='0.5rem 0 0.5rem 0'>
      <OneLine>필드 리틀리 혹은 필드 블로그에서 지원서 </OneLine>
      <OneLine>다운로드 후 서류 작성하여 아래 이메일로 제출</OneLine>
    </P>
    <FlexRow>
      👉
      <WhiteMessage src='MessageWhite.png' alt='하얀색 Messege 아이콘' width={20} />
      <address>
        <AddressLink href='mailto:iefieldcamp24@gmail.com' target='_blank'>
          iefieldcamp24@gmail.com
        </AddressLink>
      </address>
      👈
    </FlexRow>
  </>
);

export default function Content() {
  const [dateData, setDateData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function dateFormatChange(date) {
    return date.map(item => {
      const inputDate = new Date(item.Date);

      const year = inputDate.getFullYear();
      const month = String(inputDate.getMonth() + 1).padStart(2, '0');
      const day = String(inputDate.getDate()).padStart(2, '0');

      const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
      const dayOfWeek = daysOfWeek[inputDate.getDay()];

      return `${year}.${month}.${day} (${dayOfWeek})`;
    });
  }

  function dateDataLocalStored(dateArray) {
    const localdateArray = {key: dateArray};
    localStorage.setItem('date', JSON.stringify(localdateArray));
  }

  async function initialSetup() {
    setIsLoading(true);
    try {
      const respone = await LoadDateData();
      const fomattedDate = dateFormatChange(respone);
      dateDataLocalStored(fomattedDate);
      setDateData(fomattedDate);
      setIsLoading(false);
    } catch {
      setIsError(true);
    }
  }

  useEffect(() => {
    const storedObject = JSON.parse(localStorage.getItem('date'));
    if (!storedObject) {
      initialSetup();
    } else {
      setDateData(storedObject.key);
    }
  }, []);

  let recruitmentContent;
  if (isError === true) {
    recruitmentContent = (
      <>
        <P>데이터를 불러오지 못했습니다</P>
        <P>새로고침을 통해 다시 한번 시도해주세요</P>
      </>
    );
  } else if (isLoading === false) {
    recruitmentContent = (
      <>
        <DateP>{`📄 서류 접수: ${dateData[0]} ~ ${dateData[1]}`}</DateP>
        <DateP>{`✅ 1차 서류 전형 합격자 발표: ${dateData[2]}`}</DateP>

        <DateP>
          💬 2차 면접:
          <span>
            <OneLine>{` ${dateData[3]} ~ ${dateData[4] ? dateData[4].slice(8) : ''}`}</OneLine>
            <OneLine>{`${dateData[5]} ~ ${dateData[6] ? dateData[6].slice(8) : ''}`}</OneLine>
          </span>
        </DateP>
        <DateP>{`✅ 최종 합격자 발표: ${dateData[7]}`}</DateP>
      </>
    );
  } else {
    recruitmentContent = <LoadingSpin />;
  }

  return (
    <>
      <InfoGroup subtitle='😀 지원자격' content='산업공학을 주/복수/부전공하는 대학생' />
      <InfoGroupWithBox subtitle='💎 지원 방법' content={APPLYMETHOD} />
      <InfoGroup subtitle='📚 활동 기간' content='매년 3월 ~ 12월 (10개월)' />
      <InfoGroupWithBox subtitle='📆 모집 일정' content={recruitmentContent} />
    </>
  );
}

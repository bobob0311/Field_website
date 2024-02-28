import styled from 'styled-components';
import theme from '../../theme';

const FooterArea = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 0;
  background: #141414;
  padding: 3% 5%;
`;

const FooterContent = styled.span`
  font-size: 0.625rem;
  margin: 0.3rem 0;
  font-weight: 900;
`;

const FooterImg = styled.img`
  width: ${props => (props.width ? props.width : '2rem')};
  height: ${props => (props.height ? props.height : '2rem')};
`;

const ImgWrapper = styled.div`
  display: flex;
  margin: 1rem 0 0 0;
  align-items: center;
`;

const ImgLink = styled.a`
  margin: 0 1rem 0 0;
`;

const AddressLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.white};
  font-size: 0.625rem;
  font-weight: 900;
`;

export default function Footer() {
  return (
    <FooterArea>
      <FooterContent>FIELD (필드, 전국 대학생 산업공학도 동아리)</FooterContent>
      <FooterContent>Copyrightⓒ2024.FIELD. All rights reserved.</FooterContent>
      <address>
        <AddressLink href='mailto:iefieldcamp24@gamil.com' target='_blank'>
          iefieldcamp24@gamil.com
        </AddressLink>
      </address>

      <ImgWrapper>
        <ImgLink href='http://pf.kakao.com/_uwNxeK' target='_blank'>
          <FooterImg src='/KakaoTalk.png' alt='kakaotalk 아이콘' width='1.8rem' height='1.8rem' />
        </ImgLink>
        <ImgLink href='https://www.instagram.com/iefield/' target='_blank'>
          <FooterImg src='/Instagram.png' alt='Instagram 아이콘' />
        </ImgLink>
        <ImgLink href='https://www.youtube.com/@field2023' target='_blank'>
          <FooterImg src='/Youtube.png' alt='Youtube 아이콘' />
        </ImgLink>
      </ImgWrapper>
    </FooterArea>
  );
}

import styled from 'styled-components';
import theme from '../../theme';

const FooterArea = styled.footer`
  background: #141414;
  padding: 10px 7.5%;
`;

const FooterContent = styled.div`
  font-size: 10px;
  margin: 5px 0 0 0;
  font-weight: 900;
`;

const FooterImg = styled.img`
  width: ${props => (props.width ? props.width : '32px')};
  height: ${props => (props.height ? props.height : '32px')};
`;

const ImgWrapper = styled.div`
  display: flex;
  margin: 12px 0 0 0;
  align-items: center;
`;

const ImgLink = styled.a`
  margin: 0 1rem 0 0;
`;

const AddressLink = styled.a`
  display: inline;
  width: auto;
  text-decoration: none;
  color: ${theme.colors.white};
  padding: 0;
  margin: 0 0;
  font-size: 10px;
  font-weight: 900;
`;

export default function Footer() {
  return (
    <FooterArea>
      <FooterContent>FIELD (필드, 전국 대학생 산업공학도 모임)</FooterContent>
      <FooterContent>Copyrightⓒ2024.FIELD. All rights reserved.</FooterContent>
      <AddressLink href='mailto:iefieldcamp24@gmail.com' target='_blank'>
        iefieldcamp24@gmail.com
      </AddressLink>

      <ImgWrapper>
        <ImgLink href='http://pf.kakao.com/_uwNxeK' target='_blank'>
          <FooterImg src='/KakaoTalk.png' alt='kakaotalk 아이콘' width='28px' height='28px' />
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

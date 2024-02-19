import styled from 'styled-components';
import theme from '../../theme';

const FooterArea = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 0 0;
  width: 90%;
  background: #141414;
  padding: 5%;
`;

const FooterContent = styled.span`
  font-size: 0.625rem;
  margin: 0.3rem 0;
  font-weight: 600;
`;

const FooterImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

const ContentWrapper = styled.p`
  display: flex;
  flex-direction: column;
  margin: 0 0 0.5rem 0;
`;

const ImgWrapper = styled.div`
  display: flex;
`;

const ImgLink = styled.a`
  margin: 0 1rem 0 0;
`;

const AddressLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.white};
  font-size: 0.625rem;
  font-weight: 600;
`;

export default function Footer() {
  return (
    <FooterArea>
      <ContentWrapper>
        <FooterContent>FIELD (필드, 전국 대학생 산업공학도 동아리)</FooterContent>
        <FooterContent>Copyrightⓒ2024.FIELD. All rights reserved.</FooterContent>
        <address>
          <AddressLink href='iefieldcamp24@gamil.com'>iefieldcamp24@gamil.com</AddressLink>
        </address>
      </ContentWrapper>
      <ImgWrapper>
        <ImgLink href='/contact'>
          <FooterImg src='KakaoTalk.png' alt='kakaotalk' />
        </ImgLink>
        <ImgLink>
          <FooterImg src='Instagram.png' alt='Instagram' />
        </ImgLink>
        <ImgLink>
          <FooterImg src='Youtube.png' alt='Youtube' />
        </ImgLink>
      </ImgWrapper>
    </FooterArea>
  );
}

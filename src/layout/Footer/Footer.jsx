import styled from 'styled-components';

const FooterArea = styled.footer`
  display: flex;
  justify-content: space-between;
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
  width: 2.5rem;
  height: 2.5rem;
`;

const ContentWrapper = styled.p`
  display: flex;
  flex-direction: column;
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: space-evenly;
`;

const ImgLink = styled.a``;

export default function Footer() {
  return (
    <FooterArea>
      <ContentWrapper>
        <FooterContent>FIELD (필드, 전국 대학생 산업공학도 동아리)</FooterContent>
        <FooterContent>Copyrightⓒ2024.FIELD. All rights reserved.</FooterContent>
        <FooterContent> Published 2008.</FooterContent>
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

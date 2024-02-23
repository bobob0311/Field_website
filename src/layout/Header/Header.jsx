import styled from 'styled-components';
import {useState} from 'react';
import theme from '../../theme';
import MenuBurgur from './MenuBurgur';
import MenuContent from './MenuContent';

const MenuBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 5;
`;

const MainHeaderWrapper = styled.div`
  display: flex;
  background: #141414;
  align-items: center;
  height: 4.5rem;
  padding: 0 7.5%;
  justify-content: space-between;
  z-index: 10;
`;

const Home = styled.a`
  text-decoration: none;
  color: ${theme.colors.white};
`;

const HomeFigure = styled.figure`
  display: flex;
  align-items: center;
`;
const HomeLogo = styled.img`
  height: 2.2rem;
`;

const HomeTitle = styled.figcaption`
  margin: 0.1rem 0 0 0.4rem;
  font-size: 2.2rem;
  font-weight: 900;
`;

const MenuButton = styled.button`
  appearance: none;
  background: none;
  border: none;
  padding: 0;
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function showHandler() {
    setIsOpen(!isOpen);
  }

  const HomeDirection = (
    <Home href='/'>
      <HomeFigure>
        <HomeLogo src='/fieldLogo.png' />
        <HomeTitle>FIELD</HomeTitle>
      </HomeFigure>
    </Home>
  );

  return (
    <MenuBar>
      <MainHeaderWrapper>
        {HomeDirection}
        <MenuButton onClick={() => showHandler()}>
          <MenuBurgur open={isOpen} />
        </MenuButton>
      </MainHeaderWrapper>
      {isOpen && <MenuContent onClose={() => showHandler()} />}
    </MenuBar>
  );
}

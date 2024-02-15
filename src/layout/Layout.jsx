import {Outlet, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {useState} from 'react';
import theme from '../theme';
import MenuBurgur from './MenuBurgur';
import MenuContent from './MenuContent';

const MenuBar = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  height: 4.5rem;
  padding: 0 5%;
  background: #141414;
  justify-content: space-between;
  z-index: 3;
`;

const Home = styled.a`
  text-decoration: none;
  color: ${theme.colors.white};
`;

const HomeFigure = styled.figure`
  display: flex;
  align-items: center;
  height: inherit;
`;
const HomeLogo = styled.img`
  height: 2.2rem;
`;

const HomeTitle = styled.figcaption`
  margin: 0 0 0 0.4rem;
  font-size: 2.2rem;
  font-weight: 900;
`;

const MenuButton = styled.button`
  appearance: none;
  background: none;
  border: none;
`;

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  function openHandler() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }
  return (
    <>
      <MenuBar>
        <Home href='/'>
          <HomeFigure>
            <HomeLogo src='fieldLogo.png' />
            <HomeTitle>FIELD</HomeTitle>
          </HomeFigure>
        </Home>
        <MenuButton onClick={() => openHandler()}>
          <MenuBurgur open={isOpen} />
        </MenuButton>
      </MenuBar>
      {isOpen && <MenuContent />}
      <Outlet />
    </>
  );
}

export default Layout;

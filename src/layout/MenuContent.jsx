import styled, {keyframes} from 'styled-components';
import {useLocation, useNavigate} from 'react-router-dom';
import theme from '../theme';

const slideDownAnimation = keyframes`
  0% {
    transform-origin: 0 0;
    transform: translateY(-100%);
  }

  100% {
    transform-origin: 0 0;
    transform: translateY(0%);
  }
`;

const HeaderBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const HeaderContent = styled.nav`
  position: fixed;
  width: 100%;
  top: 4.5rem;
  display: flex;
  flex-direction: column;
  background: #141414;

  animation: ${slideDownAnimation} 0.3s ease-in-out;
  padding: 0.5rem 0;
  z-index: 10;
`;

const MenuContainer = styled.ul`
  padding: 0.5rem 0;
  ${props =>
    props.activeLink &&
    `
    li a[name="${props.activeLink}"] {
      color: ${theme.colors.black};
      background: ${theme.colors.gray};
    }
  `}
`;

const OneMenu = styled.li`
  height: 4rem;
`;

const MenuLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  font-weight: 600;
  text-decoration: none;
  color: ${theme.colors.white};
  padding: 0 0 0 5%;
  line-height: 200%;
`;

export default function MenuContent() {
  const Menus = [
    {title: 'ABOUT FIELD', link: 'about'},
    {title: 'FIELD CAMP', link: 'camp'},
    {title: 'NEWS', link: 'news'},
    {title: 'CONTACT', link: 'contact'},
    {title: 'RECRUIT', link: 'recruit'},
  ];

  const location = useLocation();
  return (
    <HeaderBackground>
      <HeaderContent>
        <MenuContainer activeLink={location.pathname.replace('/', '')}>
          {Menus.map(Menu => (
            <OneMenu key={Menu.title}>
              <MenuLink name={Menu.link} href={`${Menu.link}`}>
                {Menu.title}
              </MenuLink>
            </OneMenu>
          ))}
        </MenuContainer>
      </HeaderContent>
    </HeaderBackground>
  );
}

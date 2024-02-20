import styled, {keyframes} from 'styled-components';
import {Link, useLocation} from 'react-router-dom';
import theme from '../../theme';

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

const HeaderContactSection = styled.div`
  position: fixed;
  top: 4.5rem;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const HeaderContent = styled.nav`
  position: fixed;
  width: 100%;
  top: 4.5rem;
  display: flex;
  z-index: 2;
  flex-direction: column;
  background: #141414;
  animation: ${slideDownAnimation} 0.3s ease-in-out;
  padding: 0.5rem 0;
`;

const MenuContainer = styled.ul`
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
  font-family: 'Goblin One';
  display: block;
  height: 100%;
  font-size: 1.5rem;
  text-decoration: none;
  color: ${theme.colors.white};
  padding: 0 0 0 5%;
  line-height: 270%;
`;

export default function MenuContent(props) {
  const {onClose} = props;
  const Menus = [
    {title: 'ABOUT FIELD', link: 'about'},
    {title: 'FIELD CAMP', link: 'camp'},
    {title: 'NEWS', link: 'news'},
    {title: 'CONTACT', link: 'contact'},
    {title: 'RECRUIT', link: 'recruit'},
  ];

  const location = useLocation();
  return (
    <HeaderContactSection onClick={onClose}>
      <HeaderContent>
        <MenuContainer activeLink={location.pathname.replace('/', '')}>
          {Menus.map(Menu => (
            <OneMenu key={Menu.title}>
              <MenuLink name={Menu.link} href={`/${Menu.link}`}>
                {Menu.title}
              </MenuLink>
              {/* <Link to={`${Menu.link}`}>{Menu.title}</Link> */}
            </OneMenu>
          ))}
        </MenuContainer>
      </HeaderContent>
    </HeaderContactSection>
  );
}

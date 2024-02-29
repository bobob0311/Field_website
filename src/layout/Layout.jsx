import {Outlet} from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SideBar from './component/Sidebar';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <SideBar />
      <Footer />
    </>
  );
}

export default Layout;

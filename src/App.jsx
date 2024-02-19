import {Route, Routes} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './GlobalStyle';
import './index.css';
import theme from './theme';
import MainPage from './pages/MainPage';
import CampPage from './pages/CampPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RecruitPage from './pages/RecruitPage';
import Layout from './layout/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/camp' element={<CampPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/recruit' element={<RecruitPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

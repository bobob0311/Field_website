import {Route, Routes} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import Layout from './layout/Layout';
import GlobalStyle from './GlobalStyle';
import './index.css';
import AboutPage from './pages/AboutPage';
import CampPage from './pages/CampPage';
import ContactPage from './pages/ContactPage';
import MainPage from './pages/MainPage';
import RecruitPage from './pages/RecruitPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import theme from './theme';
import NotFound from './pages/NotFound';

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
          <Route path='/news' element={<NewsPage />} />
          <Route path='detail/:id' element={<NewsDetailPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

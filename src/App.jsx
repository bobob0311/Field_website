import {Route, Routes} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './GlobalStyle';
import './index.css';
import theme from './theme';
import MainPage from './pages/mainPage';
import CampPage from './pages/CampPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/camp' element={<CampPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

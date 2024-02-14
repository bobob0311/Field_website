import {Route, Routes} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './GlobalStyle';
import './index.css';
import MainPage from './pages/mainPage';
import theme from './theme';
import CampPage from './pages/CampPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/camp' element={<CampPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

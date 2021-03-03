import React, { createContext } from 'react';
import MainContainer from './components/MainContainer';
import Button from './components/Button';
import useThemeProvider from './commons/useThemeProvider';

export const ThemeContext = createContext();

function App() {
  const theme = useThemeProvider();

  return (
    <ThemeContext.Provider value={theme}>
      <MainContainer>
        <Button label="change" />
      </MainContainer>
    </ThemeContext.Provider>
  );
}

export default App;

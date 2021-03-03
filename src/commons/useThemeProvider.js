import { useState } from 'react';

export const BACKGROUND_ENUM = {
  LIGHT: '#f5f5f5',
  DARK: '#212121',
}

const useThemeProvider = () => {
  const [ theme, setTheme ] = useState({
    palette: {
      primary: '#ffeb3b',
      secondary: '#212121'
    },
    color: '#000000',
    background: BACKGROUND_ENUM.LIGHT,
  });

  const updateBackground = () => {
    console.log('is running');
    if (theme.background === BACKGROUND_ENUM.LIGHT) {
      setTheme({
        ...theme,
        background: BACKGROUND_ENUM.DARK,
      })
    } else setTheme({
      ...theme,
      background: BACKGROUND_ENUM.LIGHT,
    })
  }

  return {
    theme,
    updateBackground,
  }
}

export default useThemeProvider;
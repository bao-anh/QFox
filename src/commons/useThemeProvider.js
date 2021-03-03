import { useState } from 'react';

export const THEME_ENUM = {
  LIGHT: {
    background: '#f5f5f5',
    color: '#000000',
    buttonColor: '#FFFFFF',
  },
  DARK: {
    background: '#212121',
    color: '#FFFFFF',
    buttonColor: '#000000',
  },
}

const useThemeProvider = () => {
  const { color, background, buttonColor } = THEME_ENUM.LIGHT;
  const [ theme, setTheme ] = useState({
    palette: {
      primary: {
        background: '#fbc02d',
        hover: '#dc9f04',
      },
      secondary: {
        background: '#212121',
        hover: '#212121',
      },
    },
    color,
    buttonColor,
    background,
  });

  const updateBackground = () => {
    if (theme.background === THEME_ENUM.LIGHT.background) {
      setTheme({
        ...theme,
        background: THEME_ENUM.DARK.background,
        color: THEME_ENUM.DARK.color,
        buttonColor: THEME_ENUM.DARK.buttonColor,
      })
    } else setTheme({
      ...theme,
      background,
      color,
      buttonColor,
    })
  }

  return {
    theme,
    updateBackground,
  }
}

export default useThemeProvider;
import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import {
  Container,
} from './styles.js'

const Button = ({ color, label }) => {
  const { theme, updateBackground } = useContext(ThemeContext);

  return (
    <Container
      backgroundColor={color || theme.palette.primary.background}
      hoverColor={color || theme.palette.primary.hover}
      color={theme.buttonColor}
      onClick={updateBackground}
    >
      {label ? label.toUpperCase() : 'BUTTON'}
    </Container>
  )
};

export default Button;

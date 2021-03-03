import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import {
  Container,
} from './styles.js'

const Button = ({ color, label }) => {
  const { theme, updateBackground } = useContext(ThemeContext);

  return (
    <Container
      backgroundColor={color || theme.palette.primary}
      color={color === theme.palette.secondary ? '#FFF' : '#000' }
      onClick={updateBackground}
    >
      {label ? label.toUpperCase() : 'BUTTON'}
    </Container>
  )
};

export default Button;

import React from 'react';
import {
  Container,
} from './styles.js'

const Button = ({ color, label }) => {
  return (
    <Container
      color={color || 'primary'}
    >
      {label.toUpperCase() || 'BUTTON'}
    </Container>
  )
};

export default Button;

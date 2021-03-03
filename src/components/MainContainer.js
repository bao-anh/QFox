import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../App';

const Wrapper = styled.div`
  background-color: ${props => props.background};
  color: ${props => props.color};
  width: 100vw;
  height: 100vh;
  user-select: none;
`;

const MainContainer = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper
      background={theme.background}
      color={theme.color}
    >
      {children}
    </Wrapper>
  )
};

export default MainContainer;

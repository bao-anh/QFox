import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../App';

const Wrapper = styled.div`
  background-color: ${props => props.background};
  width: 100vw;
  height: 100vh;
`;

const MainContainer = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper background={theme.background}>
      {children}
    </Wrapper>
  )
};

export default MainContainer;

import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.backgroundColor};
  padding: 10px;
  border-radius: 10px;
  width: fit-content;

  &:hover {
    cursor: pointer;
  }
`;

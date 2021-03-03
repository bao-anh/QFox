import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  padding: 10px;
  border-radius: 5px;
  width: fit-content;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

  &:hover {
    cursor: pointer;
    background-color: ${props => props.hoverColor}
  }
`;

import styled from 'styled-components';
import { inputTextColor, secundaryColor } from '../../config/colors';

export const ContainerMenu = styled.div`
  width: 18em;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #eee;
  padding: 1em;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  gap: 0.5em;
  font-size: 1.2em;
`;

export const Nav = styled.nav`
  font-size: 1.1em;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  ul:first-child {
    border-top: 1px solid #eee;
  }

  ul:last-child {
    border-top: 1px solid #eee;
    padding-top: 0.5em;
  }

  ul {
    width: 100%;
  }

  #login:hover {
    background-color: ${secundaryColor};
  }
`;

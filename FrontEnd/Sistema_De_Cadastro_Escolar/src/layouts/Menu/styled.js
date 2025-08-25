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
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
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
  border-bottom: 1px solid #eee;
`;

export const Nav = styled.nav`
  font-size: 1.1em;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  ul {
    width: 100%;
  }

  #login:hover {
    background-color: ${secundaryColor};
  }
`;

import styled, { createGlobalStyle } from 'styled-components';
import { backgroundColor } from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  button  {
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ContainerConteudo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: #ffff;
  margin-left: 18em;
  width: 100%;
  height: 100%;
  padding: 1em;
`;

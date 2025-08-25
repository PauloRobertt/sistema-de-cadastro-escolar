import styled from 'styled-components';
import {
  backgroundColor,
  primaryColor,
  primaryDarkColor,
} from '../../config/colors';

export const ContainerAlunos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: #ffff;
  margin-left: 18em;
  width: 100%;
  height: 100%;
  padding: 1em;
  border-radius: 1em;

  button {
    width: 15em;
    background-color: ${primaryColor};
    transition: background-color 300ms ease-in-out;
    color: #ffff;
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    padding: 0.5em;
    border: none;
    border-radius: 0.5em;
    font-weight: bold;
  }

  button:hover {
    background-color: ${primaryDarkColor};
  }
`;

export const TableAlunos = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;

  tr {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5em 1em;
  }

  thead tr {
    border-radius: 1em;
    background-color: ${backgroundColor};
  }

  table h3 {
    text-align: center;
  }

  tbody tr {
    border-bottom: 1px solid #eee;
  }

  th,
  td {
    text-align: left;
  }

  #pictureProfile {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3em;
  }

  td#pictureProfile {
    border-radius: 1em;
    font-size: 1.5em;
    width: 2em;
    height: 2em;
  }

  #pictureProfile img {
    border-radius: 1em;
    width: 100%;
    height: 100%;
  }

  #name {
    width: 10em;
  }

  #email {
    width: 20em;
  }

  #age {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3em;
  }

  #op {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3em;
  }

  td#op div {
    font-size: 1.3em;
    width: auto;
    cursor: pointer;
  }

  td#op {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  td#op div:last-of-type:hover {
    transition: 300ms color;
    color: red;
  }
`;

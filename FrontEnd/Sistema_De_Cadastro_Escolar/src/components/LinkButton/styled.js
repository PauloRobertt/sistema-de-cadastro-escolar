import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
  primaryColor,
  primaryDarkColor,
  secundaryColor,
  secundaryDarkColor,
} from '../../config/colors';

const variantStyles = {
  primary: css`
    color: ${secundaryColor};
    transition: color 500ms ease;

    &:hover {
      color: ${secundaryDarkColor};
    }
  `,

  tableOp: css`
    color: black;

    &:hover {
      color: #2563eb;
      transition: 300ms color;
    }
  `,

  menu: css`
    color: black;
    margin-top: 1em;
    padding: 0.5em;
    border-radius: 0.5em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5em;
    transition: background-color 300ms ease-in-out;

    &:hover {
      background-color: ${primaryColor};
      color: white;
    }
  `,

  adicionarAluno: css`
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

    &:hover {
      background-color: ${primaryDarkColor};
    }
  `,

  menuLogin: css`
    color: black;
    margin-top: 1em;
    padding: 0.5em;
    border-radius: 0.5em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5em;
    transition: background-color 300ms ease-in-out;

    &:hover {
      background-color: ${secundaryColor};
      color: white;
    }
  `,
};

export const LinkBtn = styled(Link)`
  ${({ variant }) => variantStyles[variant] || variantStyles.primary}
`;

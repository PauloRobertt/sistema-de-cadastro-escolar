import styled, { css } from 'styled-components';
import {
  primaryColor,
  primaryDarkColor,
  secundaryColor,
  secundaryDarkColor,
} from '../../config/colors';

const variantStyles = {
  primary: css`
    background-color: ${secundaryColor};
    border: none;
    padding: 1em;
    border-radius: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    color: #ffff;
    font-size: 1em;
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: background-color 500ms ease;

    &:hover {
      background-color: ${secundaryDarkColor};
      color: #ffff;
    }
  `,

  secondary: css`
    background-color: ${primaryColor};
    transition: background-color 300ms ease-in-out;
    color: #ffff;
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    padding: 0.8em 1em;
    border: none;
    border-radius: 0.5em;

    &:hover {
      background-color: ${primaryDarkColor};
    }
  `,

  EditUser: css`
    background-color: #f4f4f4;
    padding: 0.5em;
    border-radius: 0.5em;
    border: 1px solid #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
    gap: 0.5em;
    color: #525252ff;
    font-size: 1em;
    height: 50px;

    &:hover {
      border: 1px solid #bebebeff;
    }
  `,

  loggout: css`
    width: 100%;
    border: none;
    color: black;
    padding: 0.5em;
    border-radius: 0.5em;
    background-color: white;
    font-size: 1em;
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

export const Button = styled.button`
  ${({ variant }) => variantStyles[variant] || variantStyles.primary}
`;

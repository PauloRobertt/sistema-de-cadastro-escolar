import styled from 'styled-components';
import { secundaryColor, secundaryDarkColor } from '../../config/colors';

export const Button = styled.button`
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
`;

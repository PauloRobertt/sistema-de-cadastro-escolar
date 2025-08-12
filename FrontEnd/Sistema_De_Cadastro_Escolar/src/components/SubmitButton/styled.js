import styled from 'styled-components';
import { primaryColor, primaryDarkColor } from '../../config/colors';

export const Button = styled.button`
  background-color: ${primaryColor};
  border: none;
  padding: 0.5em;
  border-radius: 0.5em;
  color: #ffff;
  font-size: 1em;

  &:hover {
    background-color: ${primaryDarkColor};
    color: ${primaryColor};
  }
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { secundaryColor, secundaryDarkColor } from '../../config/colors';

export const LinkBtn = styled(Link)`
  color: ${secundaryColor};
  transition: color 500ms ease;

  &:hover {
    color: ${secundaryDarkColor};
  }
`;

import styled from 'styled-components';

export const ContainerSearch = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
  padding: 1em 0.5em;
  border-radius: 1em;
  border: 2px solid #eee;

  input {
    border: none;
    width: 100%;
    height: 30px;
  }

  &:focus-within {
    border: 2px solid #5a5a5aff;
  }
`;

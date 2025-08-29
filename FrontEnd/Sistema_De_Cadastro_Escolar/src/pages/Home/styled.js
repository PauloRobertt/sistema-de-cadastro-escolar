import styled from 'styled-components';

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;
  background-color: #ffff;
  margin-left: 18em;
  width: 100%;
  height: 100%;
  padding: 2em;
  border-radius: 1em;
`;

export const ContainerSaudacao = styled.div``;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  width: 100%;
  height: 40%;

  div {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 1em;
  }
`;

export const Cards = styled.div`
  border: 1px solid #eee;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 1em;
  padding: 1em;
  min-width: auto;
  min-height: 120px;
`;

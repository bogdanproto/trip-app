import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 84px;

  h1 {
    font-size: 18px;
    span {
      font-weight: lighter;
    }
  }
`;

export const ActionContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  margin-top: 12px;

  input {
    max-width: 240px;
  }
`;

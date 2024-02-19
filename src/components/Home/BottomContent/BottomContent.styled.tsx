import styled from 'styled-components';

export const BottomContentContainer = styled.div`
  box-sizing: border-box;

  width: calc(100vw - 520px);
  height: 270px;

  padding: 36px;

  h4 {
    font-size: 18px;
    color: ${({ theme }) => theme.colorMainText};
  }
`;

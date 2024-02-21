import styled from 'styled-components';

export const BottomContentContainer = styled.div`
  box-sizing: border-box;

  width: calc(100vw - 380px);
  height: 190px;

  padding: 0 36px 18px 36px;

  h4 {
    font-size: 14px;
    color: ${({ theme }) => theme.colorMainText};
  }
`;

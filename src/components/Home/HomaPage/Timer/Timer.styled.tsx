import styled from 'styled-components';

export const TimerBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 18px;

  h3 {
    font-size: 24px;
    color: ${({ theme }) => theme.colorMainText};
  }
`;

export const TimerBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h4 {
    font-size: 28px;
  }

  p {
    font-size: 14px;
  }

  color: ${({ theme }) => theme.colorMainText};
`;

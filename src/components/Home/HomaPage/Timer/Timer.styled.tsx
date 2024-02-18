import styled from 'styled-components';

export const TimerBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 28px;

  h3 {
    font-size: 36px;
  }
`;

export const TimerBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h4 {
    font-size: 36px;
  }

  p {
    font-size: 18px;
  }

  color: ${({ theme }) => theme.colorMainText};
`;

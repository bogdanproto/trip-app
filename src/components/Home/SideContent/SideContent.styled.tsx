import styled from 'styled-components';

export const SideContentContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 96px;

  min-width: 520px;
  height: 100vh;
  background-image: url('https://res.cloudinary.com/dcwqo29q0/image/upload/v1708183758/samples/trip/wallpaper.jpg');
  background-size: cover;
  background-position: center;

  p {
    font-size: 18px;
    color: ${({ theme }) => theme.colorMainText};
  }
`;

export const ForecastTodayBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;

  color: ${({ theme }) => theme.colorMainText};

  h2 {
    font-size: 36px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 96px;
    }
    p {
      font-size: 64px;
    }
  }

  h3 {
    font-size: 32px;
    font-weight: lighter;
  }
`;

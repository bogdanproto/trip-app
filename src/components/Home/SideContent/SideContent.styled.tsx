import styled from 'styled-components';

export const SideContentContainer = styled.aside`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 96px;

  padding: 24px;

  min-width: 380px;
  height: 100vh;
  background-image: url('https://res.cloudinary.com/dcwqo29q0/image/upload/v1708183758/samples/trip/wallpaper.jpg');
  background-size: cover;
  background-position: center;

  p {
    font-size: 24px;
    color: ${({ theme }) => theme.colorMainText};
  }

  h3 {
    font-size: 28px;
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
    font-size: 28px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 64px;
    }

    p {
      position: relative;
      font-size: 38px;
    }

    p::before {
      content: '°C';
      position: absolute;

      right: -24px;
      top: -4px;

      font-size: 18px;
    }
  }

  h3 {
    font-size: 28px;
    font-weight: lighter;
  }
`;

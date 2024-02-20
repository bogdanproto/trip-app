import styled from 'styled-components';

export const TripListContainer = styled.ul`
  display: flex;

  justify-content: flex-start;
  align-items: center;
  align-content: start;
  flex-wrap: wrap;
  gap: 16px;

  height: calc(100vh - 360px);
  overflow-y: auto;

  padding-right: 8px;

  li {
    max-width: 100%;
  }

  @media (min-width: 768px) {
    li {
      max-width: calc((100% - 16px) / 2);
    }
  }

  @media (min-width: 1158px) {
    li {
      max-width: calc((100% - 48px) / 4);
    }
  }

  @media (min-width: 1400px) {
    li {
      max-width: calc((100% - 80px) / 6);
    }
  }

  @media (min-width: 1600px) {
    li {
      max-width: calc((100% - 102px) / 8);
    }
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colorMainText};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colorMainText};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colorMainText};
  }
`;

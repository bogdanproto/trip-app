import styled from 'styled-components';

export const TripListContainer = styled.ul`
  display: flex;

  justify-content: flex-start;
  align-items: center;
  align-content: start;
  flex-wrap: wrap;
  gap: 16px;

  height: calc(100vh - 410px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colorCardBcg};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colorCardBcg};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colorCardBcg};
  }

  li {
    flex-basis: calc((100% - 96px) / 8);

    display: flex;
    justify-content: center;
  }
`;

import styled from 'styled-components';

export const ForecastListContainer = styled.ul`
  display: flex;
  gap: 18px;

  margin-top: 18px;
  padding-bottom: 16px;

  overflow-x: auto;
  white-space: nowrap;

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
`;

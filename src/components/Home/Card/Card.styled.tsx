import styled from 'styled-components';

interface CardContainerProps {
  $isActive: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  min-width: 148px;

  background-color: ${({ theme }) => theme.colorCardBcg};
  border-radius: 8px;
  border: 2px solid
    ${({ $isActive, theme }) => ($isActive ? theme.colorActive : 'transparent')};

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  transition: all ${({ theme }) => theme.cubicTransition};

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colorActive};
  }

  img {
    width: 100%;
    height: auto;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  div {
    padding: 8px;
  }

  p {
    font-size: 12px;
    line-height: 2;
  }
`;

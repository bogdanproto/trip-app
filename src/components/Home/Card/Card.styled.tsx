import styled from 'styled-components';

export const CardContainer = styled.div`
  min-width: 148px;

  background-color: ${({ theme }) => theme.colorCardBcg};
  border-radius: 8px;
  border: 2px solid transparent;
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

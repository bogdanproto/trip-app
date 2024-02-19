import styled from 'styled-components';

export const FormAddTripContainer = styled.div`
  width: 280px;
  h4 {
  }
`;

export const FormActionElement = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  padding-top: 24px;

  border-top: 1px solid ${({ theme }) => theme.colorCardBcg};
`;

export const ButtonFormBox = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;

  width: 100%;

  padding-top: 8px;

  border-top: 1px solid ${({ theme }) => theme.colorCardBcg};
`;

export const FieldContainer = styled.div`
  width: 100%;
`;

import React from 'react';
import { TimerBlockStyled } from './Timer.styled';

interface TimerBlockProps {
  value: number;
  type: string;
}

export const TimerBlock: React.FC<TimerBlockProps> = React.memo(
  ({ value, type }) => {
    return (
      <TimerBlockStyled>
        <h4>{String(value).padStart(2, '0')}</h4>
        <p>{type.toUpperCase()}</p>
      </TimerBlockStyled>
    );
  }
);

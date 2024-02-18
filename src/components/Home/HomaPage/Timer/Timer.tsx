import { useEffect, useState } from 'react';
import { formatTimer } from 'services/helpers';
import { TimerBox } from './Timer.styled';
import { TimerBlock } from './TimerBlock';

interface TimerProps {
  restTime: number;
}

export const Timer: React.FC<TimerProps> = ({ restTime }) => {
  const [time, setTime] = useState(restTime);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(prevTime => prevTime - 1000);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setTime(restTime);
  }, [restTime]);

  const { days, hours, minutes, seconds } = formatTimer(time);

  return (
    <TimerBox>
      {days > 0 ? (
        <>
          <TimerBlock value={days} type={'days'} />
          <TimerBlock value={hours} type={'hours'} />
          <TimerBlock value={minutes} type={'minutes'} />
          <TimerBlock value={seconds} type={'seconds'} />
        </>
      ) : (
        <h3>Have a nice holiday</h3>
      )}
    </TimerBox>
  );
};

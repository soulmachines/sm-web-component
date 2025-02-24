import React, { useState, useEffect } from 'react';
import { useSoulMachines } from '../../../../contexts/SoulMachinesContext';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { IconButton, Theme } from '../../../../components/IconButton';
import 'react-circular-progressbar/dist/styles.css';

export type CircularTimeOutIndicatorProps = {
  duration?: number; // default is 30 seconds
};

export function CircularTimeOutIndicator({ duration = 0 }: CircularTimeOutIndicatorProps) {
  const { disconnect } = useSoulMachines();

  const [secondsLeft, setSecondsLeft] = useState<number>(duration);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [title, setTitle] = useState<string>('Close video');

  useEffect(() => {
    let timer: any;

    if (isRunning && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prevSeconds) => prevSeconds - 1);
        setTitle(`Close video (${secondsLeft}s left)`);
      }, 1000);
    }

    if (secondsLeft === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, secondsLeft]);

  const percentage = ((duration - secondsLeft) / duration) * 100;

  return (
    <div className="sm-flex sm-h-full sm-items-center sm-justify-center sm-text-primary-base">
      <div style={{ width: '70px', textAlign: 'center' }}>
        {duration > 0 && (
          <CircularProgressbarWithChildren
            value={percentage}
            styles={buildStyles({
              pathColor: '#C3B1E1',
              trailColor: '#FF0000',
            })}
          >
            <IconButton onClick={disconnect} name="hangUp" title={title} theme={Theme.danger} />
          </CircularProgressbarWithChildren>
        )}
        {duration == 0 && (
          <IconButton onClick={disconnect} name="hangUp" title={title} theme={Theme.danger} />
        )}
      </div>
    </div>
  );
}

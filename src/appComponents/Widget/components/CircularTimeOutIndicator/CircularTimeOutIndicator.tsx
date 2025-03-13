import React, { useState, useEffect } from 'react';
import { useSoulMachines } from '../../../../contexts/SoulMachinesContext';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { IconButton, Theme } from '../../../../components/IconButton';
import 'react-circular-progressbar/dist/styles.css';

export type CircularTimeOutIndicatorProps = {
  duration?: number; // default is 0 seconds
  delay?: number; // default is 0 seconds
};

export function CircularTimeOutIndicator({
  duration = 0,
  delay = 0,
}: CircularTimeOutIndicatorProps) {
  const { disconnect } = useSoulMachines();

  const [secondsLeft, setSecondsLeft] = useState<number>(Number(duration) + Number(delay));
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [title, setTitle] = useState<string>('Close video');

  useEffect(() => {
    let timer: any;

    if (isRunning && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prevSeconds) => prevSeconds - 1);
  useEffect(() => {
      if (secondsLeft === 0) {
        setIsRunning(false);
      }
        if (delay && duration) {
          setTitle(`Close video (${secondsLeft}s left)`);
        } else {
          setTitle(`Close video`);
        }
   }, [delay, duration, secondsLeft]);
        //console.log(`Close video (${secondsLeft}s left)`);
      }, 1000);
    }

    if (secondsLeft === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, secondsLeft]);

  return (
    <div className="sm-flex sm-h-full sm-items-center sm-justify-center sm-text-primary-base">
      <div style={{ width: '70px', textAlign: 'center' }}>
        {secondsLeft <= duration && (
          <CircularProgressbarWithChildren
            value={(duration - secondsLeft) / duration) * 100}
            styles={buildStyles({
              pathColor: '#EE3C59',
              trailColor: '#FFFFFF' + '33', //0.33 opacity
            })}
            
          >
            <IconButton onClick={disconnect} name="hangUp" title={title} theme={Theme.danger} />
          </CircularProgressbarWithChildren>
        )}
        {secondsLeft > duration && (
          <CircularProgressbarWithChildren
            value={0}
            styles={buildStyles({
              pathColor: 'transparent',
              trailColor: 'transparent',
            })}
          >
            <IconButton onClick={disconnect} name="hangUp" title={title} theme={Theme.danger} />
          </CircularProgressbarWithChildren>
        )}
      </div>
    </div>
  );
}

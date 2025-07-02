'use client';
import { FC, useState, useEffect } from 'react';
import moment from 'moment-timezone';

interface LiveClockProps {
  timeZone: string;
  city?: string;
}

const LiveClock: FC<LiveClockProps> = ({ timeZone, city }) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const currentTime = moment().tz(timeZone).format('h:mm A z');
      setTime(currentTime);
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone]);
  return (
    <div className="gap-[0.5vw] text-3xl text-secondary-foreground font-semibold">
      {time ? (
        <div className="flex items-center text-secondary-foreground font-semibold gap-[0.5vw]">
          <span>{city}</span>
          <span>{time}</span>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default LiveClock;

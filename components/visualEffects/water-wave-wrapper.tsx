'use client';
import { FC, ReactNode } from 'react';
import WaterWave from 'react-water-wave';

interface WaterWaveWrapperProps {
  imageUrl: string;
  dropRadius: string;
  perturbance: string;
  resoultion: string;
  children: () => ReactNode;
}

const WaterWaveWrapper: FC<WaterWaveWrapperProps> = ({
  imageUrl,
  dropRadius,
  perturbance,
  resoultion,
  children,
}) => {
  return (
    <WaterWave
      imageUrl={imageUrl}
      dropRadius={dropRadius}
      perturbance={perturbance}
      resoultion={resoultion}
    >
      {children}
    </WaterWave>
  );
};

export default WaterWaveWrapper;

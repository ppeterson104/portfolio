'use client';

import dynamic from 'next/dynamic';

export const WaterWaveWrapper = dynamic(
  () => import('./visualEffects/water-wave-wrapper').then((mod) => mod.default),
  {
    ssr: false,
  }
);

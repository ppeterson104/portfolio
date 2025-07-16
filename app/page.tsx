'use client';
import LandingSection from '@/sections/landing';
import Featured from '@/sections/featured';
import AboutSection from '@/sections/about';
import Contact from '@/sections/contact';
import dynamic from 'next/dynamic';

const WaterWaveWrapper = dynamic(
  () => import('@/components/visualEffects/water-wave-wrapper'),
  { ssr: false }
);

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="5"
      resoultion="2048"
    >
      {() => (
        <div className="pb-8">
          <LandingSection />
          <Featured />
          <AboutSection />
          <Contact />
        </div>
      )}
    </WaterWaveWrapper>
  );
}

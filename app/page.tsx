'use client';
import { WaterWaveWrapper } from '@/components/browser-component';
import LandingSection from '@/sections/landing';
import Featured from '@/sections/featured';
import AboutSection from '@/sections/about';
import Contact from '@/sections/contact';

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
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

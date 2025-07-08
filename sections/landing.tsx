import Header from '@/components/navigation/header/header';
import FancyButton from '@/components/ui/fancybutton';
import LiveClock from '@/components/ui/liveclock';
import ScrollDown from '@/components/ui/scroll-down';
import MagneticWrapper from '@/components/visualEffects/magnetic-wrapper';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

export default function LandingSection() {
  return (
    <div className="relative h-screen overflow-y-hidden p-8">
      <Header />
      <div className="absolute bottom-36 left-10 z-20 md:hidden">
        <MagneticWrapper>
          <FancyButton text="Contact me" icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>
      {/*Live Clock*/}
      <div className="absolute right-10 bottom-10">
        <LiveClock timeZone="America/New_York" city="Atlanta" />
      </div>
      {/*Hero Section*/}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 leading-[14vw] lg:leading-[10vw] 2xl:leading-[9rem] font-medium h-[40rem] tracking-[-0.3rem]">
        <div className="flex flex-col justify-center items-center text-primary-foreground text-[18vw] lg:text-[14vw] 2xl:text-[12rem]">
          <div>
            <span>CODE</span>
          </div>
          <div>
            <span>CRAFTING</span>
          </div>
          <div className="relative">
            <span>BRILLIANCE</span>
            <div className="text-[1rem] leading-[1.4rem] tracking-[-0.07rem] absolute top-[16vw] lg:top-[12vw] 2xl:top-[10rem] left-0 2xl:left-[25rem] w-[30rem] uppercase font-normal">
              <span>Here is a bunch of text that says stuff</span>
              <br />
              <span>More text is here</span>
              <br />
              <span>And don't forget here</span>
            </div>
          </div>
        </div>
        {/*Magnetic Scroll*/}
        <MagneticWrapper className="absolute left-1/2 -translate-x-1/2 bottom-[8rem] md:bottom-[4rem] 2xl:-bottom-10">
          <ScrollDown />
        </MagneticWrapper>
      </div>
    </div>
  );
}

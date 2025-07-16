import Header from '@/components/navigation/header/header';
import FancyButton from '@/components/ui/fancybutton';
import LiveClock from '@/components/ui/liveclock';
import ScrollDown from '@/components/ui/scroll-down';
import MagneticWrapper from '@/components/visualEffects/magnetic-wrapper';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

export default function LandingSection() {
  return (
    <div className="flex flex-col h-screen overflow-y-hidden p-8">
      <Header />
      {/*Hero Section*/}
      <div className="mt-8 leading-[16vw] md:leading-[12vw] lg:leading-[10vw] 2xl:leading-[9rem] font-medium tracking-[-0.3rem]">
        <div className="flex flex-col justify-center items-center text-primary-foreground text-[18vw] md:text-[16vw] lg:text-[14vw] 2xl:text-[12rem]">
          <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center text-left max-lg:text-center w-full">
              <span className="">GENUINE</span>

              <span className="">DESIGN</span>

              <span className="">SWAGGER</span>
            </div>
            <div className="text-[1.3rem] lg:text-[1.45rem] 2xl:text-[1.75rem] leading-[1.8rem] tracking-[-0.07rem] uppercase font-normal mt-[1.5rem] max-sm:text-center max-sm:text-[1rem] max-sm:leading-[1.1rem]">
              <span>Converting caffeine into code</span>
              <br />
              <span>With a side of wit</span>
              <br />
              <span>And a pinch of sarcasm</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 mt-10 items-center md:text-center h-full justify-evenly">
        <div className="z-20 md:hidden">
          <MagneticWrapper>
            <FancyButton
              url="#contact"
              text="Contact me"
              icon={<FaArrowRight />}
            />
          </MagneticWrapper>
        </div>
        <div>
          {/*Magnetic Scroll*/}
          <MagneticWrapper className="">
            <ScrollDown />
          </MagneticWrapper>
        </div>
      </div>
      {/*Live Clock*/}
      <div className="flex flex-col flex-1">
        <div className="mt-auto ml-auto">
          <LiveClock timeZone="America/New_York" city="Atlanta" />
        </div>
      </div>
    </div>
  );
}

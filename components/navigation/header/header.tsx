import Profile from '@/components/ui/profile';
import React, { useEffect, useState } from 'react';
import MyImage from '@/public/assets/images/Pete.png';
import FancyButton from '@/components/ui/fancybutton';
import { FaArrowRight } from 'react-icons/fa6';
import MagneticWrapper from '@/components/visualEffects/magnetic-wrapper';
import FullScreenMenu from './full-screen-menu/full-screen-menu';
import ToggleButton from './full-screen-menu/toggle-button';
import { AnimatePresence } from 'framer-motion';

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [showToggle, setShowToggle] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowToggle(true);
      } else {
        setShowToggle(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="w-full flex items-center justify-center md:justify-between">
      <Profile name="Pete Peterson" src={MyImage} />
      <div className="hidden md:inline">
        <MagneticWrapper>
          <FancyButton
            url="#contact"
            text="Contact me"
            icon={<FaArrowRight />}
          />
        </MagneticWrapper>
      </div>
      {(showToggle || open) && <ToggleButton open={open} setOpen={setOpen} />}
      <AnimatePresence mode="wait">
        {open && <FullScreenMenu />}
      </AnimatePresence>
    </div>
  );
}

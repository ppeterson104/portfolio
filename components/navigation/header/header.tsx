import Profile from '@/components/ui/profile';
import React from 'react';
import MyImage from '@/public/assets/images/Pete.png';
import FancyButton from '@/components/ui/fancybutton';
import { FaArrowRight } from 'react-icons/fa6';

export default function Header() {
  return (
    <div className="w-full flex items-center justify-center md:justify-between">
      <Profile name="Pete Peterson" src={MyImage} />
      <div className="hidden md:inline">
        <FancyButton text="Contact me" icon={<FaArrowRight />} />
      </div>
    </div>
  );
}

import { HeadingAnimatedSvg } from '@/components/heading/heading-animated-svg';
import Link from 'next/link';
import React from 'react';

export default function MenuCard() {
  return (
    <div className="w-full h-auto min-h-[427px] gap-[70px] bg-blue-joust rounded-[10px] flex-col flex relative items-start overflow-hidden pt-10 px-[25px] pb-5 shadow-md">
      <div className="w-full flex relative justify-between items-center">
        <div className="uppercase font-bold text-2xl text-white">
          Who is Pete?
        </div>
        <HeadingAnimatedSvg animated text="Learn more about me" />
      </div>
      <div className="z-40 w-full flex flex-col gap-y-[5px] justify-center items-start relative">
        {myLinks.map((link, i) => (
          <Link
            key={i}
            href={link.link}
            className="text-green-benzol uppercase text-[52px] font-bold leading-[85%] transition-colors duration-75 hover:text-white"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

const myLinks = [{ link: '/', name: 'test' }];

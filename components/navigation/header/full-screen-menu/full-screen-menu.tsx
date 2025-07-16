import React from 'react';
import { motion } from 'framer-motion';
import { menuSlide } from './animation';
import Profile from '@/components/ui/profile';
import profilePic from '@/public/assets/images/Pete.png';
import NavLink from './nav-link';
import Link from 'next/link';

export default function FullScreenMenu() {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen w-full fixed top-0 right-0 text-primary-foreground z-40 font-oswald backdrop-blur-2xl backdrop-opacity-85 bg-black/80"
    >
      <div className="relative w-full pl-[5%]">
        <div className="absolute top-8">
          <Profile name="Pete Peterson" src={profilePic} />
        </div>
      </div>
      <div className="absolute top-60 w-full lg:px-[5%]">
        <div
          className="grid relative"
          style={{ gridTemplateColumns: '1fr 500px' }}
        >
          <div className="pl-4 flex flex-col justify-end">
            {navItems.map((item, index) => (
              <NavLink key={index} data={{ ...item, index }} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-[95%] pl-[5%] absolute bottom-8">
        <div className="flex flex-wrap items-center justify-between uppercase text-white gap-2.5">
          <div className="flex items-center gap-4">
            <Link
              className="hover:bg-blue-joust transition-colors duration-200  p-1.5 cursor-pointer border border-white rounded-[8px]"
              href="/"
            >
              Legal Notice
            </Link>
            <Link
              className="hover:bg-green-benzol transition-colors duration-200 p-1.5 cursor-pointer border border-white rounded-[8px]"
              href="/"
            >
              404
            </Link>
            <Link
              className="hover:bg-blue-joust transition-colors duration-200 p-1.5 cursor-pointer border border-white rounded-[8px]"
              href="/"
            >
              Legal Jargon
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              className="hover:bg-blue-joust transition-colors duration-200  p-1.5 cursor-pointer border border-white rounded-[8px]"
              href="https://www.linkedin.com/in/ppeterson82/"
              target="_blank"
            >
              LINKEDIN
            </Link>
            <Link
              className="hover:bg-green-benzol transition-colors duration-200  p-1.5 cursor-pointer border border-white rounded-[8px]"
              href="https://github.com/ppeterson104"
              target="_blank"
            >
              Github
            </Link>
            <Link
              className="hover:bg-blue-joust hover:backdrop-blur-sm transition-colors duration-200  p-1.5 cursor-pointer border border-white rounded-[8px]"
              href="https://learning.servicenow.com/lxp/en/pages/nl-public-resume?id=nl_public&user=pthomaspet045604"
              target="_blank"
            >
              ServiceNow
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              className="hover:bg-blue-joust transition-colors duration-200  p-1.5 cursor-pointer border border-white rounded-[8px]"
              href="/"
            >
              Buzzword defender
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Featured',
    href: '/#featured',
  },
  {
    title: 'About',
    href: '/#about',
  },
  {
    title: 'Projects',
    href: '/#projects',
  },
  {
    title: 'Contact',
    href: '/#contact',
  },
];

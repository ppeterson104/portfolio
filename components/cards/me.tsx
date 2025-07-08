import React from 'react';
import Card from '../ui/card';
import Image from 'next/image';
import MyImg from '@/public/assets/images/gallery/family_beach.jpg';
import { cn } from '@/lib/utils';

export default function MeCard() {
  return (
    <Card className="2xl:h-full">
      <div className="w-full h-[400px] 2xl:h-[calc(100vh-558px)] lg:h-[600px] md:h-[500px] sm:h-[500px] overflow-hidden">
        <Image
          src={MyImg}
          alt="Pete Peterson and Family"
          className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover"
        />
        <div className="absolute top-[10%] right-[40%] max-sm:right-[36%] max-sm:text-[1vh] space-y-2">
          <Tag text="My Crew" className="rounded-3xl" />
        </div>
        <div className="absolute top-[65%] space-y-2">
          <Tag text="Hello there!" className="rounded-2xl" />
          <Tag text="I'm Pete Peterson" className="rounded-2xl" />
          <Tag text="Full Stack Developer" className="rounded-2xl" />
          <Tag text="ServiceNow™ Professional" className="rounded-2xl" />
        </div>
      </div>
    </Card>
  );
}

const Tag = ({ text, className }: { text: string; className: string }) => {
  return (
    <div className={cn('bg-black/[0.7] w-fit py-1.5 px-3', className)}>
      <p className="text-primary-foreground leading-[110%] font-bold">{text}</p>
    </div>
  );
};

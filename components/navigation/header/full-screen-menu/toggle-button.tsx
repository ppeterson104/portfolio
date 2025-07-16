import { cn } from '@/lib/utils';
import React from 'react';
import { FaX } from 'react-icons/fa6';

export default function ToggleButton({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: any;
}) {
  return (
    <button
      onClick={() => setOpen((prev: any) => !prev)}
      className="fixed right-4 top-5 m-5 z-50 w-20 h-20 rounded-full backdrop-blur-md bg-[#323E56] opacity-80  cursor-pointer overflow-hidden"
    >
      <div className="relative flex items-center justify-center">
        <div className="flex flex-col gap-y-2 w-[30px] transform transition-all duration-300 origin-center overflow-hidden">
          <div
            className={cn(
              'bg-white h-[2px] w-7 transform transition-all duration-300 origin-left opacity-100',
              { 'translate-x-10 opacity-0': open }
            )}
          ></div>
          <div className="absolute right-0 left-0">
            <div
              className={cn(
                'flex items-center justify-center transition-all duration-300 translate-x-12 font-semibold text-2xl opacity-0',
                {
                  'translate-x-0 opacity-100': open,
                }
              )}
            >
              <FaX className="text-white" />
            </div>
          </div>
          <div
            className={cn(
              'bg-white h-[2px] w-7 rounded transform transition-all duration-300 delay-75 opacity-100',
              { 'translate-x-10 opacity-0': open }
            )}
          ></div>

          <div
            className={cn(
              'bg-white h-[2px] w-3 rounded transform transition-all duration-300 delay-100 opacity-100',
              { 'translate-x-10 opacity-0': open }
            )}
          ></div>
        </div>
      </div>
    </button>
  );
}

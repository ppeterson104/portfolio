import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  link?: string;
  isIcon?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  link,
  isIcon = false,
  className,
}) => {
  return (
    <>
      {link ? (
        <Link href={link} target="_blank" className="w-auto h-full">
          <ButtonBody className={className} isIcon={isIcon}>
            {children}
          </ButtonBody>
        </Link>
      ) : (
        <ButtonBody className={className} isIcon={isIcon}>
          {children}
        </ButtonBody>
      )}
    </>
  );
};

interface ButtonBodyProps {
  children: ReactNode;
  isIcon?: boolean;
  className?: string;
}

const ButtonBody: FC<ButtonBodyProps> = ({
  children,
  isIcon = false,
  className,
}) => {
  return (
    <div className="flex-none w-auto h-full">
      <div
        className={cn(
          'flex items-center justify-center gap-2 bg-secondary-background text-primary-foreground text-sm font-medium rounded-2xl cursor-pointer whitespace-nowrap button-hover transition-colors duration-1000',
          className,
          isIcon ? 'h-10 w-10' : 'h-full w-max px-3 py-2'
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Button;

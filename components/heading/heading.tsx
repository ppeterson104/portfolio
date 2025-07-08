import { FC } from 'react';
import { IconType } from 'react-icons';

interface HeadingProps {
  number: string;
  title_1: string;
  title_2: string;
  icon?: IconType;
}

const Heading: FC<HeadingProps> = ({
  number,
  title_1,
  title_2,
  icon: Icon,
}) => {
  return (
    <div className="relative my-10 px-8 z-20">
      {/* Number */}
      <div className="outline-none flex flex-col justify-start shrink-0 opacity-5 -top-32 2xl:-top-24 w-[71px] flex-none h-auto left-4 lg:left-12 absolute whitespace-pre">
        <h2 className="font-pixel text-[180px] text-center text-primary-border">
          <span className="bg-clip-text text-transparent p-4 bottom_fade font-pixel">
            {number}
          </span>
        </h2>
      </div>
      <div className="flex flex-nowrap items-center min-h-min overflow-hidden p-0 w-full font-oswald">
        <p className="text-[17vw] lg:text-[12vw] sm:text-[11vw] max-sm:text-[11vw] leading-[100%] text-primary-foreground mr-3">
          {title_1}
        </p>
        <span className="text-primary-foreground text-[6vw] flex flex-col justify-center align-middle">
          {Icon && <Icon />}
        </span>
        <p className="text-[17vw] lg:text-[12vw] sm:text-[11vw] max-sm:text-[11vw] leading-[100%] text-primary-foreground italic">
          {title_2}
        </p>
      </div>
      <hr className="w-full text-2xl text-primary-foreground opacity-30" />
    </div>
  );
};

export default Heading;

import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

interface TimelineProps {
  children: ReactNode;
}

export const Timeline: FC<TimelineProps> = ({ children }) => {
  return <div className="flex flex-col gap-y-6">{children}</div>;
};

interface TimeLineItemProps {
  date: string;
  title: string;
  subtitle: string;
  link?: string;
  tag?: string;
  isCourse?: boolean;
}

export const TimeLineItem: FC<TimeLineItemProps> = ({
  date,
  title,
  subtitle,
  link,
  tag,
  isCourse,
}) => {
  return (
    <div className="flex flex-wrap gap-6 md:gap-12 lg:gap-18 xl:gap-24   min-h justify-start relative">
      <div
        className="h-auto flex-none break-words whitespace-pre"
        style={{ width: `${isCourse ? 'translateX(-45px)' : ''}` }}
      >
        <p className="text-secondary-foreground">{date}</p>
      </div>
      <div
        className="flex gap-x-6 md:gap-x-3"
        style={{
          transform: `${isCourse}` ? '' : '',
        }}
      >
        <div className="flex flex-col gap-0.5">
          <div className="text-primary-foreground break-words whitespace-pre">
            <p className="leading-6 font-medium text-sm">{title}</p>
          </div>
          <div className="flex items-center gap-2 w-auto text-white/50">
            {link ? (
              <Link href={link} target="_blank" className="cursor-pointer">
                <Body link={link} subtitle={subtitle} tag={tag} />{' '}
              </Link>
            ) : (
              subtitle
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface BodyProps {
  subtitle: string;
  tag?: string;
  link: string;
}

const Body: FC<BodyProps> = ({ subtitle, tag, link }) => {
  return (
    <div className="text-secondary-foreground flex items-center">
      <p className="font-normal text-white/50 leading-6 mt-1">{subtitle}</p>
      {link ? <FiArrowUpRight /> : null}
      {tag ? (
        <div className="ms-2 rounded-[20px] bg-white/5 py-0.5 px-1.5">
          <p className="font-normal text-white/50">{tag}</p>
        </div>
      ) : null}
    </div>
  );
};

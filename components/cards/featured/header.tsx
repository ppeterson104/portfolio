import { FC } from 'react';

interface HeaderProps {
  title: string;
  tag: string;
}

const Header: FC<HeaderProps> = ({ title, tag }) => {
  return (
    <div className="flex flex-none flex-nowrap relative p-6 w-full items-center justify-between border border-primary-border bg-primary-background rounded-2xl">
      <div>
        <p className="text-lg font-semibold leading-3 text-primary-foreground">
          {title}
        </p>
      </div>
      <div>
        <p className="text-sm font-semibold leading-3 text-primary-foreground"></p>
      </div>
      <div>
        <p className="text-lg font-medium leading-3 text-secondary-foreground font-pixel">
          {tag}
        </p>
      </div>
    </div>
  );
};

export default Header;

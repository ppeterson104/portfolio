import { ReactNode, FC } from 'react';
import Header from './header';
import Video from './video';
import { cn } from '@/lib/utils';

interface FeaturedCardProps {
  logo?: ReactNode;
  title: string;
  tag: string;
  video: string;
  active: boolean;
  className?: string;
}

const FeaturedCard: FC<FeaturedCardProps> = ({
  logo,
  title,
  tag,
  video,
  active,
  className,
}) => {
  return (
    <div
      className={cn(
        'link w-full h-full bg-secondary-background border border-primary-border shadow-lg rounded-3xl cursor-pointer flex flex-col gap-4 flex-nowrap p-2'
      )}
    >
      <Header title={title} tag={tag} />
      {/*Body*/}
      <div
        className={cn(
          'relative flex float-none flex-nowrap items-center justify-center border border-primary-border rounded-3xl',
          className
        )}
      >
        <Video video={video} active={active} />
      </div>
    </div>
  );
};

export default FeaturedCard;

import { ReactNode, FC } from 'react';
import Header from './header';
import Video from './video';

interface FeaturedCardProps {
  logo?: ReactNode;
  title: string;
  tag: string;
  video: string;
  active: boolean;
}

const FeaturedCard: FC<FeaturedCardProps> = ({
  logo,
  title,
  tag,
  video,
  active,
}) => {
  return (
    <div className="link w-full h-full bg-secondary-background border border-primary-border shadow-lg rounded-3xl cursor-pointer flex flex-col gap-4 flex-nowrap p-2">
      <Header title={title} tag={tag} />
      {/*Body*/}
      <div className="relative flex float-none flex-nowrap items-center justify-center h-[550px] border border-primary-border rounded-3xl">
        <Video video={video} active={active} />
      </div>
    </div>
  );
};

export default FeaturedCard;

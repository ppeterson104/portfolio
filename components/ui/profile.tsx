import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface ProfileProps {
  name: string;
  src: StaticImageData;
  altText?: string;
}

const Profile: FC<ProfileProps> = ({ name, src, altText = '' }) => {
  return (
    <div className="flex items-center gap-x-2 transition-colors duration-75 text-primary-foreground">
      <div className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center bg-gradient-to-r from-blue-joust to-green-benzol">
        <Image
          src={src}
          alt={altText}
          className="w-[95px] h-[95px] border-[0.2vw] border-blue-cosmos rounded-full object-cover"
        />
        <div className="w-3 h-3 bg-green-benzol rounded-full border border-blue-cosmos absolute right-0 bottom-5"></div>
      </div>
      <div className="text-3xl font-medium uppercase">{name}</div>
    </div>
  );
};

export default Profile;

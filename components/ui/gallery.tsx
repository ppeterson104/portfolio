import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { galleryImages } from '@/data';
import Image from 'next/image';

export default function Gallery() {
  return (
    <div className="h-[500px] sm:h-[650px] md:h-[60vh] 2xl:h-[850px] w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="mySwiper rounded-2xl"
      >
        {galleryImages.map((img) => (
          <SwiperSlide key={img.id}>
            <Image
              src={img.img}
              alt=""
              quality={100}
              className="object-fill object-left-top w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

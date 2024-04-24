'use client';

import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function ProductImages() {
  const [selectedImage, setSelectedImage] = useState<string>(
    '/images/product-1.png',
  );
  const PRODUCT_IMAGES_FAKER = [
    '/images/product-1.png',
    '/images/product-2.png',
    '/images/tourism.png',
    '/images/hero3.jpeg',
    '/images/news1.jpeg',
  ];
  return (
    <div className="flex w-full flex-col gap-3 lg:w-[400px]">
      <div className=" relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-white">
        <Image
          src={selectedImage}
          fill
          alt=""
          className=" object-cover object-center"
        />
      </div>
      <div className=" h-fit">
        <Swiper
          slidesPerView={3}
          spaceBetween={12}
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Navigation]}
          className="mySwiper"
        >
          {PRODUCT_IMAGES_FAKER.map((image, i) => (
            <SwiperSlide key={i}>
              <div
                className={cn(
                  ' relative aspect-[4/3] w-full overflow-hidden rounded-lg',
                  { 'border-2 border-primary-base': selectedImage === image },
                )}
              >
                <Image
                  onMouseEnter={() => setSelectedImage(image)}
                  src={image}
                  fill
                  alt="product-2"
                  className=" object-cover object-center"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

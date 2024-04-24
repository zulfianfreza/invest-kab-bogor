'use client';

import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Contact from '@/components/layout/contact';

export default function HomePage() {
  return (
    <>
      {/* begin: hero section */}
      <div className=" relative h-[660px] w-full">
        <Swiper
          direction="vertical"
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className=" h-[660px] w-full"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={500}
        >
          <SwiperSlide className=" bg-[url('/images/hero1.jpeg')] bg-cover bg-center brightness-75"></SwiperSlide>
          <SwiperSlide className=" bg-[url('/images/hero2.jpeg')] bg-cover bg-center brightness-75"></SwiperSlide>
          <SwiperSlide className=" bg-[url('/images/hero3.jpeg')] bg-cover bg-center brightness-75"></SwiperSlide>
        </Swiper>
        <div className=" absolute top-0 z-[20] flex h-[660px] w-full items-center">
          <div className="container mx-auto flex flex-col">
            <h1 className=" text-[24px] font-medium text-white lg:text-[32px]">
              Investment in Kab. Bogor <br /> #KabBogorLevelUp with Sectors,
              <br />
              Commodities and UMKM
            </h1>
            <p className=" mt-4 text-base font-semibold text-white lg:text-[22px]">
              Manage Funds and Develop Business Integratedly in Kab. Bogor
            </p>
          </div>
        </div>
      </div>
      {/* end: hero section */}

      {/* begin: investment section */}
      <div className=" container mx-auto my-[120px]">
        <div className=" grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col items-start gap-10">
            <h1 className=" text-[32px] font-medium text-neutral-800">
              Kab. Bogor Has What It Takes For Your Business Needs
            </h1>
            <Button className=" h-14 rounded-[10px] bg-primary-base px-6">
              Investment in Kab. Bogor
            </Button>
          </div>
          <div className=" relative order-first aspect-[31/18] w-full overflow-hidden rounded-[14px] md:order-last">
            <Image
              src="/images/hero2.jpeg"
              fill
              className=" object-fill object-center"
              alt="investment in kab. bogor"
            />
          </div>
        </div>
      </div>
      {/* end: investment section */}

      {/* begin: sector section */}
      <div className="container mx-auto">
        <h1 className=" text-[32px] font-medium text-neutral-800">
          Kab. Bogor&apos;s Leading Sectors That You Can Invest In
        </h1>
        <div className=" mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div
              className=" flex flex-col gap-6 rounded-lg bg-white p-6 pb-8"
              key={i}
            >
              <div className="flex flex-col gap-2">
                <h1 className=" text-2xl font-semibold text-neutral-800">
                  Tourism
                </h1>
                <div className=" h-[2px] w-12 bg-primary-base" />
              </div>
              <div className=" relative aspect-[2/1] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/tourism.png"
                  fill
                  alt="tourism"
                  className=" object-cover object-center"
                />
              </div>
              <div className=" w-full rounded-md border border-dashed border-primary-base p-2">
                <h1 className=" text-lg font-semibold text-primary-base">
                  Rp. 254,11 Billion
                </h1>
                <p className=" text-[13px] text-neutral-500">
                  Total Investment Value
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className=" mt-12 flex justify-center">
          <Button asChild>
            <Link href="/sector">Discover More</Link>
          </Button>
        </div>
      </div>
      {/* end: sector section */}

      {/* begin: news section */}
      <div className=" container mx-auto w-full py-[120px]">
        <h1 className=" text-[32px] font-medium text-neutral-800">
          Kab. Bogor Latest News
        </h1>
        <div className=" mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className=" overflow-hidden rounded-lg bg-white"
            >
              <div className=" relative aspect-[3/2] w-full overflow-hidden">
                <Image
                  src="/images/news1.jpeg"
                  fill
                  alt="news-1"
                  className=" object-cover object-center"
                />
              </div>
              <div className=" px-3 py-4">
                <p className=" font-semibold text-neutral-800">
                  Get ready! BISKITA Service Coming Soon to Depok and Kab. Bogor
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className=" mt-12 flex justify-center">
          <Button asChild>
            <Link href="/news">Discover More</Link>
          </Button>
        </div>
      </div>
      {/* end: news section */}

      <Contact />
    </>
  );
}

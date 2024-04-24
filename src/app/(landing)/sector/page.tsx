'use client';

import BasePagination from '@/components/common/base-pagination';
import Contact from '@/components/layout/contact';
import { Input } from '@/components/ui/input';
import { swiperBreakpoints } from '@/constants/common.constant';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type TSectorPage = {
  searchParams: {
    page: string | undefined;
  };
};

export default function SectorPage({ searchParams: _ }: TSectorPage) {
  return (
    <>
      <div className=" relative h-[360px] w-full overflow-hidden">
        <Image
          src="/images/sector-banner.jpeg"
          fill
          alt=""
          className=" object-cover object-center"
        />
      </div>

      <div className=" container mx-auto my-[60px] lg:my-[120px]">
        <h1 className=" text-[32px] font-medium text-neutral-800">
          Kab. Bogor Sectors that You Can Invest in
        </h1>
        <p className=" text-lg font-bold text-neutral-800">
          Kab. Bogor Has What It Takes For Your Business Needs
        </p>
        <div className=" mt-12 w-full">
          <Swiper
            slidesPerView={7}
            breakpoints={swiperBreakpoints}
            pagination={{
              clickable: true,
            }}
            navigation
            modules={[Navigation]}
            className="mySwiper"
          >
            {[...Array(7)].map((_, i) => (
              <SwiperSlide key={i}>
                <div className=" rounded-lg bg-white p-6">
                  <div className="flex flex-col items-center gap-5">
                    <svg
                      width="38"
                      height="32"
                      viewBox="0 0 38 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M37.2786 3.01144C28.4563 8.1882 29.0882 18.8212 22.9068 23.6192C18.2546 27.2304 11.6905 25.4015 7.89505 23.8481C7.89505 23.8481 5.32287 27.0947 3.47779 31.4229C2.86006 32.875 0.148131 31.275 0.624086 30.0456C6.65554 14.4809 27.1763 6.71578 27.1763 6.71578C27.1763 6.71578 12.6971 6.10211 3.02006 18.7463C2.76082 15.8582 2.33144 8.0444 9.82519 3.25246C19.9843 -3.2509 39.3384 1.80434 37.2786 3.01144Z"
                        fill="#009A4B"
                      />
                    </svg>
                    <h1 className=" font-semibold text-neutral-800">
                      Agro Industry
                    </h1>
                    <p className=" text-neutral-500">14 Projects</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className=" my-12 flex justify-end">
          <div className=" relative">
            <svg
              className=" absolute left-4 top-3"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6665 14.6665H15.6132L15.2399 14.3065C16.8399 12.4399 17.6665 9.89319 17.2132 7.18652C16.5865 3.47986 13.4932 0.519858 9.75986 0.0665242C4.11986 -0.626809 -0.626809 4.11986 0.0665242 9.75986C0.519858 13.4932 3.47986 16.5865 7.18652 17.2132C9.89319 17.6665 12.4399 16.8399 14.3065 15.2399L14.6665 15.6132V16.6665L20.3332 22.3332C20.8799 22.8799 21.7732 22.8799 22.3199 22.3332C22.8665 21.7865 22.8665 20.8932 22.3199 20.3465L16.6665 14.6665ZM8.66652 14.6665C5.34652 14.6665 2.66652 11.9865 2.66652 8.66652C2.66652 5.34652 5.34652 2.66652 8.66652 2.66652C11.9865 2.66652 14.6665 5.34652 14.6665 8.66652C14.6665 11.9865 11.9865 14.6665 8.66652 14.6665Z"
                fill="#009A4B"
              />
            </svg>
            <Input
              className=" h-12 w-[400px] pl-12"
              placeholder="Search"
            />
          </div>
        </div>

        <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(9)].map((_, i) => (
            <Link
              href="/sector/1"
              className=" flex flex-col gap-6 rounded-lg bg-white p-6"
              key={i}
            >
              <h1 className=" text-lg font-semibold text-neutral-800">
                Development of Geopark Nasional Pongkor
              </h1>
              <div className=" relative aspect-[2/1] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/tourism.png"
                  fill
                  alt=""
                  className=" object-cover object-center"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className=" col-span-2 rounded-md border border-dashed p-2">
                  <h1 className=" text-[15px] font-semibold text-neutral-800">
                    Kab. Bogor Government
                  </h1>
                  <p className=" text-[13px] text-neutral-500">Project Owner</p>
                </div>
                <div className=" col-span-2 rounded-md border border-dashed p-2">
                  <h1 className=" text-[15px] font-semibold text-neutral-800">
                    15 Sub-Districts in Kab. Bogor
                  </h1>
                  <p className=" text-[13px] text-neutral-500">Location</p>
                </div>
                <div className=" rounded-md border border-dashed p-2">
                  <h1 className=" text-[15px] font-semibold text-neutral-800">
                    Rp. 254,11 Billion
                  </h1>
                  <p className=" text-[13px] text-neutral-500">
                    Investment Value
                  </p>
                </div>
                <div className=" rounded-md border border-dashed p-2">
                  <h1 className=" text-[15px] font-semibold text-neutral-800">
                    Tourism
                  </h1>
                  <p className=" text-[13px] text-neutral-500">Sector</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className=" mt-12 flex justify-center">
          <Suspense>
            <BasePagination totalCount={31} />
          </Suspense>
        </div>
      </div>

      <Contact />
    </>
  );
}

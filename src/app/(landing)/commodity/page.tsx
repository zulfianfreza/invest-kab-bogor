'use client';

import BasePagination from '@/components/common/base-pagination';
import Contact from '@/components/layout/contact';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React, { Suspense } from 'react';

export default function CommodityPage() {
  return (
    <>
      <div className=" relative h-[360px] w-full overflow-hidden">
        <Image
          src="/images/commodity-banner.png"
          fill
          alt=""
          className=" object-cover object-center"
        />
      </div>

      <div className=" container mx-auto my-[60px] lg:my-[120px]">
        <h1 className=" text-[32px] font-medium text-neutral-800">
          Kab. Bogor Commodities that You Can Invest in
        </h1>
        <p className=" text-lg font-bold text-neutral-800">
          Kab. Bogor Has What It Takes For Your Business Needs
        </p>

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

        <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div
              className=" flex flex-col gap-6 rounded-lg bg-white p-6"
              key={i}
            >
              <h1 className=" text-lg font-semibold text-neutral-800">
                Mangosteen
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
                    240
                  </h1>
                  <p className=" text-[13px] text-neutral-500">
                    Plantation Area (Thousand Ha)
                  </p>
                </div>
                <div className=" col-span-2 rounded-md border border-dashed p-2">
                  <h1 className=" text-[15px] font-semibold text-neutral-800">
                    50.5
                  </h1>
                  <p className=" text-[13px] text-neutral-500">
                    Production (Thousand Ton/Year)
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" mt-12 flex justify-center">
          <Suspense>
            <BasePagination totalCount={107} />
          </Suspense>
        </div>
      </div>

      <Contact />
    </>
  );
}

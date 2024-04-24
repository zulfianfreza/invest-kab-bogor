'use client';

import BasePagination from '@/components/common/base-pagination';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, Suspense } from 'react';

const NEWS_LENGTH = 5;

type TNewsPage = {
  searchParams: {
    page: string | undefined;
  };
};

export default function NewsPage({ searchParams: _ }: TNewsPage) {
  return (
    <>
      <div className=" relative h-[360px] w-full overflow-hidden">
        <Image
          src="/images/news-banner.png"
          fill
          alt=""
          className=" object-cover object-center"
        />
      </div>

      <div className=" mx-auto my-[60px] max-w-[920px] rounded-lg bg-white p-12 shadow-[0_45px_50px_0_#009A4B1A] lg:my-[120px]">
        {[...Array(NEWS_LENGTH)].map((_, i) => (
          <Fragment key={i}>
            <div className="flex flex-col gap-6">
              <h1 className=" text-[32px] font-semibold text-neutral-800">
                Get ready! BISKITA Service Coming Soon to Depok and Kab. Bogor
              </h1>
              <p className=" text-[15px] text-neutral-800">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce
                est. Vivamus a tellus.
              </p>
              <p className=" text-[15px] text-neutral-500">12 Mei 2022</p>
              <Link
                href="/news/1"
                className=" text-[15px] text-primary-base underline"
              >
                Baca Selengkapnya
              </Link>
            </div>
            {i !== NEWS_LENGTH - 1 && (
              <div className=" mx-auto my-12 h-[2px] w-12 bg-primary-base" />
            )}
          </Fragment>
        ))}
        <div className=" mt-12 flex justify-center">
          <Suspense>
            <BasePagination totalCount={31} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

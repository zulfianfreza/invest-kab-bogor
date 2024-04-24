'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import ProductImages from '@/components/umkm/product-images';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

type _TUmkmDetailPageParams = {
  searchParams: {
    tab: string | undefined;
  };
};

export default function UmkmProductDetailPage() {
  return (
    <div className="container mx-auto my-[120px]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/umkm">UMKM</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>PT Daekan Indah Indonesia</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className=" mt-6 flex flex-col gap-10 lg:flex-row">
        <ProductImages />
        <div className="flex w-full flex-1 flex-col gap-9">
          <div className=" flex items-center justify-between">
            <h1 className=" text-4xl font-semibold text-neutral-900">
              Jalan Pintas Coffee
            </h1>
            <Button>Shopping Link</Button>
          </div>
          <div className=" h-16 border-y border-neutral-200">
            <div className="flex gap-12">
              <div
                className={cn(
                  'flex h-16 items-center border-b-2 border-b-transparent',
                  'border-b-primary-base text-primary-base',
                )}
              >
                UMKM Information
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className=" grid grid-cols-12">
              <div className=" col-span-3">
                <p className=" text-lg font-semibold text-neutral-500">Price</p>
              </div>
              <div className=" col-span-8 flex gap-6">
                <p className=" text-lg font-semibold text-neutral-800">:</p>
                <p className=" text-lg font-semibold text-neutral-800">
                  Rp. 20.000 - Rp. 40.000
                </p>
              </div>
            </div>
            <div className=" grid grid-cols-12">
              <div className=" col-span-3">
                <p className=" text-lg font-semibold text-neutral-500">
                  Ingredients
                </p>
              </div>
              <div className=" col-span-8 flex gap-6">
                <p className=" text-lg font-semibold text-neutral-800">:</p>
                <p className=" text-lg font-semibold text-neutral-800">
                  Water, Ice, Coffee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-16">
        <h1 className=" text-lg font-semibold text-neutral-900">
          Another Product
        </h1>
        <div className=" mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div
              className=" flex flex-col gap-6 rounded-lg bg-white p-6"
              key={i}
            >
              <h1 className=" text-lg font-semibold text-neutral-800">
                Jamu Mbok Na
              </h1>
              <div className=" relative aspect-[2/1] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/tourism.png"
                  fill
                  alt=""
                  className=" object-cover object-center"
                />
              </div>

              <div className=" w-full rounded-md border border-dashed p-2">
                <h1 className=" text-[15px] font-semibold text-neutral-800">
                  PT Daekan Indah Indonesia
                </h1>
                <p className=" text-[13px] text-neutral-500">Project Owner</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

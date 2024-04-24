'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type TUmkmDetailPageParams = {
  searchParams: {
    tab: string | undefined;
  };
};

export default function UmkmDetailPage({
  searchParams,
}: TUmkmDetailPageParams) {
  const tab = searchParams.tab || 'information';
  const pathname = usePathname();
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
        <div className="flex justify-center">
          <div className=" relative aspect-[4/3] w-[400px] overflow-hidden rounded-lg bg-white">
            <Image
              src="/images/umkm-detail.png"
              fill
              alt=""
              className=" object-cover object-center"
            />
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col gap-9">
          <h1 className=" text-4xl font-semibold text-neutral-900">
            PT Daekan Indar Indonesia
          </h1>
          <div className=" h-16 border-y border-neutral-200">
            <div className="flex gap-12">
              <div
                className={cn(
                  'flex h-16 items-center border-b-2 border-b-transparent',
                  {
                    'border-b-primary-base text-primary-base':
                      tab === 'information',
                  },
                )}
              >
                <Link href={`${pathname}?tab=information`}>
                  UMKM Information
                </Link>
              </div>
              <div
                className={cn(
                  'flex h-16 items-center border-b-2 border-b-transparent',
                  {
                    ' border-b-primary-base text-primary-base': tab === 'maps',
                  },
                )}
              >
                <Link href={`${pathname}?tab=maps`}>Maps</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className=" grid grid-cols-12">
              <div className=" col-span-3">
                <p className=" text-lg font-semibold text-neutral-500">
                  Alamat UMKM
                </p>
              </div>
              <div className=" col-span-8 flex gap-6">
                <p className=" text-lg font-semibold text-neutral-800">:</p>
                <p className=" text-lg font-semibold text-neutral-800">
                  Jl. Raya Mayor Oking Jaya Atmaja No.7, Cibinong, Kec.
                  Cibinong, Kabupaten Bogor, Jawa Barat 16911
                </p>
              </div>
            </div>
            <div className=" grid grid-cols-12">
              <div className=" col-span-3">
                <p className=" text-lg font-semibold text-neutral-500">
                  Nama Pemilik
                </p>
              </div>
              <div className=" col-span-8 flex gap-6">
                <p className=" text-lg font-semibold text-neutral-800">:</p>
                <p className=" text-lg font-semibold text-neutral-800">
                  Hendrawan
                </p>
              </div>
            </div>
            <div className=" grid grid-cols-12">
              <div className=" col-span-3">
                <p className=" text-lg font-semibold text-neutral-500">
                  Kontak
                </p>
              </div>
              <div className=" col-span-8 flex gap-6">
                <p className=" text-lg font-semibold text-neutral-800">:</p>
                <p className=" text-lg font-semibold text-neutral-800">
                  081213143111
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-16">
        <h1 className=" text-lg font-semibold text-neutral-900">
          UMKM Product
        </h1>
        <div className=" mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Link
              href="/umkm/1/1"
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

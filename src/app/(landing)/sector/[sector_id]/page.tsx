'use client';

import BaseImageLightbox from '@/components/common/base-image-lightbox';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function SectorDetailPage() {
  // Photo Active Index
  const [photoActiveIndex, setPhotoActiveIndex] = React.useState(-1);

  // All photos
  const GALLERY_FAKER = useMemo(
    () => [
      {
        src: '/images/tourism.png',
      },
      {
        src: '/images/product-1.png',
      },
      {
        src: '/images/product-2.png',
      },
      {
        src: '/images/sector-banner.jpeg',
      },
      {
        src: '/images/news1.jpeg',
      },
      {
        src: '/images/hero3.jpeg',
      },
    ],
    [],
  );

  // Product photos
  const photos = useMemo<SlideImage[]>(
    () => GALLERY_FAKER.map((item) => ({ src: item.src })),
    [GALLERY_FAKER],
  );
  return (
    <>
      <div className=" container mx-auto my-[120px]">
        <div className="grid grid-cols-12 gap-10">
          <div className=" col-span-12 lg:col-span-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/sector">Sector</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>MNC Lido Land</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="mt-4 flex flex-col gap-6">
              <div className=" space-y-3">
                <h1 className=" text-4xl font-semibold text-neutral-900">
                  Get ready! BISKITA Service Coming Soon to Depok and Kab. Bogor
                </h1>
                <p className=" text-lg font-semibold text-neutral-900">
                  Rabu, 28 Maret 2024
                </p>
              </div>
              <div className=" relative aspect-[2/1] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/tourism.png"
                  fill
                  alt=""
                  className=" object-cover object-center"
                />
              </div>
              <p>
                JAKARTA - Setelah hadir di Kota Bogor dan Bekasi, Badan
                Pengelola Transportasi Jabodetabek (BPTJ) segera memperluas
                layanan BISKITA ke Kota Depok dan Kabupaten Bogor, Jawa Barat.
                Direktur Angkutan BPTJ Tatan Rustandi menyampaikan bahwa BISKITA
                merupakan program untuk menarik minat masyarakat agar beralih
                menggunakan angkutan umum.
                <br /> <br />
                &quot;BPTJ saat ini telah memiliki layanan BISKITA di Kota Bogor
                dan Bekasi yang memiliki perbedaan dari sisi layanan. Karena
                kami mengedepankan keamanan, kenyamanan dan keselamatan,
                terutama jaminan kepastian waktu. Insya Allah beberapa waktu ke
                depan kami juga akan menghadirkan layanan ini di Kota Depok dan
                Kabupaten Bogor,&quot; kata Rustandi dalam keterangannya, Senin
                (11/3/2024).
                <br /> <br />
                Sementara, Sekretaris BPTJ Marta Hardisarwono menuturkan bahwa
                upaya ini dalam rangka untuk melakukan percepatan untuk
                menurunkan tingkat kemacetan dengan mengajak sebanyak mungkin
                masyarakat untuk melakukan shifting dari kendaraan pribadi (roda
                4 dan roda 2) menggunakan transportasi umum massal.
                <br /> <br />
                Apalagi, kata dia, jumlah pergerakan orang di Jabodetabek saat
                ini menunjukkan data sebesar sebesar 88 juta orang per hari.
                Dengan sekian banyak pergerakan/hari, jika terlalu mengandalkan
                kendaraan pribadi sudah barang tentu menimbulkan permasalahan
                kemacetan.
                <br /> <br />
                &quot;Untuk saat ini BPTJ terus mengembangkan layanan Angkutan
                Jalan Jabodetabek Residence Connexion (JRC) yang bergerak dari
                kawasan permukiman agar semakin banyak masyarakat shifting dari
                kendaraan pribadi (roda 4 dan roda 2). Seperti yang kemarin baru
                kami luncurkan di kawasan Pantai Indah Kapuk (PIK),” ungkap
                Marta.
              </p>
            </div>

            <div className=" mt-6">
              <h1 className="  text-[32px] font-semibold text-neutral-900">
                Gallery
              </h1>
              <div className=" mt-6 grid grid-cols-3 gap-6">
                {GALLERY_FAKER.map((item, i) => (
                  <div
                    key={i}
                    className=" relative aspect-[4/3] w-full overflow-hidden rounded-lg"
                  >
                    <Image
                      src={item.src}
                      fill
                      alt=""
                      className=" object-cover object-center"
                      onClick={() => {
                        setPhotoActiveIndex(i);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className=" col-span-12 lg:col-span-4">
            <div className=" w-full rounded-xl bg-[#DDE5ED] p-5">
              <div className="flex gap-6">
                <div className=" relative aspect-square w-16 overflow-hidden rounded-full">
                  <Image
                    src="/images/avatar-1.png"
                    fill
                    className=" object-cover object-center"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className=" text-lg font-semibold text-neutral-900">
                    Hendrawan
                  </h1>
                  <p className=" text-[15px] text-neutral-900">
                    Investment Propositions Adviser
                  </p>
                </div>
              </div>
              <div className=" mt-3 border-t border-primary-base" />
              <div className=" mt-4 flex justify-between">
                <h1 className=" text-lg font-semibold text-primary-base">
                  Contact the opportunity lead
                </h1>
                <Button
                  size="default"
                  asChild
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className=" mt-12 w-full border-b border-black py-2.5">
              <h1 className=" text-xl font-semibold text-neutral-900">
                Another Sector
              </h1>
            </div>
            <div className=" mt-5 flex flex-col gap-3">
              {[...Array(5)].map((_, i) => (
                <div
                  className=" border-b border-neutral-200 py-4"
                  key={i}
                >
                  <div className="flex items-center gap-2">
                    <div className=" flex aspect-square h-10 items-center justify-center rounded-full bg-success-100 text-sm">
                      {i + 1}
                    </div>
                    <Link
                      href="/news/1"
                      className=" text-lg text-neutral-900"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        styles={{
          container: { backgroundColor: '#000' },
          icon: { color: '#FFF', boxShadow: 'none' },
        }}
        index={photoActiveIndex}
        slides={photos}
        // open
        open={photoActiveIndex >= 0}
        close={() => setPhotoActiveIndex(-1)}
        render={{ slide: BaseImageLightbox }}
      />
    </>
  );
}

'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Image from 'next/image';
import React from 'react';

export default function CommodityDetailPage() {
  return (
    <div className=" container mx-auto my-[60px] lg:my-[120px] lg:max-w-[920px]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/commodity">Commodities</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Mangosteen</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className=" mt-6 rounded-lg bg-white p-12 shadow-[0_45px_50px_0_#009A4B1A]">
        <div className="flex flex-col items-start gap-[30px] lg:flex-row">
          <div className=" relative aspect-[520/326] w-full overflow-hidden rounded-md lg:max-w-[520px]">
            <Image
              src="/images/tourism.png"
              fill
              alt=""
              className=" object-cover object-center"
            />
          </div>
          <div className=" flex w-full flex-1 flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className=" text-2xl font-semibold text-neutral-800">
                Mangosteen
              </h1>
              <div className=" h-[2px] w-12 bg-primary-base" />
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
        </div>
        <div className=" mt-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rerum
            placeat natus quos illum perspiciatis laborum quae dolore ipsam eius
            fugit, voluptates deleniti, ipsa maiores veritatis corporis quis
            minima odio, sequi dolorum reprehenderit. Earum corrupti rerum
            temporibus dolor eligendi ratione. Earum repellendus, molestiae
            molestias laborum enim id autem laudantium quae incidunt unde
            quibusdam voluptates illo totam reiciendis consectetur eum et dolor
            non itaque aliquam eligendi iusto? Cumque adipisci iste illum ut
            quidem, sequi ipsa placeat ullam fuga tempora quod sit dolore dolor
            quisquam aspernatur nisi eveniet hic nemo at eum perspiciatis illo
            doloribus sint doloremque! Quas sunt enim, ex incidunt id, fuga
            aperiam facere harum voluptates quos provident rerum iste veritatis
            laboriosam necessitatibus porro sed expedita laborum temporibus!
            Velit sapiente libero totam iste. Non quod in alias iste a fuga quam
            eum error? Nam quisquam maiores numquam, et sit id perferendis nulla
            libero illum eius consequatur mollitia assumenda vitae ad asperiores
            dolores voluptatem deleniti harum nostrum quasi sequi blanditiis
            tempore corrupti. Accusantium, magni officiis veritatis enim eveniet
            provident, perferendis id, aliquam sint suscipit vitae officia eum
            eaque ullam totam voluptates delectus quos voluptatem nihil minus
            blanditiis similique non. Iste adipisci nam itaque sed molestiae
            facere dolore, officia modi quia animi laborum dolores, quas iure
            sit error praesentium ex officiis nulla ullam obcaecati
            voluptatibus? Quas laudantium, ex a tempore ab, illum voluptate, aut
            impedit dolorum vel eos suscipit! Minus odit possimus molestias
            saepe, doloribus repellat id a consequatur vitae labore hic
            exercitationem aliquam veritatis eos officia beatae ipsum aspernatur
            deserunt non ipsa, cum ullam eius. Enim, culpa.
          </p>
        </div>
      </div>
    </div>
  );
}

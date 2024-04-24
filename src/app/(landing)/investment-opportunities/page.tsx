import Contact from '@/components/layout/contact';
import Image from 'next/image';

export default function InvestmentOpportunitiesPage() {
  const INVEST_FAKER = [
    {
      title: 'Human Development Index',
      image: '/images/invest-1.png',
    },
    {
      title: 'Education',
      image: '/images/invest-2.png',
    },
    {
      title: 'Transportation',
      image: '/images/invest-3.png',
    },
    {
      title: 'Sport Facilities',
      image: '/images/invest-4.png',
    },
  ];
  return (
    <>
      <div className=" relative h-[360px] w-full overflow-hidden">
        <Image
          src="/images/invest-banner.png"
          fill
          alt=""
          className=" object-cover object-center"
        />
      </div>

      <div className=" container mx-auto my-[60px] lg:my-[120px]">
        <div className=" grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col gap-2">
              <h1 className=" text-[48px] font-medium text-neutral-800">
                Kab. Bogor Has What It Takes For Your Business Needs
              </h1>
              <div className=" h-[2px] w-12 bg-primary-base" />
            </div>
            <p className=" text-lg text-neutral-800">
              <span className=" text-primary-base">Kab. Bogor</span> - City Of
              Sport and Tourism is the City Branding of Kab. Bogor as an
              important part of Smart City implementation. The Kab. Bogor
              Government has designated &quot;City Of Sport and Tourism&quot; as
              the work program of Bogor Regent Ade Yasin and Bogor Deputy Regent
              Iwan Setiawan in the 2018-2023 Regional Medium Term Development
              Plan (RPJMD).
            </p>
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

        <div className=" my-12 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className=" text-[48px] font-medium text-neutral-800">
              Kab. Bogor Has What It Takes For Your Business Needs
            </h1>
            <div className=" h-[2px] w-12 bg-primary-base" />
          </div>
          <p>
            Kab. Bogor consists of 40 sub-districts, which are divided into a
            number of villages and sub-districts. The administrative center of
            Bogor Regency is located in Cibinong District, which is to the north
            of Bogor City. Bogor Regency has several series of high and large
            mountains or mountain ranges, including in the western part the
            Halimun Salak Mountains which stretch from Lebak Regency, Banten to
            the eastern foot of Mount Salak. Then, two mountains enclose the
            Puncak Area to the south, namely the Gede Pangrango Mountains which
            stretch across three areas of Bogor Regency, Cianjur Regency and
            Sukabumi Regency, to the north of Puncak, there are the Jonggol
            Mountains which stretch from Sentul, Sukamakmur to Cipanas, Cianjur.
            Apart from that, there are several small mountains that are usually
            barren and consist of limestone, including the Cigudeg-Rumpin
            Mountains, the Leuwiliang Limestone Mountains, the Cileungsi
            Limestone Mountains and the Sanggabuana Mountains, which border the
            Karawang Regency and Purwakarta Regency.
          </p>
        </div>
        <div className=" grid grid-cols-1 gap-[30px] lg:grid-cols-2">
          {INVEST_FAKER.map((invest, i) => (
            <div
              key={i}
              className=" flex w-full flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <h1 className=" text-[48px] font-medium text-neutral-800">
                  {invest.title}
                </h1>
                <div className=" h-[2px] w-12 bg-primary-base" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras
                adipiscing enim eu turpis egestas pretium. Fames ac turpis
                egestas integer eget aliquet nibh praesent tristique. Nisl
                suscipit adipiscing bibendum est ultricies integer.
              </p>
              <div className=" relative aspect-[31/18] w-full overflow-hidden rounded-lg">
                <Image
                  src={invest.image}
                  fill
                  alt=""
                  className=" object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Contact />
    </>
  );
}

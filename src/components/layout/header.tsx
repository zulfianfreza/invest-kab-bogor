'use client';

import { MENUS } from '@/constants/common.constant';
import { cn } from '@/lib/utils';
import useHeaderStore from '@/store/header.store';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const { toggle } = useHeaderStore();
  return (
    <div className=" sticky top-0 z-[24] h-20 w-full bg-white">
      <div className=" container mx-auto flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div className=" relative h-11 w-9">
            <Image
              src="/images/logo.png"
              fill
              alt="logo"
              className=" object-contain object-center"
            />
          </div>
          <p className=" text-lg font-semibold">Kab. Bogor</p>
        </Link>

        <div className=" flex items-center gap-9">
          <div className="hidden items-center gap-6 lg:flex">
            {MENUS.map((menu, i) => (
              <Link
                key={i}
                href={menu.path}
                className={cn(' text-lg text-neutral-800', {
                  'text-primary-base':
                    menu.path === '/'
                      ? menu.path === pathname
                      : pathname.startsWith(menu.path),
                })}
              >
                {menu.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <p className=" text-lg font-bold text-neutral-800">ID</p>
            <div className=" h-5 w-[2px] bg-neutral-800" />
            <p className=" text-lg font-bold text-primary-base">EN</p>
          </div>
          <button
            className=" block text-neutral-800 lg:hidden"
            onClick={toggle}
          >
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 12H17C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM1 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

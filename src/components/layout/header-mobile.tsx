'use client';

import { MENUS } from '@/constants/common.constant';
import { cn } from '@/lib/utils';
import useHeaderStore from '@/store/header.store';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent } from '../ui/sheet';

export default function HeaderMobile() {
  const pathname = usePathname();
  const { isOpen, toggle } = useHeaderStore();
  return (
    <Sheet
      open={isOpen}
      onOpenChange={toggle}
    >
      <SheetContent className="flex items-center">
        <div className="flex flex-col gap-4">
          {MENUS.map((menu) => (
            <Link
              key={menu.path}
              href={menu.path}
              onClick={toggle}
              className={cn(' text-xl text-neutral-800', {
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
      </SheetContent>
    </Sheet>
  );
}

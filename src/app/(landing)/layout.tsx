'use client';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import HeaderMobile from '@/components/layout/header-mobile';
import useWindowSize from '@/hooks/use-window-size';
import useHeaderStore from '@/store/header.store';
import { useEffect } from 'react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { width } = useWindowSize();
  const { onClose } = useHeaderStore();
  useEffect(() => {
    if (width > 1024) {
      onClose();
    }
  }, [width, onClose]);

  return (
    <div className=" min-h-screen w-full bg-slate-100">
      <Header />
      <HeaderMobile />
      {children}
      <Footer />
    </div>
  );
}

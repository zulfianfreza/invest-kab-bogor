import { SwiperOptions } from 'swiper/types';

export const MENUS = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Sector',
    path: '/sector',
  },
  {
    label: 'UMKM',
    path: '/umkm',
  },
  {
    label: 'Investment Opportunities',
    path: '/investment-opportunities',
  },
];

export const swiperBreakpoints: SwiperOptions['breakpoints'] = {
  0: {
    slidesPerView: 2,
    spaceBetween: 12,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 16,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 16,
  },
  1200: {
    slidesPerView: 7,
    spaceBetween: 16,
  },
};

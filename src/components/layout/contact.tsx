'use client';

import Link from 'next/link';
import { Button } from '../ui/button';

export default function Contact() {
  return (
    <div className=" w-full bg-primary-base py-[120px]">
      <div className=" container mx-auto">
        <div className="flex flex-col items-start">
          <h1 className=" text-4xl font-semibold text-white">Contact Us</h1>
          <p className=" mt-5 text-2xl font-semibold text-white">
            Kab. Bogor Government opens opportunities for investors to invest in
            new projects. Investors interested in the project can find out more
            by contacting us.
          </p>
          <div className=" mt-10">
            <Button
              variant="warning"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

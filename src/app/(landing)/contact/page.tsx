'use client';

import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useCallback } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useRouter } from 'next/navigation';

const contactSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  phoneNumber: yup.string().required(),
  position: yup.string().required(),
  company: yup.string().required(),
});

type TContactSchema = yup.InferType<typeof contactSchema>;

export default function ContactPage() {
  const router = useRouter();
  const form = useForm<TContactSchema>({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: '',
    },
  });

  const actualSubmit: SubmitHandler<TContactSchema> = useCallback(
    (_values) => {},
    [],
  );

  return (
    <>
      <div className=" relative h-[360px] w-full overflow-hidden">
        <Image
          src="/images/contact-banner.png"
          fill
          alt=""
          className=" object-cover object-center"
        />
      </div>

      <div className=" container mx-auto my-[60px] lg:my-[120px] lg:max-w-[920px] ">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Get in Touch</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mt-6 w-full rounded-lg bg-white p-12 shadow-[0_45px_50px_0_#009A4B1A]">
          <div className=" space-y-3">
            <h1 className=" text-4xl font-semibold text-neutral-800">
              Get in Touch
            </h1>
            <p className=" text-lg font-semibold text-neutral-800 ">
              Kab. Bogor Has What It Takes For Your Business Needs
            </p>
          </div>
          <div className=" mt-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(actualSubmit)}>
                <div className="flex flex-col gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter Name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter Email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter Phone Number"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter Position"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter Company"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Country" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[
                              'indonesia',
                              'malaysia',
                              'singapura',
                              'thailand',
                              'philipina',
                            ].map((country) => (
                              <SelectItem
                                key={country}
                                value={country}
                                className=" capitalize"
                              >
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className=" mt-10 flex justify-end gap-2.5">
                  <Button
                    size="default"
                    variant="warning"
                    type="button"
                    onClick={() => {
                      router.back();
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    size="default"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

'use client';

import { DOTS, usePagination } from '@/hooks/use-pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { Button } from '../ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from '../ui/pagination';

type TBasePaginationProps = {
  totalCount: number;
};

export default function BasePagination({ totalCount }: TBasePaginationProps) {
  // search params
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const size = Number(searchParams.get('size')) || 10;

  // count total page
  const TOTAL_PAGE = Math.ceil(totalCount / size);

  // hooks
  const qs = useMemo(() => new URLSearchParams(searchParams), [searchParams]);
  const router = useRouter();
  const pathname = usePathname();
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount: 1,
    pageSize: size,
  });

  /**
   * Handle prev
   */
  const handlePrev = useCallback(() => {
    qs.set('page', (currentPage - 1).toString());

    router.push(`${pathname}?${qs}`);
  }, [qs, currentPage, pathname, router]);

  /**
   * Handle next
   */
  const handleNext = useCallback(() => {
    qs.set('page', (currentPage + 1).toString());
    router.push(`${pathname}?${qs}`);
  }, [qs, currentPage, pathname, router]);

  /**
   * Handle page change
   * @param value
   */
  const handlePageChange = useCallback(
    (value: number) => {
      qs.set('page', value.toString());
      router.push(`${pathname}?${qs}`);
    },
    [qs, pathname, router],
  );

  return (
    <Pagination>
      <PaginationContent className="flex flex-wrap gap-1 lg:gap-2">
        <PaginationItem>
          <Button
            size="icon-sm"
            variant="ghost"
            onClick={handlePrev}
            disabled={currentPage <= 1}
            className=" rounded-sm border border-neutral-900"
          >
            <ChevronLeft size={16} />
          </Button>
        </PaginationItem>
        {paginationRange.map((pageNumber, i) => {
          if (pageNumber === DOTS) {
            return (
              <PaginationItem key={i}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={i}>
              <Button
                size="icon-sm"
                variant={
                  Number(pageNumber) === currentPage
                    ? 'default'
                    : 'ghost-outline'
                }
                className=" rounded-sm"
                onClick={() => handlePageChange(Number(pageNumber))}
              >
                {pageNumber}
              </Button>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <Button
            size="icon-sm"
            variant="ghost"
            onClick={handleNext}
            disabled={currentPage === TOTAL_PAGE}
            className=" rounded-sm border border-neutral-900"
          >
            <ChevronRight size={16} />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

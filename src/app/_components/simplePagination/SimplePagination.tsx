import clsx from "clsx";

const PAGES_TO_SHOW = 3;

const calcPagesArray = (
  currentPage: number,
  startMin: number,
  endMax: number,
  deff: number,
  isMobile: boolean = false
) => {
  const startMax = endMax - 2 * deff;
  const endMin = startMin + 2 * deff;
  const start =
    currentPage - deff < startMin
      ? startMin
      : currentPage - deff > startMax
      ? startMax
      : currentPage - deff;

  const end =
    currentPage + deff > endMax
      ? endMax
      : currentPage + deff < endMin
      ? endMin
      : currentPage + deff;
  const addPreDots = start > startMin;
  const addPostDots = end < endMax;
  const rangeArr = Array.from({ length: end + 1 - start }, (_, i) => start + i);
  if (addPreDots && !isMobile) {
    rangeArr.unshift(-1);
  }
  if (addPostDots && !isMobile) {
    rangeArr.push(-1);
  }

  return rangeArr;
};

const getRangeArr = (
  totalPages: number,
  currentPage: number,
  minPgNo: number,
  maxPgNo: number,
  deff: number,
  isMobile: boolean = false
) =>
  totalPages < PAGES_TO_SHOW
    ? Array.from({ length: totalPages }, (_, ndx) => ndx + 1)
    : isMobile
    ? calcPagesArray(currentPage, minPgNo, maxPgNo, deff, isMobile)
    : // : [1, ...calcPagesArray(currentPage, minPgNo, maxPgNo, deff), totalPages];
      calcPagesArray(currentPage, minPgNo, maxPgNo, deff);

interface SimplePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const SimplePagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: SimplePaginationProps) => {
  const deff = Math.floor(PAGES_TO_SHOW / 2);
  const MIN_PG_NO = 1;
  const MAX_PG_NO = totalPages;
  const MIN_PG_NO_MOB = 1;
  const MAX_PG_NO_MOB = totalPages;
  const rangeArr = getRangeArr(
    totalPages,
    currentPage,
    MIN_PG_NO,
    MAX_PG_NO,
    deff
  );

  const rangeArrMob = getRangeArr(
    totalPages,
    currentPage,
    MIN_PG_NO_MOB,
    MAX_PG_NO_MOB,
    deff,
    true
  );

  const isLastPage = currentPage >= totalPages;
  const isFirstPage = currentPage <= 1;

  return rangeArr?.length > 1 || rangeArrMob?.length > 1 ? (
    <div className="my-6 flex w-full justify-center gap-2">
      <button
        onClick={() => !isFirstPage && onPageChange(currentPage - 1)}
        className="flex w-24 select-none items-center justify-center rounded-lg border border-gray-300 px-3
               py-1 hover:border-none hover:bg-main hover:text-white disabled:pointer-events-none disabled:cursor-progress disabled:bg-main/5"
        disabled={isFirstPage}
      >
        Previous
      </button>
      <div className="hidden justify-center md:flex md:gap-1">
        {rangeArr?.map((pgNo) =>
          pgNo > 0 ? (
            <button
              key={pgNo}
              className={clsx([
                "flex h-8 w-8 select-none items-center justify-center rounded-xl text-xs",
                currentPage === pgNo
                  ? "bg-main text-white"
                  : "hover:bg-main hover:text-white",
              ])}
              onClick={() => onPageChange(pgNo)}
            >
              {pgNo}
            </button>
          ) : (
            <div
              className={`flex h-8 w-8 select-none items-center justify-center text-sm `}
              key={Math.random()}
            >
              ...
            </div>
          )
        )}
      </div>
      <div className=" flex justify-center gap-1 md:hidden">
        {rangeArrMob?.map((pgNo) =>
          pgNo > 0 ? (
            <button
              key={pgNo}
              className={clsx([
                "flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-xs",
                currentPage === pgNo
                  ? "bg-main text-white"
                  : "hover:bg-main hover:text-white",
              ])}
              onClick={() => onPageChange(pgNo)}
            >
              {pgNo}
            </button>
          ) : (
            <div
              className={`flex h-8 w-8 items-center justify-center text-sm `}
              key={Math.random()}
            >
              ...
            </div>
          )
        )}
      </div>
      <button
        onClick={() => !isLastPage && onPageChange(currentPage + 1)}
        className={`flex w-24 select-none items-center justify-center rounded-lg border border-gray-300 px-3
         py-1 hover:border-none hover:bg-main hover:text-white disabled:pointer-events-none disabled:bg-main/5`}
        disabled={isLastPage}
      >
        Next
      </button>
    </div>
  ) : null;
};

/* eslint-disable import/no-unused-modules */
export default SimplePagination;

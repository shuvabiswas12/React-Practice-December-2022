export interface IPagination {
    pageNumber: number;
    totalTruck: number;
    currentPage: number;
    onPageChangeHandler: (pageNo: number) => any;
}

export const getPages = (currentPage: number, pageCount: number) => {
    const pages = Array.from({ length: pageCount }, (_, i) => i + 1)

    if (currentPage === 1 || currentPage <  3) {
        return pages.slice(1, 5);
    } else if (currentPage >= pageCount - 2) {
        return pages.slice(pageCount - 5, pageCount - 1);
    } else if (currentPage === pageCount - 3) {
        return pages.slice(pageCount - 6, pageCount - 1);
    }
    return pages.slice(currentPage - 2, currentPage + 3);
};
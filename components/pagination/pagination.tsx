
import {FC} from "react";
import styles from "@/components/pagination/styles.module.scss"
import cn from 'classnames'
import {getPages} from "@/utils/get-pages";

type Props = {
    currentPage: number
    handleChangePage: (page: number) => void
    paginationLimit: number
    totalCount: number
}

export const Pagination: FC<Props> = ({currentPage, handleChangePage, paginationLimit, totalCount}) => {

    const pageCount = Math.ceil(totalCount/paginationLimit)

    const pages = getPages(currentPage, pageCount)

    const showEllipsisBefore = currentPage > 2;
    const showEllipsisAfter = currentPage < pageCount - 2;

    return (
        <div>
            <button className={cn(styles.button, {[styles.isActive]: currentPage === 1})} onClick={() => handleChangePage(1)}>{1}</button>
            {showEllipsisBefore && <span>... </span>}
            {
                pages.map((page) => (
                    <button className={cn(styles.button, {[styles.isActive]: currentPage === page})} onClick={() => handleChangePage(page)} key={page}>{page}</button>
                ))
            }
            {showEllipsisAfter && <span>... </span>}
            <button className={cn(styles.button, {[styles.isActive]: currentPage === pageCount})} onClick={() => handleChangePage(pageCount)}>{pageCount}</button>
        </div>
    );
};

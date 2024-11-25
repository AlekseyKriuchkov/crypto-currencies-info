
import {FC} from "react";
import styles from "@/components/pagination/styles.module.scss"
import cn from 'classnames'

type Props = {
    currentPage: number
    handleChangePage: (offset: number) => void
    paginationLimit: number
    totalCount: number
}

export const Pagination: FC<Props> = ({currentPage, handleChangePage, paginationLimit, totalCount}) => {

    const pageCount = Math.ceil(totalCount/paginationLimit)
    const pages = currentPage === 1 ?
        Array.from({ length: pageCount }, (_, i) => i + 1).slice(currentPage - 1, currentPage + 4)
        :
        currentPage >= pageCount -3 ?
            Array.from({ length: pageCount }, (_, i) => i + 1).slice(pageCount - 5, pageCount)
            :
            Array.from({ length: pageCount }, (_, i) => i + 1).slice(currentPage - 2, currentPage + 3)

    return (
        <div>
            {currentPage > 2 && <button className={cn(styles.button, {[styles.isActive]: currentPage === 1})} onClick={() => handleChangePage(1)}>{1}</button>}
            {currentPage > 2 && <span>... </span>}
            {
                pages.map((option) => (
                    <button className={cn(styles.button, {[styles.isActive]: currentPage === option})} onClick={() => handleChangePage(option)} key={option}>{option}</button>
                ))
            }
            {currentPage !== pageCount && <span>... </span>}
            {currentPage !== pageCount && <button className={styles.button} onClick={() => handleChangePage(pageCount)}>{pageCount}</button>}
        </div>
    );
};

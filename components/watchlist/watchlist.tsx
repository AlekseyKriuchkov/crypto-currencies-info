"use client"

import styles from '@/app/(root)/styles.module.scss'
import {CoinsResponse} from "@/types/types";
import {FC, useEffect, useState} from "react";
import useSWR, {SWRResponse} from "swr";
import {localStorageGet, LocalStorageKeys, localStorageSet} from "@/utils/local-storage";
import {Pagination} from "@/components/pagination/pagination";
import {Select} from "@/components/select/select";
import {WatchListTable} from "@/components/watch-list-table/watch-list-table";
import {baseFetcher} from "@/app/api/baseFetcher";

type Props = {
    coinsData: CoinsResponse
}

enum TableHeadRows {
    STAR = "",
    SERIALNUMBER = "#",
    NAME = "Name",
    PRICE = "Price",
    VOLUME24H = "Volume (24H)"
}

export const Watchlist: FC<Props> = ({coinsData}) => {

    const [favoriteCoins, setFavoriteCoins] = useState<Set<string> | null>(null)
    const [paginationOffset, setPaginationOffset] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [paginationLimit, setPaginationLimit] = useState(10)

    const tableHeadRows = [TableHeadRows.STAR,  TableHeadRows.SERIALNUMBER, TableHeadRows.NAME, TableHeadRows.PRICE, TableHeadRows.VOLUME24H]
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    const optionValues = [10, 20, 30]

    const {data: limitedCoinsData}: SWRResponse<CoinsResponse> = useSWR(`currencies${apiKey}&limit=${paginationLimit}&offset=${paginationOffset}`,
        () => baseFetcher("GET", "currencies/",{limit: paginationLimit, offset: paginationOffset}), {fallbackData: coinsData, keepPreviousData: true,})

    const handleChangeFavoriteCoins = (favoriteCoin: string) => { //Унести логику по фаворите коин в хук
        if (favoriteCoins?.has(favoriteCoin)) {
            favoriteCoins?.delete(favoriteCoin)
            const updatedFavorites: Set<string> = new Set([...Array.from(favoriteCoins || [])])
            setFavoriteCoins(new Set([...Array.from(updatedFavorites)]))
            localStorageSet(LocalStorageKeys.FAVORITE_COINS, JSON.stringify(Array.from(updatedFavorites)))
        } else {
            const updatedFavorites: Set<string> = new Set([...Array.from(favoriteCoins || []), favoriteCoin])
            setFavoriteCoins(updatedFavorites)
            localStorageSet(LocalStorageKeys.FAVORITE_COINS, JSON.stringify(Array.from(updatedFavorites)))
        }
    }

    const handleChangeSelect = (value: number) => {
        setPaginationLimit(value)
    }

    const handleChangePage = (currentPage: number) => {
        setPaginationOffset(paginationLimit * currentPage - paginationLimit)
        setCurrentPage(currentPage)
    }

    useEffect(() => {
        const favorites = localStorageGet(LocalStorageKeys.FAVORITE_COINS)
        if (favorites) {
            const updatedFavorites: Set<string> = new Set(JSON.parse(favorites))
            setFavoriteCoins(updatedFavorites)
        }
    }, [])

    return (
        <div>
            <WatchListTable paginationOffset={paginationOffset} tableHeadRows={tableHeadRows}
                            limitedCoinsData={limitedCoinsData?.data || []} favoriteCoins={favoriteCoins}
                            handleChangeFavoriteCoins={handleChangeFavoriteCoins}/>
            <div className={styles.paginationWrapper}>
                <Pagination totalCount={coinsData.meta.count} paginationLimit={paginationLimit}
                            currentPage={currentPage} handleChangePage={handleChangePage}/>
                <Select optionValues={optionValues} changeSelect={handleChangeSelect}/>
            </div>
        </div>
    );
};

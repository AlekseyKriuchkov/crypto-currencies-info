import React, {FC} from 'react';
import styles from "@/app/(root)/styles.module.scss";
import Star from "@/assets/star.svg";
import cn from "classnames";
import {Coin} from "@/types/types";

type Props = {
    tableHeadRows: string[]
    limitedCoinsData: Coin[]
    favoriteCoins: Set<string> | null
    handleChangeFavoriteCoins: (slug: string) => void
    paginationOffset: number
}

export const WatchListTable: FC<Props> = ({paginationOffset, tableHeadRows, limitedCoinsData, favoriteCoins, handleChangeFavoriteCoins}) => {
    return (
        <div>
            <div className={styles.wrapper}>
                <table className={styles.table}>
                    <thead className={styles.tableHead}>
                    <tr>
                        {tableHeadRows.map(( value, index) => (
                            <th key={index}>{value}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {limitedCoinsData.map((coin, index) => (
                        <tr onClick={() => handleChangeFavoriteCoins(coin.slug)} key={index} className={styles.tableRow}>
                            <td><Star className={cn(styles.image, {[styles.isActive]: favoriteCoins?.has(coin.slug)})}/></td>
                            <td>{paginationOffset + index + 1}</td>
                            <td>{coin.name} {coin.symbol}</td>
                            <td>$ {coin.values.USD.price.toFixed(2)}</td>
                            <td>{coin.volume24hBase}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

import React from 'react';
import Link from "next/link";
import style from "./styles.module.scss"

export const Header = () => {
    return (
        <div className={style.headerWrapper}>
            <Link href={"/converter"}>
                <button className={style.button}>Converter</button>
            </Link>
             <Link href={"/"}>
                <button className={style.button}>Watchlist</button>
            </Link>
        </div>
    );
};

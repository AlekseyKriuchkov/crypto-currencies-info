"use client"

import React, {ChangeEvent, FC, ReactNode, useState} from 'react';
import styles from "@/components/selector-with-search/styles.module.scss"
import {SlArrowDown} from "react-icons/sl";
import cn from 'classnames'
import {useClickOutside} from "@/hooks/use-click-outside";

export type OptionType = {
    text: ReactNode,
    value: string,
    searchValue: string,
}

type Props = {
    options: OptionType[]
    onSelectorChange: (option: OptionType) => void
    coinName: string
    active: string
}

export const SelectorWithSearch: FC<Props> = ({active, coinName, options,onSelectorChange}) => {
    const [isOpened, setIsOpened] = useState(false)
    const [searchedCoin, setSearchedCoin] = useState("")

    const selectCurrencyHandler = (option: OptionType ) => {
        setIsOpened(false)
        onSelectorChange(option)
        setSearchedCoin('')
    }

    const searchCoinHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchedCoin(event.target.value)
    }

    const handleClickOutside = () => {
        setIsOpened(false)
        setSearchedCoin('')
    }

    const filteredOptions =  options.filter((coin) =>
        coin.searchValue.toLowerCase().includes(searchedCoin.toLowerCase()))

    const currentOptions = searchedCoin ?  filteredOptions : options

    const searchBlockRef = useClickOutside<HTMLDivElement>(handleClickOutside)

    return (
        <div ref={searchBlockRef}>
            <div className={styles.inputBlockWrapper}>
                {isOpened ? <input autoFocus={isOpened} className={styles.input} onChange={searchCoinHandler} placeholder="Asset name or Ticker"/> : <span className={styles.coin}>{coinName}</span>}
                <span onClick={()=>setIsOpened(!isOpened)}><SlArrowDown style={{color: "black", cursor: "pointer"}} /></span>
            </div>
            {isOpened && <div className={styles.wrapper}>
                <ul>
                    {currentOptions.map((option) => (
                        <li key={option.searchValue} className={cn(styles.list, {[styles.isActive]: option.value === active})} onClick={() => selectCurrencyHandler(option)}>
                            {option.text}
                        </li>
                    ))}
                </ul>
            </div>}
        </div>

    );
};
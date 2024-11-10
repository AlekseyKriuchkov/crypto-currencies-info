"use client"

import {FC, useState} from 'react';
import styles from "./styles.module.scss"
import {
    ConverterCalculatorChangeButton
} from "@/components/converter-calculator-change-button/converter-calculator-change-button";
import {
    ConverterCalculatorBlock,
} from "@/components/converter-calculator-block/converter-calculator-block";
import {CoinsMapType} from "@/types/types";
import {OptionType} from "@/components/selector-with-search/selectorWithSearch";

type Props = {
    coinsMap: CoinsMapType
}

const initialFromValue = "bitcoin"
const initialToValue = "usdcoin"

export const ConverterCalculator: FC<Props> = ({coinsMap}) => {
    const [fromCoinSlug, setFromCoinSlug] = useState(initialFromValue)
    const [toCoinSlug, setToCoinSlug] = useState(initialToValue)
    const [coinsAmountInputValue, setCoinsAmountInputValue] = useState(1)


    const fromCoin = coinsMap[fromCoinSlug]
    const toCoin = coinsMap[toCoinSlug]

    const exchangePrice = (fromCoin.price / toCoin.price)
    const reversedExchangePrice = (toCoin.price / fromCoin.price).toFixed(10)

    const  options =Object.values(coinsMap).map(coin =>
            ({
                text: <div className={styles.options}>
                    <div>{coin.name} {coin.symbol}</div>
                    <div>{coin.price}</div>
                </div>,
                searchValue: `${coin.slug} ${coin.symbol}`,
                value: coin.slug
            }))

    const handleFromCoinSlugChange = (option: OptionType) =>{
        setFromCoinSlug(option.value)
    }

    const handleToCoinSlugChange = (option: OptionType) =>{
        setToCoinSlug(option.value)
    }

    return (
        <div className={styles.converterWrapper}>
            <ConverterCalculatorBlock
                options={options}
                onSelectorChange={handleFromCoinSlugChange}
                exchangeTextPrice={`1 ${fromCoin?.symbol} = ${exchangePrice}`}
                inputValue={coinsAmountInputValue}
                setInputValue={setCoinsAmountInputValue}
                coinName={`${fromCoin.name} ${fromCoin.symbol}`}
                active={fromCoin.slug}
            />
            <ConverterCalculatorChangeButton
                fromCoinSlug={fromCoinSlug}
                setFromCoinSlug={setFromCoinSlug}
                toCoinSlug={toCoinSlug}
                setToCoinSlug={setToCoinSlug}
            />
            <ConverterCalculatorBlock
                options={options}
                onSelectorChange={handleToCoinSlugChange}
                exchangeTextPrice={`1 ${toCoin?.symbol} = ${reversedExchangePrice}`}
                inputValue={Number((coinsAmountInputValue * exchangePrice).toFixed(10))}
                setInputValue={setCoinsAmountInputValue}
                coinName={`${toCoin.name} ${toCoin.symbol}`}
                active={toCoin.slug}
                disabled={true}/>
        </div>
    );
};

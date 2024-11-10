import {ChangeEvent, FC} from 'react';
import styles from "@/components/converter-calculator-block/styles.module.scss"
import {SelectorWithSearch, OptionType} from "@/components/selector-with-search/selectorWithSearch";

type Props = {
    inputValue: number
    disabled?: boolean
    setInputValue: (value: number) => void
    exchangeTextPrice: string
    options: OptionType[]
    onSelectorChange: (option: OptionType) => void
    coinName: string
    active: string
}

export const ConverterCalculatorBlock: FC<Props> = ({active, options, coinName, exchangeTextPrice,onSelectorChange, disabled, inputValue, setInputValue}) => {

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(Number(event.target.value))
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.inputBlockWrapper}>
                <input onChange={onInputChange} className={styles.input} disabled={disabled} value={inputValue}/>
                <p className={styles.text}>
                    {exchangeTextPrice}
                </p>
            </div>
            <SelectorWithSearch active={active} coinName={coinName} options={options} onSelectorChange={onSelectorChange}/>
        </div>
    );
};
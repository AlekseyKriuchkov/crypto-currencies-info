import React, {FC} from 'react';
import styles from "@/components/converter-calculator-change-button/styles.module.scss";

type Props = {
    fromCoinSlug: string
    toCoinSlug: string
    setFromCoinSlug: (slug: string) => void
    setToCoinSlug: (slug: string) => void
}

export const ConverterCalculatorChangeButton: FC<Props> = ({fromCoinSlug, setFromCoinSlug, toCoinSlug, setToCoinSlug} ) => {

    const reverseHandler = () => {
        setFromCoinSlug(toCoinSlug)
        setToCoinSlug(fromCoinSlug)
    }

    return (
        <button className={styles.changeButton} onClick={reverseHandler}>
            <svg className={styles.img}>
                <path d="m20.74 9.678-3.6-3.426a.944.944 0 0 0-1.278 0 .84.84 0 0 0-.265.608.84.84 0 0 0 .265.608l2.07 1.962H7.499a.924.924 0 0 0-.636.25.836.836 0 0 0-.264.606c0 .227.095.445.264.606.168.16.397.25.636.25h12.602a.932.932 0 0 0 .499-.146.867.867 0 0 0 .33-.384.818.818 0 0 0 .054-.495.844.844 0 0 0-.244-.44Zm-4.24 3.178H3.899a.932.932 0 0 0-.498.146.867.867 0 0 0-.33.385.818.818 0 0 0-.054.494c.034.166.118.319.243.44l3.6 3.426a.94.94 0 0 0 1.278 0 .855.855 0 0 0 .198-.28.821.821 0 0 0-.197-.937l-2.07-1.961H16.5c.238 0 .467-.09.636-.251a.836.836 0 0 0 .264-.606.836.836 0 0 0-.264-.605.924.924 0 0 0-.636-.251Z" fill="currentColor"></path>
            </svg>
        </button>
    );
};

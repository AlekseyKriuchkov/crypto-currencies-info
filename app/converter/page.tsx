import {getCoinsData} from "@/utils/get-coins-data/get-coins-data";
import {GetCoinsResponse} from "@/types/types";
import {getPriceChange} from "@/utils/get-price-change/get-price-change";
import {ConverterCalculator} from "@/components/converter-calculator/converter-calculator";
import styles from "@/app/converter/styles.module.scss"
import Head from "next/head";

export default async function Converter() {
    const coinsData: GetCoinsResponse = await getCoinsData()
    const changedPrice = getPriceChange(coinsData.data[1].values.USD.price, coinsData.data[1].values.USD.percentChange3m)
    const coinsMap = coinsData.data.reduce((acc, {slug,values,symbol,name}) => {
        return {
            ...acc, [slug]: {
                slug: slug,
                price: values.USD.price,
                name,
                symbol,
            }
        }
    }, {})

    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Converter</title>
                <meta name='description' content='Коля хуй'/>
            </Head>
            <h2>Cryptocurrency Converter Calculator</h2>
            <ConverterCalculator coinsMap={coinsMap}/>
        </div>
    );
};

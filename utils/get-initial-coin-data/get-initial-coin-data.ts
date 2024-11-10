import {CoinsMapType} from "@/types/types";

export const getInitialCoinData = (coinsMap: CoinsMapType,  slug: string) => {
    return {
        price: coinsMap[slug].price,
        coinName: coinsMap[slug].name,
        coinSymbol: coinsMap[slug].symbol,
        slug: coinsMap[slug].slug,
    }
}
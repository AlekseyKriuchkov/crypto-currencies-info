export type Coin = {
    id: number,
    rank: number,
    slug: string,
    name: string,
    symbol: string,
    category: string,
    type: string,
    volume24hBase: number,
    circulatingSupply: number,
    totalSupply: number,
    maxSupply: number,
    values: {
        USD: {
            price: number,
            volume24h: number,
            high24h: number,
            low24h: number,
            marketCap: number,
            percentChange24h: number,
            percentChange7d: number,
            percentChange30d: number,
            percentChange3m: number,
            percentChange6m: number
        }
    },
    lastUpdated: string,
}

export type CoinsResponse = {
    data: Coin [],
    meta: {
        count: number
    },
    status: {
        time: string,
        success: boolean,
        code: number,
        message: string,
        responseTime: number,
        creditsCost: number
    }
}

export type CoinsMapType = {
    [slug: string]: {
        slug: string,
        price: number,
        name: string,
        symbol: string,
        searchValue: string
    }
}
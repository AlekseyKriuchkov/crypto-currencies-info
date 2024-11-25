export const getPriceChange = (price: number, percentChange: number = 0) => {
    return  (price - (price*percentChange/100)).toFixed(2)
}
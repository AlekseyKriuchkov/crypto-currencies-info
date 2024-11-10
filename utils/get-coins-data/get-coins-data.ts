const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
const coinsEndpoint = process.env.NEXT_PUBLIC_GET_COINS_ENDPOINT
const urlForCoinsRequest = `${baseUrl}currencies/${coinsEndpoint}`

export const getCoinsData = async () => {
    try {
        const response = await fetch(urlForCoinsRequest, {
            method: "GET"
        })
        return await response.json()

    } finally {
        console.log("")
    }
}
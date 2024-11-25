const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
const apiKey = process.env.NEXT_PUBLIC_API_KEY
const urlForCoinsRequest = `${baseUrl}currencies/${apiKey}&limit=10&offset=0`

export const getCoins = async (url = urlForCoinsRequest) => {
    try {
        const response = await fetch(url, {
            method: "GET"
        })
        return await response.json()

    } finally {}
}

export const getCars = async (url = urlForCoinsRequest) => {
    try {
        const response = await fetch(url, {
            method: "GET"
        })
        return await response.json()

    } finally {}
}
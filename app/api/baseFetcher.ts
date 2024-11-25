
type Method = "GET" | "POST" | "PUT" | "DELETE"

export async function baseFetcher(method: Method = "GET", endpoint: string, queryParams: Record<string, any> = {}) {

    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}`

    const queryString = new URLSearchParams(queryParams)

    queryString.set("api_key", process.env.NEXT_PUBLIC_API_KEY || '')

    const apiUrl = `${baseUrl}${endpoint}?${queryString.toString()}`

    try {
        const response = await fetch(apiUrl, {
            method
        })

        return await response.json()

    } catch (e) {
        console.error(e)
    }
}


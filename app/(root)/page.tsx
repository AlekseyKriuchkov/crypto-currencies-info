import {CoinsResponse} from "@/types/types";
import {Watchlist} from "@/components/watchlist/watchlist";
import {baseFetcher} from "@/app/api/baseFetcher";

export const fetchCache = 'force-no-store';

export default async function Home () {

    const coinsData: CoinsResponse = await baseFetcher("GET","currencies/", {limit: 10, offset: 0})

    return <Watchlist coinsData={coinsData} />;
};

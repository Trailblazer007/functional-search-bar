import { NextResponse } from "next/server";

export async function fetchCoins() {
  const response = await fetch(
    `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b68c6a6febmsh1e0c32d35636d52p192d4bjsncdfb1c13e03a",
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      },
    }
  );

  const coins = await response.json();
  return coins;
}

export async function GET(request) {
  const coins = await fetchCoins();
  return NextResponse.json(coins);
}

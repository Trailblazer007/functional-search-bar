import { NextResponse } from "next/server";
import { fetchCoins } from "../route";

export async function GET(request) {
  const coins = await fetchCoins();
  const { searchParams } = new URL(request.url);
  console.log(request.url);
  const query = searchParams.get("query");

  const filteredCoins = coins.data.coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(query.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(query.toLowerCase())
    );
  });

  return NextResponse.json(filteredCoins);
}

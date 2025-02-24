'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Coins({ coins }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchItems = async () => {
            try {
                const response = await fetch(`https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0`)
                const data = await response.json()
            } finally {
                setLoading(false)
            }
        }
        fetchItems()
    }, [])

    if (loading) {
        return (
            <div className="grid grid-cols-4 mx-auto max-w-[1260px] gap-10 sm:grid-cols-2 sm:gap-4 sm:gap-y-8 md:grid-cols-4">
                {[...Array(60)].map((item, i) => (
                    <div key={i} className="h-20 bg-black/30 animate-pulse rounded" />
                ))}
            </div>
        )
    }

    return (
        <>
            <ul className="grid grid-cols-4 mx-auto max-w-[1260px] gap-10 sm:grid-cols-2 sm:gap-4 sm:gap-y-8 md:grid-cols-4">
                {coins.map(coin => (
                    <li key={coin.uuid} className="flex flex-col">
                        <Image
                            className="self-center mb-2"
                            src={coin.iconUrl}
                            alt={coin.name}
                            width={70}
                            height={70}
                            priority
                        />
                        <h3>{coin.name}</h3>
                        <p>{coin.symbol}</p>
                        <p>{coin.price}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

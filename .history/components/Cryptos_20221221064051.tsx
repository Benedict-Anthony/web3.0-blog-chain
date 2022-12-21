import React from 'react'
import { cryptos } from 'scripts/crypto'
import Crypto from './Crypto'
import CryptoStyles from "@/styles/Crypto.module.scss"


const Cryptos = () => {
  return (
    <section className="crypto">
      {cryptos.map((crypto) => (
        <Crypto crypto={crypto} key={crypto.id} />
      ))}
    </section>
  )
}

export default Cryptos

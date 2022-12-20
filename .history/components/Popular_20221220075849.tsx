import React from 'react'
import Button from './Button'
import PopularStyles from  "@/styles/Popular.module.scss"
import Link from 'next/link'

type PopularProps ={
    coin: {
            uuid: string
            symbol: string
            name: string
            color: string
            iconUrl: string
            marketCap: string
            price: string
            change: string
            rank: number
            tier: string
            btcPrice:string
    }
}
const Popular = ({coin}:PopularProps) => {
  return (
      <Link href={"/uuuid"} style={{
          textDecoration: "none",
          color:"#000"
      }}>
         <article className={PopularStyles.article}>
          <div>
              <h3>{coin.name}</h3>
              <img src={coin.iconUrl} alt="" />

        </div>

          <p>symbole: <span>{coin.symbol}</span></p>
          <p>price: $ <span>{parseFloat(coin.price).toFixed(3)}</span></p>
          <p>market cap: <span>{coin.marketCap}</span></p>
        <p>change: <span>{coin.change}</span></p>
        <p>rank: <span>{ coin.tier}</span></p>
        <p>rank: <span>{ coin.rank}</span></p>
          
    </article>
      </Link>
  )
}

export default Popular

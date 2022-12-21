import React from 'react'
import Button from './Button'
import PopularStyles from  "@/styles/Popular.module.scss"
import { PopularProps } from 'scripts/type'
import Image from 'next/image'
const Popular = ({coin}:PopularProps) => {
  return (
         <article className={PopularStyles.article}>
          <div>
              <h3>{coin.name}</h3>
              <Image src={coin.iconUrl} alt="" fill />
        </div>
          <p>symbole: <span>{coin.symbol}</span></p>
          <p>price: $ <span>{parseFloat(coin.price).toFixed(3)}</span></p>
          <p>market cap: <span>{coin.marketCap}</span></p>
        <p>change: <span>{coin.change}</span></p>
        <p>tier: <span>{ coin.tier}</span></p>
        <p>rank: <span>{ coin.rank}</span></p>
          
    </article>
  )
}

export default Popular

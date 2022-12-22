import React from 'react'
import Button from './Button'
import MarketStyles from "@/styles/Market.module.scss"
import Link from 'next/link'

type marketProps = {
    data: {
        name: string
    snippet: string
    url:string
    }
    
}
const Market = ({data}:marketProps) => {
  return (
    <article className={MarketStyles.article}>
          <h2>{data.name}</h2>
          <p>{data.snippet}</p>
          <a href={data.url}>
          <Button title='Details'/>
          </a>
    </article>
  )
}

export default Market

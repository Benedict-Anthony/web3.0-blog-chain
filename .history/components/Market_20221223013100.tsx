import React from 'react'
import Button from './Button'
import MarketStyles from "@/styles/Market.module.scss"

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
          <a href={data.url} target="_blank" rel="noreferrer">
          <Button title='Details'/>
          </a>
    </article>
  )
}

export default Market

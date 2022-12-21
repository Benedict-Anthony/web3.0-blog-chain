import Layout from 'components/Layout'
import Popular from 'components/Popular'
import React from 'react'
import PopularStyles from  "@/styles/Popular.module.scss"
import { GetStaticProps } from 'next'
import { PopularProps } from '../.history/scripts/type_20221220080206';
import { useState } from 'react';


export const getStaticProps:GetStaticProps =  async ()=>  {
    const apiKey = process.env.REACT_APP_RAPID_API_KEY || ""
    const apiHost = process.env.REACT_APP_RAPID_API_HOST || ""
    const url = 'https://coinranking1.p.rapidapi.com/coins'
    const config = {
        headers:{
        'X-RapidAPI-Key':apiKey,
        'X-RapidAPI-Host': apiHost
        }
    }
    const response = await fetch(url, config)
    const data = await (response).json()


    return {
        props: {
            coinsList:data.data.coins
        },
        revalidate:10

    }
}
type PopularPageProps = {
    coinsList: {
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
        btcPrice: string
    }[]
}
const PopularPage = ({ coinsList }: PopularPageProps) => {
    
    const [coins, setCoins] = useState(coinsList)
  return (
      <Layout>
          <h2 style={{
              fontSize: "2rem",
              fontWeight: "normal",
              padding:"12px 0"
              
          }}>Popular Coins</h2>
          <section className={PopularStyles.section}>
              
          {coins.map((coin, index) => (
              <Popular coin={coin} key={coin.uuid}/>
              
              ))}
          </section>
    </Layout>
  )
}

export default PopularPage

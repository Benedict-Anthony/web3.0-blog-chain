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
    // const {coins} = data


    return {
        props: {
            coinsList:data.data.coins
        }
    }
}
type PopularPageProps = {
    coinsList:PopularProps[]
}

const PopularPage = ({coinsList}:PopularPageProps) => {
    const [coins, setCoins] = useState<PopularProps[]>(coinsList)

    // const [coins, setCoins] = useState<PopularProps[]>(data.data.coins)
    console.log(coins)
  return (
      <Layout>
          <section className={PopularStyles.section}>
              
          {/* {coins.map((coin) => (
              <Popular key={coin.}/>
              
              ))} */}
          </section>
    </Layout>
  )
}

export default PopularPage

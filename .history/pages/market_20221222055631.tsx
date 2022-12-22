import React from 'react'
import Layout from 'components/Layout';
import Market from 'components/Market';
import MarketStyles from "@/styles/Market.module.scss"
import { GetStaticProps } from 'next';


export const getStaticProps: GetStaticProps = async () => {
     const apiKey = process.env.REACT_APP_RAPID_API_KEY || ""
    const apiHost = process.env.REACT_APP_RAPID_WEB_SEARCH_API_HOST || ""
    const params = new URLSearchParams({q:"cryptocurrency statistics", count:"100"})

    const url = `https://bing-web-search1.p.rapidapi.com/search?${params}`
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
            data:data.webPages.value
        }
    }
}


type marketProps = {
    data: {
        name: string
        snippet: string
        url:string
    } []  
}
const market = ({data}:marketProps) => {
  return (
      <Layout title='Web 3.0 | market News' description='market system top news' keyword='crytopcurrency, coin, web 3, news'>
          <section className={MarketStyles.section}>
              {data.map((market, index) => (
                  <Market data={market} key={index} />

              ))}
          </section>
      </Layout>
  )
}

export default market

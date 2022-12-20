import Layout from 'components/Layout'
import React from 'react'
import TrendingStyles from "@/styles/Trending.module.scss"
import Trending from 'components/Trending'
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
    const apiKey = process.env.REACT_APP_RAPID_API_KEY || ""
    const apiHost = process.env.REACT_APP_RAPID_NEWS_API_HOST || ""
    const params = {q: 'crytocurrency', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'}
    const url = `https://bing-news-search1.p.rapidapi.com/news/search?${params}`
    const config = {
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host':apiHost,
            // "Accept-Language": "EN"
        }
    }

    const response = await fetch(url, config)
    const data = await response.json()
    console.log(data)
    return {
        props: {
            data:[]
        }
    }
}

const trending = () => {
    
  return (
    <Layout>
          <section className={TrendingStyles.section}>
          {/* {arr.map((item) => (
              <Trending key={item}/>
          ))} */}
              
              </section>
    </Layout>
    
  )
}

export default trending

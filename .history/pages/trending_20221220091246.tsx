import Layout from 'components/Layout'
import React from 'react'
import TrendingStyles from "@/styles/Trending.module.scss"
import Trending from 'components/Trending'
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
    const apiKey = process.env.REACT_APP_RAPID_API_KEY || ""
    const apiHost = process.env.REACT_APP_RAPID_NEWS_API_HOST || ""
    const url = 'https://crypto-news-live11.p.rapidapi.com/all'
    const config = {
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host':apiHost
        }
    }

    const response = await fetch(url, config)
    const data = response.json()
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

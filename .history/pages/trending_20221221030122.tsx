import Layout from 'components/Layout'
import React from 'react'
import TrendingStyles from "@/styles/Trending.module.scss"
import Trending from 'components/Trending'
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
    // const apiKey = process.env.REACT_APP_RAPID_API_KEY || ""
    // const apiHost = process.env.REACT_APP_RAPID_NEWS_API_HOST || ""
    // // const params = {q: 'crytocurrency', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'}
    // const url = `https://bing-news-search1.p.rapidapi.com/news/search?q=cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=100`
    // const config = {
    //     headers: {
    //         'X-RapidAPI-Key': apiKey,
    //         'X-RapidAPI-Host':apiHost,
    //         // "Accept-Language": "EN"
    //     }
    // }

    
    // const response = await fetch(url, config)
    // const data = await response.json()
    // console.log(data)
    return {
        props: {
            // news:data.value
            news:[1,2,3,4,5,6,7,8,9]
        }
    }
}
type TrendingProps = {
    news: {
        id: number
        name: string
        date: string
        slug: string
        image:{thumbnail:{contentUrl:string}}
    }[]
}
const TrendingPage = ({news}:TrendingProps) => {
    
  return (
    <Layout>
          <section className={TrendingStyles.section}>
          {news.map((item) => (
              <Trending news={item} key={item.id}/>
          ))}

          
              
              </section>
    </Layout>
    
  )
}

export default TrendingPage

import React from 'react'
import TrendingStyles from "@/styles/Trending.module.scss"
import Button from './Button'
type TrendingProps = {
    news: {
        id: number
        title: string
        date: string
        slug: string
        img:string
    }
}

const Trending = ({news}:TrendingProps) => {
  return (
    <article className={TrendingStyles.article}>
          <div className='img'>
              <img src={news.img} alt="" />
              <span>{news.date}</span>
          </div>
          
          <div>
              <p>{news.title}</p>
              <Button title='read more'/>
          </div>
    </article>
  )
}

export default Trending

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

const Trending = ({news}:TrendingProps | any) => {
  return (
    <article className={TrendingStyles.article}>
          <div className='img'>
              <img src={news.image.thumbnail.contentUrl} alt="" />
              <span>{news.date}</span>
          </div>
          
          <div>
              <p>{news.name}</p>
              <Button title='read more'/>
          </div>
    </article>
  )
}

export default Trending

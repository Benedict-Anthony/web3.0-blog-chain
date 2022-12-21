import React from 'react'
import TrendingStyles from "@/styles/Trending.module.scss"
import Button from './Button'
type TrendingProps = {
    news: {
        id: number
        name: string
        date: string
        slug: string
        image:{thumbnail:{contentUrl:string}}
    }
}

const Trending = ({news}:TrendingProps) => {
  return (
    <article className={TrendingStyles.article}>
          <div className='img'>
              <img src={news.image ? news.image.thumbnail.contentUrl : "nft/images/image-equilibrium.jpg"} alt="" />
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

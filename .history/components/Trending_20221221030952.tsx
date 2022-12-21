import React from 'react'
import TrendingStyles from "@/styles/Trending.module.scss"
import Button from './Button'
type TrendingProps = {
    news: {
        id: number
        name: string
        date: string
        slug: string
      image: { thumbnail: { contentUrl: string } }
        description:string
    }
}

const Trending = ({news}:TrendingProps) => {
  return (
    <article className={TrendingStyles.article}>
      <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ex vel odit </p>
        
              {/* <img src={news.image ? news.image.thumbnail.contentUrl : "nft/images/image-equilibrium.jpg"} alt="" /> */}
              <img src={"nft/images/image-equilibrium.jpg"} alt="" />
              <span>{news.date}</span>
          </div>
          
          {/* <div> */}
        {/* <p>{news.description}</p> */}
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ipsa debitis ex eveniet corporis mollitia eius similique impedit rerum consectetur?</p>
        
              <Button title='read more'/>
          {/* </div> */}
    </article>
  )
}

export default Trending

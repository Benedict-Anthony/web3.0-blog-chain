import React from 'react'
import TrendingStyles from "@/styles/Trending.module.scss"
import Button from './Button'
type TrendingProps = {
    news: {
        id: number
        name: string
        datePublished: string
        slug: string
        image: { thumbnail: { contentUrl: string } }
        description:string
    }
}

const Trending = ({news}:TrendingProps) => {
  return (
    <article className={TrendingStyles.article}>
        <div>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ex vel odit </h4>
        
              <img src={news.image ? news.image.thumbnail.contentUrl : "nft/images/image-equilibrium.jpg"} alt="" />
             
              
          </div>
          
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ipsa debitis ex eveniet corporis mollitia eius similique impedit rerum consectetur?</p>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent:"space-between"
      }}>
              <Button title='read more'/>
        <h5 style={{ color: "hsl(0, 78%, 62%)" }}>{ news.datePublished.split("").slice(0,7).join("")}</h5>
        </div>
    </article>
  )
}

export default Trending

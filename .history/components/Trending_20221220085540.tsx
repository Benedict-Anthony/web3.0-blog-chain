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

const Trending = () => {
  return (
    <article className={TrendingStyles.article}>
          <div className='img'>
              <img src="nft/images/image-equilibrium.jpg" alt="" />
                <span>12-3-2022</span>
          </div>
          
          <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum porro eligendi id similique hic, accusamus blanditiis. Voluptates, sapiente enim! Nostrum.</p>
              <Button title='read more'/>
          </div>
    </article>
  )
}

export default Trending

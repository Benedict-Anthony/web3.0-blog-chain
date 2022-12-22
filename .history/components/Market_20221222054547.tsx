import React from 'react'
import Button from './Button'
import MarketStyles from "@/styles/Market.module.scss"

type marketProps = {
    name: string
    snippet: string
    
}
const Market = () => {
  return (
    <article className={MarketStyles.article}>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellendus assumenda esse exercitationem? Cumque eligendi, voluptas, enim ullam quos quas iste labore dolorem impedit inventore dicta tempore voluptatem iure fuga?</p>
          <Button title='Details'/>
    </article>
  )
}

export default Market

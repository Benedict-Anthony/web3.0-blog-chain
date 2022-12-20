import React from 'react'
import pricingStyles from "@/styles/Price.module.scss"
import Button from './Button'

type PriceProps = {
    subPackage:"monthly" | "yearly"
    item: {
        id: number
        title: string
        yearly:number
        monthly: number
        size: string
        users: string
        strength:string
  }
}

const Price = ({item, subPackage}:PriceProps) => {
  return (
    <article className={pricingStyles.article} style={{
        transform:item.id === 2 ?  "scale(1)" : "scale(.9)"
      }}>
          <h4>{item.title}</h4>
          <div>
              <h2>${subPackage === "monthly" ? item.monthly : item.yearly}</h2>
              
              <h3>{ item.size}</h3>
              <h3>{ item.users}</h3>
              <h3>{ item.strength}</h3>
      </div>
      <Button title='read more'/>
    </article>
  )
}

export default Price
import React from 'react'
import CryptoStyles from "@/styles/Crypto.module.scss"
import Button from './Button'
import Image from 'next/image'

type CryptoProps = {
    crypto: {
          id: number
    title: string
    description: string
    imgUrl:string
    }
}
const Crypto = ({crypto}:CryptoProps) => {
  return (
      <article className={CryptoStyles.article} >
          <div>
              <Image width={400} height={400} src={crypto.imgUrl} alt="" />
          </div>
          <div>
              <h3>{crypto.title}</h3>
              <p>{crypto.description}</p>
              <Button title='Read more'/>
          </div>
    </article>
  )
}

export default Crypto

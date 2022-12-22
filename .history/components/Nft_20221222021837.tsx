import Image from 'next/image'
import React from 'react'
import Button from './Button'
import NFTStyles from "@/styles/Nft.module.scss"

const Nft = () => {
  return (
    <article className={NFTStyles.article}>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <Image src={"/nft/images/image-equilibrium.jpg"} alt="" width={300} height={200} />
    </article>
  )
}

export default Nft

import Image from 'next/image'
import React from 'react'
import Button from './Button'
import NFTStyles from "@/styles/Nft.module.scss"

type NftProps = {
    nftImage :{
        text: string
        thumbnail:{thumbnailUrl:string}
    }
}
const Nft = ({nftImage}:NftProps) => {
  return (
    <article className={NFTStyles.article}>
          <h2>{nftImage.text}.</h2>
          <Image src={nftImage.thumbnail.thumbnailUrl} alt="" width={300} height={300} objectFit="cover" />
    </article>
  )
}

export default Nft

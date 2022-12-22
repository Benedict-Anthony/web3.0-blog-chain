import Image from 'next/image'
import React from 'react'
import Button from './Button'
import NFTStyles from "@/styles/Nft.module.scss"
import Link from 'next/link'

type NftProps = {
    nftImage :{
        text: string
        thumbnail:{thumbnailUrl:string}
    }
}

type MoreNftProps = {
    moreNftImage :{
        name: string
        thumbnailUrl: string
        hostPageDisplayUrl:string
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



export  function NftMore({moreNftImage}:MoreNftProps) {
  return (
    <article className={NFTStyles.article}>
          <h2>{moreNftImage.name}.</h2>
          <Image src={moreNftImage.thumbnailUrl} alt="" width={300} height={300} objectFit="cover" />
          <Link href={moreNftImage.hostPageDisplayUrl}>Learn more</Link>
    </article>
  )
}


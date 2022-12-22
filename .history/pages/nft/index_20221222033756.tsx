import Layout from 'components/Layout'
import React from 'react'
import Nft from "components/Nft"
import NFTStyles from "@/styles/Nft.module.scss"
import { GetStaticProps } from 'next';



export const getStaticProps: GetStaticProps = async () => {
    // const apiKey = process.env.REACT_APP_RAPID_API_KEY || ""
    // const apiHost = process.env.REACT_APP_RAPID_IMAGE_API_HOST || ""
    // const params = new URLSearchParams({q:"3D NFT"})
    // const url = `https://bing-image-search1.p.rapidapi.com/images/search?${params}`
    // const config = {
    //     headers:{
    //     'X-RapidAPI-Key':apiKey,
    //     'X-RapidAPI-Host': apiHost
    //     }
    // }
    // const response = await fetch(url, config)
    // const data = await (response).json()
    
    return {
        props: {
            // value: data.value,
            // nftImages:data.relatedSearches
            nftImages:[]
        }
    }
}
type NftProps = {
    nftImages :{
        text: string
        thumbnail:{thumbnailUrl:string}
    }[]
}
const nft = ({nftImages}:NftProps) => {
  return (
    <Layout title='Web 3.0 | Top NFT images' keyword='Nfts, nfts imgages, cryptocurrency'description='all popular nft images' >
          <section className={NFTStyles.section}>
              {nftImages.map((nftImage, index) => (
                  <Nft nftImage={nftImage} key={index}/>
                  
              ))}
      </section>
    </Layout >
  )
}

export default nft

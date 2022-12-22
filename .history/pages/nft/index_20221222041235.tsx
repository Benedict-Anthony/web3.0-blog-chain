import Layout from 'components/Layout'
import React, { SyntheticEvent } from 'react'
import Nft from "components/Nft"
import NFTStyles from "@/styles/Nft.module.scss"
import { GetStaticProps } from 'next';
import { useState } from 'react';



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
const NFTPage = ({ nftImages }: NftProps) => {
    
    const [searchTerm, setSearchTerm] = useState("")
    const [allNftImages, setAllNftImages] = useState(nftImages)
    const handleSubmit = (e:SyntheticEvent) => {
        e.preventDefault()
        if (!searchTerm) {
            alert("Feilds can not be empty")
            return;
        }
        setAllNftImages(allNftImages.filter((nfts) => nfts.text.includes(searchTerm)))


    }
  return (
    <Layout title='Web 3.0 | Top NFT images' keyword='Nfts, nfts imgages, cryptocurrency'description='all popular nft images' >
          
          <form className={NFTStyles.form} onSubmit={handleSubmit}>
              <input type="text" placeholder='search for Nft' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <input type="submit" value={ "go"} />
          </form>
          <section className={NFTStyles.section}>
              {nftImages.map((nftImage, index) => (
                  <Nft nftImage={nftImage} key={index}/>
                  
              ))}
      </section>
    </Layout >
  )
}

export default NFTPage

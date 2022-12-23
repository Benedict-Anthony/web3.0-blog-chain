import Layout from 'components/Layout'
import React, { ChangeEvent, FormEvent, SyntheticEvent } from 'react'
import Nft, { NftMore } from "components/Nft"
import NFTStyles from "@/styles/Nft.module.scss"
import { GetStaticProps } from 'next';
import { useState } from 'react';



export const getStaticProps: GetStaticProps = async () => {
    const apiKey = process.env.REACT_APP_RAPID_API_KEY || ""
    const apiHost = process.env.REACT_APP_RAPID_IMAGE_API_HOST || ""
    const params = new URLSearchParams({q:"3D NFT", count:"100"})
    const url = `https://bing-image-search1.p.rapidapi.com/images/search?${params}`
    const config = {
        headers:{
        'X-RapidAPI-Key':apiKey,
        'X-RapidAPI-Host': apiHost
        }
    }
    const response = await fetch(url, config)
    const data = await (response).json()
    
    return {
        props: {
            moreNftImages: data.value,
            nftImages:data.relatedSearches
            // nftImages:[]
        },
        revalidate:10
    }
}
type NftProps = {
    nftImages :{
        text: string
        thumbnail:{thumbnailUrl:string}
    }[]

     moreNftImages :{
        name: string
        thumbnailUrl: string
        hostPageDisplayUrl:string
    }[]
}


const NFTPage = ({ nftImages, moreNftImages }: NftProps) => {
    
    const [searchTerm, setSearchTerm] = useState("")
    const [allNftImages, setAllNftImages] = useState(nftImages)
    const [allMoreNftImages, setAllMoreNftImages] = useState(moreNftImages)
    const handleSubmit = (e: any) => {
        e.preventDefault()
        
         setSearchTerm(e.target.value)
       
        if (!searchTerm) {
            setAllMoreNftImages(moreNftImages)
            setAllNftImages(nftImages)
        }
        setAllNftImages(allNftImages.filter((nfts) => nfts.text.toLowerCase().includes(searchTerm.toLowerCase())))
        setAllMoreNftImages(allMoreNftImages.filter((nfts) => nfts.name.toLowerCase().includes(searchTerm.toLowerCase())))

    }

    if (allMoreNftImages.length <= 0 || moreNftImages.length <= 0) {
        return (
            <Layout title='Web 3.0 | Top NFT images' keyword='Nfts, nfts imgages, cryptocurrency' description='all popular nft images' >
            <form className={NFTStyles.form} onSubmit={handleSubmit}>
              <input type="text" placeholder='search for Nft' value={searchTerm} onChange={handleSubmit} />
              <input type="submit" value={ "go"} />
          </form>
                <h1>Nft found</h1>
            </Layout>
       )
   }
  return (
    <Layout title='Web 3.0 | Top NFT images' keyword='Nfts, nfts imgages, cryptocurrency'description='all popular nft images' >
             <h2 style={{
              fontSize: "2rem",
              fontWeight: "normal",
              padding:"12px 0"
              
            }}>Top NFTs </h2>
          <form className={NFTStyles.form} onSubmit={handleSubmit}>
              <input type="text" placeholder='search for Nft' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <input type="submit" value={ "go"} />
          </form>

          <section className={NFTStyles.section}>
              {  allNftImages.map((nftImage, index) => (
                  <Nft nftImage={nftImage} key={index}/>
                  
              ))}
          </section>
          
          <section className={NFTStyles.section}>
              {allMoreNftImages.map((morenftImage, index) => (
                  <NftMore moreNftImage={morenftImage} key={index}/>
                  
              ))}
          </section>
          
    </Layout >
  )
}

export default NFTPage

import Layout from 'components/Layout'
import React from 'react'
import Nft from "components/Nft"
import NFTStyles from "@/styles/Nft.module.scss"
import { GetStaticProps } from 'next';



export const getStaticProps: GetStaticProps = async () => {
    const apiKey = process.env.REACT_APP_RAPID_API_KEY || ""
    const apiHost = process.env.REACT_APP_RAPID_IMAGE_API_HOST || ""
    const params = new URLSearchParams({q:"3D NFT"})
    const url = `https://bing-image-search1.p.rapidapi.com/images/search?${params}`
    const config = {
        headers:{
        'X-RapidAPI-Key':apiKey,
        'X-RapidAPI-Host': apiHost
        }
    }
    const response = await fetch(url, config)
    const data = await (response).json()
    console.log(data)
    return {
        props: {
        data:[]
        }
    }
}

const nft = () => {
  return (
    <Layout title='Web 3.0 | Top NFT images' keyword='Nfts, nfts imgages, cryptocurrency'description='all popular nft images' >
          {/* <section className={NFTStyles.section}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((nft) => (
                  <Nft key={nft}/>
                  
              ))} */}
      {/* </section> */}
    </Layout >
  )
}

export default nft

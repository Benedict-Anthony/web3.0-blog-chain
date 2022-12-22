import Layout from 'components/Layout'
import React from 'react'
import Nft from "components/Nft"
import NFTStyles from "@/styles/Nft.module.scss"
import { GetStaticProps } from 'next';



export const getStaticProps: GetStaticProps = async (context) => {
    // const response = await 
    console.log(context)
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

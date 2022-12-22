import Layout from 'components/Layout'
import React from 'react'
import Nft from "components/Nft"
const nft = () => {
  return (
    <Layout title='Web 3.0 | Top NFT images' keyword='Nfts, nfts imgages, cryptocurrency'description='all popular nft images' >
          <section>
              <Nft/>
      </section>
    </Layout >
  )
}

export default nft

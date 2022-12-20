import Cryptos from 'components/Cryptos'
import Layout from 'components/Layout'
import Pricing from 'components/Pricing'
import React from 'react'

const pricing = () => {
  return (
    <Layout>
      <Pricing/>
      <Cryptos/>
    </Layout>
  )
}

export default pricing
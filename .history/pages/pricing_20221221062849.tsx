import Cryptos from 'components/Cryptos'
import Layout from 'components/Layout'
import Pricing from 'components/Pricing'
import React from 'react'

const pricing = () => {
  return (
    <Layout title='Web 3.0 | Subscrition' description='Web 3.0, latest cryptocurrency news and market data' keyword='Blockchain, coins, cryptocurrency, blog, bitcoin'>
      <Pricing/>
      <Cryptos/>
    </Layout>
  )
}

export default pricing
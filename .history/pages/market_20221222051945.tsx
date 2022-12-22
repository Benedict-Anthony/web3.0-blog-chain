import React from 'react'
import Layout from 'components/Layout';
import Market from 'components/Market';
import MarketStyles from "@/styles/Market.module.scss"
const market = () => {
  return (
      <Layout title='Web 3.0 | market News' description='market system top news' keyword='crytopcurrency, coin, web 3, news'>
          <section className={MarketStyles.section}>
              {[1,2,3,4,5,6,7,8,9,0].map((market) => (
                  <Market key={market}/>

              ))}
          </section>
      </Layout>
  )
}

export default market

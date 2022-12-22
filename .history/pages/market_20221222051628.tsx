import Button from 'components/Button'
import React from 'react'
import Layout from 'components/Layout';
import Market from 'components/Market';

const market = () => {
  return (
      <Layout title='Web 3.0 | market News' description='market system top news' keyword='crytopcurrency, coin, web 3, news'>
          <section>
              <Market/>
          </section>
      </Layout>
  )
}

export default market

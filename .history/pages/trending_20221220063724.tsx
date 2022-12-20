import Layout from 'components/Layout'
import React from 'react'
import TrendingStyles from "@/styles/Trending.module.scss"
import Trending from 'components/Trending'

const trending = () => {
    const arr = [1,2,3,4,5,6,7,8,9,0]
  return (
    <Layout>
          <section className={TrendingStyles.section}>
          {arr.map((item) => (
              <Trending key={item}/>
          ))}
              hello
              </section>
    </Layout>
    
  )
}

export default trending

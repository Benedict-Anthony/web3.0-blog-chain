import React from 'react'
import UtilsStyles from "@/styles/Utils.module.scss";
import Layout from 'components/Layout';
import AboutStatistics from 'components/AboutStatistics';
import AboutCard from 'components/AboutCard';

const about = () => {
  return (
    <Layout title='Web 3.0 | About Us ' description='Web 3.0. latest cryptocurrency news and market data' keyword='Blockchain, coins, cryptocurrency, blog, web 3.0'>
      <AboutStatistics />
      <AboutCard/>
    </Layout>
  )
}

export default about
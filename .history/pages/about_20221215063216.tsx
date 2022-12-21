import React from 'react'
import UtilsStyles from "@/styles/Utils.module.scss";
import Layout from 'components/Layout';
import AboutStatistics from 'components/AboutStatistics';
import AboutCard from 'components/AboutCard';

const about = () => {
  return (
    <Layout>
      <AboutStatistics />
      <AboutCard/>
    </Layout>
  )
}

export default about
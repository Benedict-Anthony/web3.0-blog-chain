import Showcase from 'components/Showcase'
import Features from 'components/Features'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from 'components/Layout'


export default function Home() {
  return (

      <Layout title='Web 3.0| Welcome' description='Web 3.0, latest cryptocurrency news and market data' keyword='Blockchain, coins, cryptocurrency, blog, bitcoin'>
        <Showcase/>
        <Features/>
      </Layout>

  )
}

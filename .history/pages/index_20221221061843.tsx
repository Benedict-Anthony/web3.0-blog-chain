import Showcase from 'components/Showcase'
import Features from 'components/Features'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from 'components/Layout'


export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Chain | Welcome</title>
        <meta name="description" content="Web 3.0, blockhain blog" />
        <meta name="keyword" content='blog, blockchain, cryptocurrency, bitcoin, coin' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Showcase/>
        <Features/>
      </Layout>
    </>
  )
}

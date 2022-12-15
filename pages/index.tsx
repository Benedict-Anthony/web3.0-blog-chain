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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Showcase/>
        <Features/>
      </Layout>
    </>
  )
}
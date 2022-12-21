import React, { FC } from 'react'
import UtilsStyles from "@/styles/Utils.module.scss";
import {ReactNode} from "react"
import  Head  from 'next/head';

type layoutProps = {
  children: ReactNode,
  title: string
  description: string
  keyword: string
}
const Layout = ({children, title, description, keyword}:layoutProps) => {
  return (
    <>

      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keyword} />
    </Head>
    <main className={UtilsStyles.container}>
      <section className={UtilsStyles.spaceY}>
        {children}
      </section>
      </main>
    </>
  )
}

export default Layout
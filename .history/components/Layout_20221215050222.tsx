import React from 'react'
import UtilsStyles from "@/styles/Utils.module.scss";
import {ReactNode} from "react"

type layoutProps = {
    children: ReactNode
}
const Layout = ({children}:layoutProps) => {
  return (
    <main className={UtilsStyles.container}>
      <section className={UtilsStyles.spaceY}>
        {children}
      </section>
      </main>
  )
}

export default Layout
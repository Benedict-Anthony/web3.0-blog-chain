import React from 'react'
import Footerstyles from "@/styles/Footer.module.scss"
export const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className={Footerstyles.footer}>
        <h3>Web 3.0! Your favourite blog!</h3>
          <p>Benedict Anthony</p>
          <div>{ year} &copy;</div>
    </footer>
  )
}

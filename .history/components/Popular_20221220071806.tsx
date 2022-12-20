import React from 'react'
import Button from './Button'
import PopularStyles from  "@/styles/Popular.module.scss"
import Link from 'next/link'


const Popular = () => {
  return (
      <Link href={"/uuuid"} style={{
          textDecoration: "none",
          color:"#000"
      }}>
         <article className={PopularStyles.article}>
          <div>
              <h3>Bitcoin</h3>
              <img src="nft/images/image-equilibrium.jpg" alt="" />

        </div>

          <p>symbole: <span>BTC</span></p>
          <p>price: $ <span>200</span></p>
          <p>market cap: <span>23330302392</span></p>
          <p>change: <span>200--22</span></p>
          <p>rank: <span>1</span></p>
          
    </article>
      </Link>
  )
}

export default Popular

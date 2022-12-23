import React from 'react'
import Image from 'next/image';
import ShowCaseStyles from "@/styles/showcase.module.scss"
import UtilsStyles from "@/styles/Utils.module.scss";
import Button from './Button';
import Link from 'next/link';


const Showcase = () => {
  return (
    <section>
          <div className={ShowCaseStyles.showcase}>
              <main className={ShowCaseStyles.main}>
                  <div className={ShowCaseStyles.showcaseImage}>
                      {/* <img src={} alt=""  /> */}
                  </div>
                  <article className={ShowCaseStyles.article}>
                      <h1>The Bright <br /> Future of <br /> Web 3.0?</h1>
                      <div>
                          <p>  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                But is it really fulfilling its promise?</p>
                  <Link href={"/trending"}>
                      <Button title={"Read more"} />
                  </Link>
                      </div>
                  </article>
              </main>
              <aside className={ShowCaseStyles.aside}>
                  <h3>New</h3>

                  <div>
                      <article>
                        <h2>Bitcoin and Nigeria</h2>
                        <p>Nigeria is reportedly set to legalize Bitcoin and cryptocurrency usage despite strongly opposing decentralized currencies since Nigerian...</p>
                      </article>
                      
                      <article>
                        <h2>Price Rate</h2>
                        <p>During the Asian session on December 21, Bitcoin price prediction remains bearish under $17000, as investors await US consumer confidence</p>
                      </article>
                      
                      <article>
                        <h2>Donald Trump Announces </h2>
                        <p> The edition of 45000 NFTs features the former president in various fantasy costumes and poses. It will be minted on Polygon.</p>
                    </article>
                  </div>
              </aside>
          </div>
    </section>
  )
}

export default Showcase

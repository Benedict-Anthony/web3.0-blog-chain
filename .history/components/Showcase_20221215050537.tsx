import React from 'react'
import Image from 'next/image';
import ShowCaseStyles from "@/styles/showcase.module.scss"
import UtilsStyles from "@/styles/Utils.module.scss";
import Button from './Button';


const Showcase = () => {
  return (
    <section>
          <div className={ShowCaseStyles.showcase}>
              <main className={ShowCaseStyles.main}>
                  <div className={ShowCaseStyles.showcaseImage}>
                      <img src={"/landing/assets/images/image-web-3-desktop.jpg"} alt=""  />
                  </div>
                  <article className={ShowCaseStyles.article}>
                      <h1>The Bright <br /> Future of <br /> Web.0?</h1>
                      <div>
                          <p>  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                              But is it really fulfilling its promise?</p>
                          <Button title={"Read more"} />
                      </div>
                  </article>
              </main>
              <aside className={ShowCaseStyles.aside}>
                  <h3>New</h3>

                  <div>
                      <article>
                        <h2>Hydrogen VS Electric Cars</h2>
                        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                      </article>
                      
                      <article>
                        <h2>The Downsides of AI Artistry</h2>
                        <p>What are the possible adverse effects of on-demand AI image generation?</p>
                      </article>
                      
                      <article>
                        <h2>Is VC Funding Drying Up?</h2>
                        <p> Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </article>
                  </div>
              </aside>
          </div>
    </section>
  )
}

export default Showcase

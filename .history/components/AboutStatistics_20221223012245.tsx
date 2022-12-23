import React from 'react'
import AboutStyles from "@/styles/About.module.scss"
import Image from 'next/image'


const AboutStatistics = () => {
  return (
      <section className={AboutStyles.section1}>
          <div className={AboutStyles.aboutText}>
              <h2>Get <span>insights</span> that help your business grow.</h2>
              <p>Discover the benefits of Nfts, Blockchain data analytics and make better decisions regarding revenue, customer experience and overall efficiency.</p>
              
            
              <div className={AboutStyles.statistics}>
                  <div>
                      <h3>10k+</h3>
                      <p>companies</p>
                  </div>
                  <div>
                      <h3>10k+</h3>
                      <p>Templates</p>
                  </div>
                  <div>
                      <h3>12m+</h3>
                      <p>queries</p>
                  </div>
              </div>
          </div>
          <div className={AboutStyles.image}>
              <Image width={400} height={350} src="/about/images/image.jpg" alt="" />
          </div>

    </section>
  )
}

export default AboutStatistics
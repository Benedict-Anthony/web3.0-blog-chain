import React from 'react'
import UtilsStyles from "@/styles/Utils.module.scss";
import FeatureStyles from "@/styles/Feature.module.scss"
import Image from 'next/image';

const Features = () => {
  return (
      <section className={UtilsStyles.spaceY}>
          <div className={FeatureStyles.features}>
              <article className={FeatureStyles.article}>
                  <div>
                    <Image width={300} height={300} objectFit="cover" src="/landing/assets/images/image-retro-pcs.jpg" alt="" />
                  </div>
                  <div>
                      <h4>01</h4>
                      <h2>Reviving Retro PCs</h2>
                      <p>What happens when old PCs are given modern upgrades?</p>
                  </div>
              </article>

              <article className={FeatureStyles.article}>
                  <div>
                    <Image width={300} height={300} objectFit="cover" src="/landing/assets/images/image-top-laptops.jpg" alt="" />
                  </div>
                  <div>
                      <h4>02</h4>
                      <h2>Top 10 Laptops of 2022</h2>
                      <p>Our best picks for various needs and budgets.?</p>
                  </div>
              </article >

              <article className={FeatureStyles.article}>
                  <div>
                    <Image width={300} height={300} objectFit="cover" src="/landing/assets/images/image-gaming-growth.jpg" alt="" />
                  </div>
                  <div>
                      <h4>03</h4>
                      <h2>The Growth of Gaming</h2>
                      <p>Our best picks for various needs and budgets.</p>
                  </div>
              </article>
          </div>
      </section>
  )
}

export default Features
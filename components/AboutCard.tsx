import React from 'react'
import AboutStyles from "@/styles/About.module.scss"

const AboutCard = () => {
  return (
      <section className={AboutStyles.section2}>
          <div className={AboutStyles.heading}>
              <h1>Reliable, efficient delivery</h1>
              <h2>Powered by Technology</h2>
              <p>
                  Our Artificial Intelligence powered tools use millions of project data points 
                to ensure that your project is successful
              </p>
          </div>

          <div className={AboutStyles.cardItems}>
              <article>
                  <h2>Supervisor</h2>
                  <p>Monitors activity to identify project roadblocks</p>
                  <img src="/card/images/icon-supervisor.svg" alt="" />
              </article>

              <div>
                   <article>
                  <h2>Team Builder</h2>
                  <p>Scans our talent network to create the optimal team for your project</p>
                  <img src="/card/images/icon-team-builder.svg" alt="" />
              </article>

                   <article>
                  <h2>Karma</h2>
                  <p>Regularly evaluates our talent to ensure quality</p>
                  <img src="/card/images/icon-karma.svg" alt="" />
              </article>
              </div>

             
                   <article>
                  <h2>Calculator</h2>
                  <p>Uses data from past projects to provide better delivery estimates</p>
                  <img src="/card/images/icon-calculator.svg" alt="" />
              </article> 
          </div>
    </section>
  )
}

export default AboutCard
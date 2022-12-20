import Layout from 'components/Layout'
import Popular from 'components/Popular'
import React from 'react'
import PopularStyles from  "@/styles/Popular.module.scss"


export function getStaticProps() {
    const apiKey = process.env.REACT_APP_RAPID_API_KEY
    const apiHost = process.env.REACT_APP_RAPID_API_HOST
    // const config = {
    //     header:{
    //     'X-RapidAPI-Key': '7c0e224625msh07e8dae45c96146p197b61jsna43dfd8d1cc7',
    //     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    //     }
    // }
    // const data = fetch('https://coinranking1.p.rapidapi.com/coins')

    console.log(apiHost, apiKey)
    return {
        props: {
            data:[]
        }
    }
}


const popular = () => {
    const arr = [1,2,3,4,5,6,7,8,9,0]
  return (
      <Layout>
          <section className={PopularStyles.section}>
              
          {arr.map((item) => (
              <Popular key={item}/>
              
              ))}
          </section>
    </Layout>
  )
}

export default popular

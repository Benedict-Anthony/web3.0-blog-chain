import Layout from 'components/Layout'
import Popular from 'components/Popular'
import React from 'react'
import PopularStyles from  "@/styles/Popular.module.scss"
import { GetStaticProps } from 'next'


export const getStaticProps:GetStaticProps =  async ()=>  {
    const apiKey = process.env.REACT_APP_RAPID_API_KEY || ""
    const apiHost = process.env.REACT_APP_RAPID_API_HOST || ""
    const url = 'https://coinranking1.p.rapidapi.com/coins'
    const config = {
        header:{
        'X-RapidAPI-Key':apiKey || "",
        'X-RapidAPI-Host': apiHost || ""
        }
    }
    const response = fetch(url, config)
    const data = (await response).json()
    console.log(data)


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

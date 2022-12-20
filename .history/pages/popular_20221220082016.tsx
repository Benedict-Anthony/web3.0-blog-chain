import Layout from 'components/Layout'
import Popular from 'components/Popular'
import React from 'react'
import PopularStyles from  "@/styles/Popular.module.scss"
import { GetStaticProps } from 'next'
import { PopularProps } from '../.history/scripts/type_20221220080206';


export const getStaticProps:GetStaticProps =  async ()=>  {
    const apiKey = process.env.REACT_APP_RAPID_API_KEY || ""
    const apiHost = process.env.REACT_APP_RAPID_API_HOST || ""
    const url = 'https://coinranking1.p.rapidapi.com/coins'
    const config = {
        headers:{
        'X-RapidAPI-Key':apiKey,
        'X-RapidAPI-Host': apiHost
        }
    }
    const response = await fetch(url, config)
    const data = await (response).json()
    // const {coins} = data


    return {
        props: {
            data:data
        }
    }
}
type PopularPageProps = {
    coins:PopularProps[]
}

const popular = (data:PopularPageProps | any) => {
    console.log(data.data)
  return (
      <Layout>
          <section className={PopularStyles.section}>
              
          {/* {arr.map((item) => (
              <Popular key={item}/>
              
              ))} */}
          </section>
    </Layout>
  )
}

export default popular

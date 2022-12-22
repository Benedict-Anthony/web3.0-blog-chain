import React from 'react'
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async (context) => {
    console.log(context)
    
    return {
        props: {
            data:[]
        }
    }
}
const searchedNft = () => {
  return (
    <div>
      
    </div>
  )
}

export default searchedNft

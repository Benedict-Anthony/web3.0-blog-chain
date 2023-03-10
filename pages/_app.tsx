import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'
import "@/styles/styles.css"
import { Footer } from 'components/Footer'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

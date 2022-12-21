import React, { useEffect } from 'react'
import {useState} from "react"
import Image from 'next/image'
import Link from 'next/link';
import NavBarStyles from "@/styles/navBar.module.scss";
import { useRouter } from 'next/router';

const NavBar = () => {
  const [mobileActive, setMobileActive] = useState(false)
  const route = useRouter()

  useEffect(() => {
    setMobileActive(false)
  }, [route.basePath])
  return (
     
        <header className={NavBarStyles.header}>
          <nav className={NavBarStyles.nav}>
               <div className="logo">
                <Image src="/landing/assets/images/logo.svg" alt="" width={50} height={30} />
              </div>
              
              <ul style={{
                right: mobileActive ? "0" : "calc(100vw + 50px)"
              }}>
                  <li><Link href={"/"}>Home</Link></li>
                  <li><Link href={"/about"}>About</Link></li>
                  <li><Link href={"/pricing"}>Pricing</Link></li>
                  <li><Link href={"/popular"}>Popular</Link></li>
                  <li><Link href={"/trending"}>Trending</Link></li>
                  <li><Link href={"/categories"}>Categories</Link></li>
                 
              </ul>

                  <div className={NavBarStyles.toggler} onClick={() => setMobileActive(!mobileActive)}>
                      <Image src={`/landing/assets/images/${mobileActive ? "icon-menu-close.svg" : "icon-menu.svg"}`} alt="" width={25} height={20} />
            </div>

         </nav>
    </header>

  )
}

export default NavBar

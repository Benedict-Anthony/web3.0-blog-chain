import React from 'react'
import { useState } from 'react';
import { prices } from '../scripts/princing';
import Price from './Price';


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "@/styles/styles.css"
import pricingStyles from "@/styles/Price.module.scss";


const Pricing = () => {
    const [subPackage, setsubPackage] = useState<"monthly" | "yearly">("monthly")
    const subPackageStyle = {
        left: subPackage == "monthly" ? 0 : "50%",
        backgroundColor: subPackage === "monthly" ? "hsl(35, 77%, 62%)" : "hsl(5, 85%, 63%)"
    }
    function togglePackage() {
        if (subPackage === "monthly") {
            setsubPackage("yearly")
        } else if (subPackage === "yearly") {
            setsubPackage("monthly")
        }
    }
  return (
      <section className={pricingStyles.section} >
      <div className={pricingStyles.heading}>
        <h3 style={{
          fontSize: "1.1rem",
          fontWeight: "normal",
          maxWidth:"500px"
        }}>Subscribe to our newsletter to get premium access to top news, good marketing suggestions and more packages</h3>
              <h1>our prices</h1>
              <div>
                  <h2>monthly</h2>
                  <div onClick={togglePackage}>
                      <span style={subPackageStyle}></span>
                    </div>
                  <h2>yearly</h2>
              </div>
          </div>
          
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            // slidesPerGroup={3}
            // loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
            clickable: true,
            }}
            grabCursor = {true}
            // navigation={true}
            modules={[Pagination, Navigation]}
              breakpoints={{
              290: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              
        }}
            className="mySwiper">
              {prices.map((item) => (
                <SwiperSlide key={item.id}>
                    <Price item={item} subPackage={subPackage} key={item.id} />
                </SwiperSlide>
              ))}
       </Swiper>
    </section>
  )
}

export default Pricing
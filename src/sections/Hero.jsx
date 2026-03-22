import React, { useState,useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './styles/Hero.scss'
import {heroSlides} from '../util/hero'

const Hero = () => {
  const [isMobile,setIsMobile]=useState(
    window.innerWidth<=1111
  )

  useEffect(()=>{
    const handleResize =()=>setIsMobile(window.innerWidth<=1111)
    window.addEventListener('resize',handleResize)
    return ()=>window.removeEventListener('resize',handleResize)
  },[])

  return (
    <div className="hero-container">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{
          el:'.swiper-pagination',
          type: 'fraction'
        }}
        navigation={{
          nextEl:'.arr-next',
          prevEl:'.arr-prev'
        }}
        className="hero-slider"
        loop={true} >
        {heroSlides.map((slide)=>(
        <SwiperSlide 
          className={`hero-slide ${slide.id}`}
          style={{backgroundImage:`url(${isMobile? slide.image.mobile:slide.image.desktop})`}}
          key={slide.id}>
          <div className="inner">
            <div className="t-wrap">
              <h2 
                className="tit"
                dangerouslySetInnerHTML={{__html:slide.title}} />
              <p className="txt">
                {slide.subtitle}
              </p>
              <a href={slide.ctaHref} className='btn'>
                {slide.ctaText}
              </a>
            </div>
          </div>
          </SwiperSlide>
        ))}

      <div className="hero-nav">
          <div className="arr-prev">prev</div>
          <div className="swiper-pagination"></div>
          <div className="arr-next">next</div>
      </div>
      </Swiper>
    </div>
  )
}

export default Hero
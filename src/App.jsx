import { useState, useEffect } from 'react'
import './styles/main.scss'
import Header from './components/Header'
import Hero from './sections/Hero'
import Footer from './components/Footer'
import Follow from './sections/Follow'
import Collection from './sections/Collection'
import SkinCare from './sections/SkinCare'
import Instargram from './sections/Instargram'
import TopBanner from './components/TopBanner'
import FixedTopBtn from './components/FixedTopBtn'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [topBanner, setTopBanner] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  const [mNavOpen, setMNavOpen] = useState(false)

  const handleMNavOpen = () => setMNavOpen(true)
  const handleMNavClose = () => setMNavOpen(false)

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease'
    });
  }, [])

  useEffect(()=>{
    document.body.style.overflow=mNavOpen?'hidden':''
  },[mNavOpen])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 200)
      // console.log(scrollTop)
    }
    window.addEventListener('scroll', handleScroll)
  }, [])

  const upTopBanner = () => {
    setTopBanner('up')
  }

  return (
    <div className={`app-container ${topBanner} ${isScrolled ? 'scrolled' : ''} `}>
      <FixedTopBtn />
      <TopBanner onClick={upTopBanner} />
      <Header
        mNavOpen={mNavOpen}
        onNavOpen={handleMNavOpen}
        onNavClose={handleMNavClose} />
      <main>
        <section id="hero" className='section'>
          <Hero />
        </section>
        <section id="follow" className='section'>
          <Follow />
        </section>
        <section id="collection" className='section'>
          <Collection />
        </section>
        <section id="skincare" className='section'>
          <SkinCare />
        </section>
        <section id="instargram" className='section'>
          <Instargram />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
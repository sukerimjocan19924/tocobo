
import { useState ,useEffect} from 'react'
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
function App() {

  const [topBanner, setTopBanner]=useState('')
  const [isScrolled, setIsScrolled]=useState(false)


  useEffect(()=>{

    const handleScroll =()=>{
      const scrollTop=window.scrollY

      setIsScrolled(scrollTop>200)

      // console.log(scrollTop)
    }

    window.addEventListener('scroll',handleScroll)

  },[])

  const upTopBanner =()=>{
    setTopBanner('up')
  }
  return (
    <div className={`app-container ${topBanner} ${isScrolled? 'scrolled':''} `}>
      <FixedTopBtn/>
      <TopBanner  onClick={upTopBanner}/>
      <Header />
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
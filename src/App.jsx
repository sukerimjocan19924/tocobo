
import './styles/main.scss'
import Header from './components/Header'
import Hero from './sections/Hero'
import Footer from './components/Footer'
import Follow from './sections/Follow'
import Collection from './sections/Collection'
import SkinCare from './sections/SkinCare'
import Instargram from './sections/Instargram'
function App() {

  return (
    <>
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
    </>
  )
}

export default App
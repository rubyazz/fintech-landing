import React from 'react'
import styles from './styles/styles.js'
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Hero, Stats, Testimonials } from './components/components'

// Animate On Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const App = () => {
  return (
    <div className='bg-primary w-full overflow-clip'>
      <div id='home'>
        <div className={`${styles.paddingX} ${styles.flexCenter}}`}>
          <Navbar />
        </div>

        <div id='home' className={`${styles.paddingX} ${styles.flexStart}}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX}`}>
        <div id='features'>
          <Stats />
          <Business />
        </div>

        <div id='product'>
          <Billing />
          <CardDeal />
        </div>

        {/* <div id='clients'>
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div> */}
      </div>
    </div >
  )
}

export default App
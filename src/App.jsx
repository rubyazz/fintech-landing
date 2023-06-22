import React from 'react'
import styles from './styles/styles.js'
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Hero, Stats, Testimonials } from './components/components'

const App = () => {
  return (
    <div className='bg-primary w-full h-full overflow-clip py-4'>
      <div id='home'>
        <div className={`${styles.paddingX} ${styles.flexCenter}}`}>
          <Navbar />
        </div>

        <div id='home' className={`${styles.paddingX}`}>
          <Hero />
          <Stats />
        </div>
      </div>

      <div className={`${styles.paddingX}`}>
        <div id='features'>
          <Business />
        </div>

        <div id='product'>
          <Billing />
          <CardDeal />
        </div>

        <div id='clients'>
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div >
  )
}

export default App
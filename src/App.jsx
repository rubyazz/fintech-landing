import React from 'react'

import styles from './styles/styles.js'
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Hero, Stats, Testimonials } from './components/components'

const App = () => {
  return (
    <div className='bg-primary'>
      <div className='max-w-[1920px] m-auto'>
        <div className={`${styles.paddingX}}`}>
          <div id='home'>
            <Navbar />
          </div >
        </div>

        <div className={`${styles.paddingX}`}>
          <Hero />
          <Stats />
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
      </div>
    </div>
  )
}

export default App

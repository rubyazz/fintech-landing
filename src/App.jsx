import React from 'react'
import styles from './styles/styles.js'
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Hero, Stats, Testimonials } from './components/components'


const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}}`}>
        <Navbar />
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}}`}>
        <Hero />
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}}`}>
        <Stats />
        {/* <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer /> */}
      </div>
    </div >
  )
}

export default App
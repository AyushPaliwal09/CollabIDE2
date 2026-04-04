import React from 'react'
import FinalCTA from '../components/FinalCTA.jsx'
import FAQ from '../components/FAQ.jsx'
import FeatureGrid from '../components/FeatureGrid.jsx'
import Features from '../components/Features.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Navbar from '../components/Navbar.jsx'
import Testimonials from '../components/Testimonials.jsx'
import UseCases from '../components/UseCases.jsx'
import Hero from '../components/Hero.jsx'
import Footer from '../components/Footer.jsx'



const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <main className="main-container">
      <Features />
      <FeatureGrid />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>

  <Footer />
  </>
  )
}

export default Home

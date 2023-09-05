import Image from 'next/image'
import Contact from './components/Contact'
import ElegantContact from './components/ElegantContact'
import Hero from './components/Hero'
import Instagram from './components/Instagram'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import { SliderData } from './components/SliderData'
import Footer from './components/Footer'

export default function Home() {
  const brandName='Lux Rentals'
  const brandLocation = 'Rancho Mirage, CA'
  const brandHandle = '@LuxRentalServices'
  return (
  <>
    <Navbar brand={brandName}/>
    <Hero businessName={brandName} city={brandLocation} buttonLabel="Book"/>
    <Slider slides={SliderData}/>
    <Instagram handle={brandHandle} />
    <ElegantContact />
    <Footer />
  </>
  )
}

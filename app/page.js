import Image from 'next/image'
import Hero from './components/Hero'
import Instagram from './components/Instagram'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import { SliderData } from './components/SliderData'

export default function Home() {
  const brandName='Luxury Rental Services'
  const brandLocation = 'Rancho Mirage, CA'
  const brandHandle = '@LuxRentalServices'
  return (
  <>
    <Navbar brand={brandName}/>
    <Hero businessName={brandName} city={brandLocation} buttonLabel="Book"/>
    <Slider slides={SliderData}/>
    <Instagram handle={brandHandle} />
  </>
  )
}

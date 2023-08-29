import Image from 'next/image'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

export default function Home() {
  return (
  <>
    <Navbar brand="Some Business"/>
    <Hero businessName="Some Business" city="Palm Springs, CA" buttonLabel="Quote"/>
  </>
  )
}

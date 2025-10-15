import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Services } from './components/Services/Services'
import { OurServices } from './components/OurServices/OurServices'
import { Featured } from './components/Featured/Featured'

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Services/>
      <OurServices/>
      <Featured/>
    </>
  )
}
import React from 'react'
import Navbar from "../../components/navbar/NavBar"
import Hero from '../../components/hero/Hero'
import Service from '../../components/service/Service'
import Workshop from '../../components/workshop/Workshop'

export default function Landing() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Service/>
      <Workshop/>
    </>
  )
}

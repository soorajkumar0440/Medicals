import React from 'react'
import Hero from './components/Hero'
import Header from '../../components/Header/Header'
import Services from './components/Services'
import Welcome from './components/Welcome'
import Product from './components/Product'
import Form from './components/Form'
import Footer from '../../components/Footer/Footer'
function index() {
  return (
    <>
      <Hero />
      <Services />
      <Welcome />
      <Product />
      <Form />
    </>
  )
}

export default index

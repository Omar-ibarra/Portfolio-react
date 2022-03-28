import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import {Helmet} from "react-helmet";
import ICON from "./assets/portfolio.ico"

const App = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <link rel="icon" href={ICON} />
      </Helmet>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
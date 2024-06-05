import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Grid from './component/Grid'
import Testimonial from './component/Testimonial'
import Footer from './component/Footer'
import './App.css'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Header></Header>
    <Grid></Grid>
    <Testimonial></Testimonial>
    <Footer></Footer>
    </>
  )
}

export default App

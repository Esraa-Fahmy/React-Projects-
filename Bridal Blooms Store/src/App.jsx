// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import './App.css'
import { Container} from '@mui/material'
import { ThemeProvider } from '@mui/system';
import theme from './styles/theme/theme';
import Appbar from './components/AppBar/navbar';
import Banner from './components/banner/banner';
import Promotions from './components/promotions/promotion';
import ProductCards from './components/products/index'
import AboutSection from './components/about/about';
import Footer from './components/Footer/footer';
function App() {

  useEffect(()=>{

  },[]);

  return (
    <ThemeProvider theme ={theme}>
    <Container
    maxWidth="lg" sx={{ background: "#fff"}}>

        <Appbar/>
         <Banner/>
         <Promotions/>
         <ProductCards/>
         <AboutSection/>
         <Footer/>
      </Container>
      </ThemeProvider>
  )
}

export default App

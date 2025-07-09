import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Header from './Header'
import { Footer } from './Footer'
import { Context } from './Context'
import Hero from './Hero'


function App(){
   return(
    <>
    <BrowserRouter>
     <Header/>
    <Hero />
    <Routes>
    </Routes>



    <Footer/>
    </BrowserRouter>
    </>
   )
}

export default App
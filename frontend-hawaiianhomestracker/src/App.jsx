import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Header from './Header'
import { Footer } from './Footer'
import { Context } from './Context'
import Hero from './Hero'
import Resources from './Resources'


function App(){
   return(
    <>
    <BrowserRouter>
     <Header/>
    <Hero />
    <Resources />

    
    <Routes>
    </Routes>



    <Footer/>
    </BrowserRouter>
    </>
   )
}

export default App
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Header from './Header'
import { Footer } from './Footer'
import Hero from './Hero'
import Resources from './Resources'
import History from './History'


function App(){
   return(
    <>
    <BrowserRouter>
     <Header/>
    <Hero />
    <History/>
    <Resources />
    
    <Routes>
    </Routes>



    <Footer/>
    </BrowserRouter>
    </>
   )
}

export default App
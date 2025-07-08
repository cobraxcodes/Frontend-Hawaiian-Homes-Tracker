import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Header from './Header'
import { Footer } from './Footer'
import { Context } from './Context'


function App(){
   return(
    <>
    <BrowserRouter>
     <Header/>
    
    
    <Routes>
    </Routes>



    <Footer/>
    </BrowserRouter>
    </>
   )
}

export default App
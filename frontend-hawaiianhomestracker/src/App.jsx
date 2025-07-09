import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Header from './Header'
import { Footer } from './Footer'
import Resources from './Resources'
import Home from './Home'


const LastName = lazy(() => import ('./search/LastName'))


function App(){
   return(
    <BrowserRouter>
     <Header/>

    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/resources' element={<Resources/>}/>
      <Route path='/lastName' element={<Suspense fallback={<p>Loading ...</p>}><LastName/></Suspense>}/>
    </Routes>



    <Footer/>
    </BrowserRouter>
    
   )
}

export default App
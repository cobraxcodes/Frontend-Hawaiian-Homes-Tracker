import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Header from './Header'
import { Footer } from './Footer'
import Resources from './Resources'
import Home from './Home'


//lazy load applications
const LastName = lazy(() => import ('./search/LastName'))
const AllApplications = lazy(() => import('./search/AllApplications'))


function App(){
   return(
    <BrowserRouter>
     <Header/>

    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/resources' element={<Resources/>}/>
      <Route path='/lastName' element={<Suspense fallback={<p>Loading ...</p>}><LastName/></Suspense>}/>
      <Route path='/all' element={<Suspense fallback={<p>Loading...</p>}><AllApplications/></Suspense>}/>
    </Routes>



    <Footer/>
    </BrowserRouter>
    
   )
}

export default App
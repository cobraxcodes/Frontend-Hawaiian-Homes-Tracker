import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Header from './landing/Header'
import Footer from './landing/Footer'
import Resources from './landing/Resources'
import Home from './Home'


//lazy load applications
const LastName = lazy(() => import ('./search/LastName'))
const AllApplications = lazy(() => import('./search/AllApplications'))
const Rank = lazy(() => import('./search/RankSearch'))
const Zipcode = lazy(() => import('./search/Zipcode'))
const Areacode = lazy(() => import('./search/AreaCode'))


function App(){
   return(
    <BrowserRouter>
     <Header/>

    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/resources' element={<Resources/>}/>
      <Route path='/lastName' element={<Suspense fallback={<p>Loading ...</p>}><LastName/></Suspense>}/>
      <Route path='/all' element={<Suspense fallback={<p>Loading...</p>}><AllApplications/></Suspense>}/>
      <Route path='/ranks' element={<Suspense fallback={<p>Loading Applications</p>}><Rank/></Suspense>}/>
      <Route path='/zipcode' element={<Suspense fallback={<p>Loading Applications</p>}><Zipcode/></Suspense>}/>
      <Route path='/areacode' element={<Suspense fallback={<p>Loading Applications</p>}><Areacode/></Suspense>}/>
    </Routes>



    <Footer/>
    </BrowserRouter>
    
   )
}

export default App
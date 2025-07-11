import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState, lazy, Suspense } from 'react'
import { Context } from './Context'
import Protect from './jwt-auth/Protect'
import Resources from './landing/Resources'
import Home from './Home'
import Signup from './jwt-auth/Signup'
import Login from './jwt-auth/Login'
import Profile from './jwt-auth/Profile'


//lazy load applications
const LastName = lazy(() => import ('./search/LastName'))
const AllApplications = lazy(() => import('./search/AllApplications'))
const Rank = lazy(() => import('./search/RankSearch'))
const Zipcode = lazy(() => import('./search/Zipcode'))
const Areacode = lazy(() => import('./search/AreaCode'))


function App(){
  const [login, setLogin] = useState(false)
  const [username,setUsername]=useState("")
  const [password, setPassword]=useState("")
   return(
    <Context.Provider value={{login,setLogin,username,setUsername,password,setPassword}}>
    <BrowserRouter>
 
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/resources' element={<Resources/>}/>
      <Route path='/lastName' element={<Suspense fallback={<p>Loading ...</p>}><LastName/></Suspense>}/>
      <Route path='/all' element={<Suspense fallback={<p>Loading...</p>}><AllApplications/></Suspense>}/>
      <Route path='/ranks' element={<Suspense fallback={<p>Loading Applications</p>}><Rank/></Suspense>}/>
      <Route path='/zipcode' element={<Suspense fallback={<p>Loading Applications</p>}><Zipcode/></Suspense>}/>
      <Route path='/areacode' element={<Suspense fallback={<p>Loading Applications</p>}><Areacode/></Suspense>}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/profile' element={<Protect><Profile /></Protect>}/>
    </Routes>


    </BrowserRouter>
    </Context.Provider>
   )
}

export default App
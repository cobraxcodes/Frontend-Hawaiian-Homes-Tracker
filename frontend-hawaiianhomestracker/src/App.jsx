import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState, lazy, Suspense, useEffect } from 'react'
import { Context } from './Context'
import Protect from './jwt-auth/Protect'
import Resources from './landing/Resources'
import Home from './Home'
import Signup from './jwt-auth/Signup'
import Login from './jwt-auth/Login'
import Profile from './jwt-auth/Profile'
import Header from './landing/Header'
import Footer from './landing/Footer'
import CreateApp from './crud/CreateApp'
import DeleteApp from './crud/DeleteApp'
import ReadApp from './crud/ReadApp'
import UpdateApp from './crud/UpdateApp'
import Contribute from './contact/Contribute'
import Contact from './contact/Contact'
import About from './contact/About'
import StateHelp from './resources/StateHelp'
import Information from './resources/Information'
import Updates from './resources/Updates'
import { inject } from '@vercel/analytics'


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
  const [fullname, setFullname]=useState("")
  const [date, setDate]=useState("")
  const [area, setArea]=useState("")
  const [rank,setRank]=useState("")
  const [zipcode,setZipcode]=useState("")

  useEffect(() =>{
    inject()
  }, [])

   return(
    <Context.Provider value={{login,setLogin,username,setUsername,password,setPassword, fullname, setFullname, date, setDate, rank, setRank, area, setArea, zipcode, setZipcode}}>
    <BrowserRouter>
    <Header/>
    
    <Routes>
     
      <Route path='/' element={<Home/>}/>
      <Route path='/resources' element={<Resources/>}/>
     
     {/* // SEARCH ROUTES */}
      <Route path='/lastName' element={<Suspense fallback={<p>Loading ...</p>}><LastName/></Suspense>}/>
      <Route path='/all' element={<Suspense fallback={<p>Loading...</p>}><AllApplications/></Suspense>}/>
      <Route path='/ranks' element={<Suspense fallback={<p>Loading Applications</p>}><Rank/></Suspense>}/>
      <Route path='/zipcode' element={<Suspense fallback={<p>Loading Applications</p>}><Zipcode/></Suspense>}/>
      <Route path='/areacode' element={<Suspense fallback={<p>Loading Applications</p>}><Areacode/></Suspense>}/>
     
     {/* // JWT ROUTES */}
      <Route path='/signup' element={<Signup />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/profile' element={<Protect><Profile /></Protect>}/>
      {/* <Route path='/profile' element={<Profile />}/> */}
      

      {/* CRUD ROUTES */}
      <Route path='/create' element={<CreateApp/>}/>
      <Route path='/update' element={<UpdateApp/>}/>
      <Route path='/delete' element={<DeleteApp/>}/>
      <Route path='/read' element={<ReadApp/>}/>



    {/* EXTRAS */}
    <Route path='/contribute' element={<Contribute />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/help' element={<StateHelp />}/>
    <Route path='/information' element={<Information/>}/>
    <Route path='/updates' element={<Updates />} />

    </Routes>

    <Footer/>
    </BrowserRouter>
    </Context.Provider>
   )
}

export default App
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";
import Create from '../assets/Create.png'
import Update from '../assets/Update.png'
import Read from '../assets/Read.png'
import Delete from '../assets/Delete.png'

export default function Profile(){
    const {setUsername,setPassword,setLogin}=useContext(Context)
    const navigate = useNavigate()

        function handleLogout(){
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        setLogin(false)
        setUsername("")
        setPassword("")
        navigate('/')
    }
    return(
        <>
           <div className=" border border-gray-500 max-w-md p-6 mt-6 mx-auto"> 
            <h1 className="text-center font-bold text-xl">Welcome</h1>
            <p className="text-center">#username here</p>
            </div>
             
             {/*  CARDS */}
             <div className="bg-white" id='resources'>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">Actions</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            
            {/* CREATE APP */}
            <div className="group relative">
              <img
                src= {Create}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 font-bold">
                    <a href="" target='_blank'>
                      <span aria-hidden="true" className="absolute inset-0" />
                      CREATE AN APPLICATION
                    </a>
                  </h3>
                    <p className="mt-1 text-sm text-gray-500">placeholder text</p>
                </div>
                
              </div>
            </div>
          
          {/* UPDATE APP */}
               <div className="group relative">
              <img
                src={Update}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 font-bold">
                    <a href="" target='_blank'>
                      <span aria-hidden="true" className="absolute inset-0" />
                      UPDATE AN APPLICATION
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">placeholder text</p>
                </div>
              </div>
            </div>

            {/* DELETE APPLICATIONS */}
                 <div className="group relative">
              <img
                src={Delete}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 font-bold">
                    <a href="" target='_blank'>
                      <span aria-hidden="true" className="absolute inset-0" />
                      DELETE AN APPLICATION
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">placeholder text</p>
                </div>
              </div>
            </div>

            {/*  READ APPLICATIONS MADE */}
                 <div className="group relative">
              <img
                src={Read}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 font-bold">
                    <a href="" target='_blank'>
                      <span aria-hidden="true" className="absolute inset-0" />
                      READ ALL APPLICATIONS
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">placeholder text</p>
                </div>
              </div>
            </div>


        </div>
      </div>
    </div>

          
        
          
           




        <button onClick={handleLogout} className="text-red-500 text-center">Logout</button>
        </>
     
    )
}


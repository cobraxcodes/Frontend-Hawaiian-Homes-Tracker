import Create from '../assets/Create.png'
import Update from '../assets/Update.png'
import Read from '../assets/Read.png'
import Delete from '../assets/Delete.png'
import {Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../Context'



export default function Profile(){
  const {username} = useContext(Context)
    return(
        <>
           <div className="max-w-md p-6 mt-6 mx-auto"> 
            <h1 className="text-center font-bold text-7xl">Welcome</h1>
            <p className="text-center text-3xl mt-4">{username}</p>
            </div>
             
             {/*  CARDS */}
             <div className="bg-white" >
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-15 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">Actions</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            
            {/* CREATE APP */}
            <div className="group relative">
              <a href='/create'>
              <img
                src= {Create}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              </a>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 font-bold">
                    <Link to='/create'>
                      <span aria-hidden="true" className="absolute inset-0" />
                      CREATE AN APPLICATION
                   </Link>
                  </h3>
                    <p className="mt-1 text-sm text-gray-500">Enter information from your DHHL application and we will track it for you</p>
                </div>
                
              </div>
            </div>
          
          {/* UPDATE APP */}
               <div className="group relative">
                <a href='/update'>
              <img
                src={Update}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              </a>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 font-bold">
                    <Link to="/update">
                      <span aria-hidden="true" className="absolute inset-0" />
                      UPDATE AN APPLICATION
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Update any previously submitted application</p>
                </div>
              </div>
            </div>

            {/* DELETE APPLICATIONS */}
                 <div className="group relative">
                  <a href='/delete'>
              <img
                src={Delete}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              </a>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 font-bold">
                    <Link to="/delete">
                      <span aria-hidden="true" className="absolute inset-0" />
                      DELETE AN APPLICATION
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Delete your applications submitted</p>
                </div>
              </div>
            </div>

            {/*  READ APPLICATIONS MADE */}
                 <div className="group relative">
                  <a href='/read'>
              <img
              href= '/create'
                src={Read}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              </a>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 font-bold">
                    <Link to="/read">
                      <span aria-hidden="true" className="absolute inset-0" />
                      VIEW ALL APPLICATIONS
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">View all applications submitted</p>
                </div>
              </div>
            </div>


        </div>
      </div>
    </div>
        </>
     
    )
}


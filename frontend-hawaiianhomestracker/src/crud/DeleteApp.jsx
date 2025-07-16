import axios from "axios"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom'
import { useQuery } from "@tanstack/react-query";
 

export default function DeleteApp(){
    const token = localStorage.getItem('token')
    const [applications, setApplications] = useState([])
    const navigate = useNavigate()

    const fetchData = async() =>{
        const URL = "https://hawaiian-homes-tracker.onrender.com/applications/user/posts"
        const res = await axios.get(URL, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(res.data.applications)
        setApplications(res.data.applications)
        return res.data.applications
        
    }


    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['applicationsByUser'],
        queryFn: fetchData
    })

    console.log(token)
    const handleDelete = async(userCreatedApplicationId) =>{
        if(!userCreatedApplicationId){
            toast.error('Delete failed. Please try again later')
             return 
            }

             try{
                  const URL = `https://hawaiian-homes-tracker.onrender.com/applications/user/posts/${userCreatedApplicationId}`
                await axios.delete(URL, {
            headers:{
                'Authorization': `Bearer ${token}`
            }

        })
       toast.success("Application deleted!")  
       setTimeout(() =>{
         navigate('/read')
       }, 3000)
       
             }catch(error){
                console.log(error)
                alert("Delete failed!")
             }
      
    }
    
    
    return(
        <>
        <div className="mb-8 text-center">
       <h1 className="text-3xl font-bold text-gray-900  mt-24">Delete An Application</h1>
       </div>
 

     <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 min-h-[calc(78vh-200px)]">

    {/* Loading / Error States */}
    {isLoading && <p className="text-center">Finding Submitted Applications </p>}
    {isError && (
      <p className="text-red-600 text-center">
        {error.response?.status === 404
          ? "Please submit an Application to get started"
          : "Something went wrong. Please try again later."}
      </p>
    )}
    {data?.length === 0 && <p className="text-center text-xl ">Please <span><Link to='/create'className="underline font-bold">create</Link></span> an application to get started</p>}


    {/* Applications Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
      {!isLoading &&
        !isError &&
        data?.map((app) => (
          <div key={app._id} className="bg-white p-6 rounded-lg shadow border">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Name: {app.name}</h2>
            <p className="text-gray-700">
              <span className="font-semibold">Application Date:</span>{" "}
              {new Date(app.applicationDate).toLocaleDateString()}
            </p>
            <p className="text-gray-700"><span className="font-semibold">Area Code:</span> {app.areaCode}</p>
            <p className="text-gray-700">
              <span className="font-semibold">Rank:</span> {app.rank}
            </p>
            <p className="text-gray-700"><span className="font-semibold">Zipcode:</span> {app.zipcode}</p>

            <div className="text-right " onClick={() => handleDelete(app.userCreatedApplicationId)}>
                <button data-cy='delete-btn' className="mt-12 flex w-full justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Delete</button>
                </div>
          </div>
        ))}
    </div>
      </div>
            <ToastContainer/>
        </>
    )
}

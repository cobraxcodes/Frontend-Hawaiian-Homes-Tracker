import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

export default function AllApplications(){
        const [page, setPage]=useState(1)
    const URL = `https://hawaiian-homes-tracker.onrender.com/applications?page=${page}&limit=21`
    const {data, isLoading, isError,error}=useQuery({
        queryKey:['applications', page],
        queryFn: async() => await axios.get(URL).then(res => res.data)
    })

    useEffect(() =>{
        if(data){
            console.log(data)
        }
    },[data])

      function handlePaginationNext(e){
    e.preventDefault()
    setPage(page + 1)
   }

   function handlePaginationPrev(e){
    e.preventDefault()
    setPage(page - 1)
   }


    return(
        <>
         <div className="mb-8 text-center">
       <h1 className="text-3xl font-bold text-gray-900  mt-24">All Applications</h1>
       </div>

        {isLoading && <p className="text-center">Please wait. Applications Loading...</p>}
        {isError && (<p className="text-red-600 text-center">{error.response?.status === 404? "No applications found": "Error fetching applications."}</p>)}


        {/* APPLICATIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {!isLoading && !isError &&
        data?.applications.map((app) =>(
              <div key={app._id} className="bg-white p-4 rounded-lg shadow border">
              <h2 className="text-lg font-bold text-gray-900 mb-2 text-center">Name: {app.name}</h2>
              <p className="text-gray-700 text-center">
              <span className="font-semibold">Application Date:</span>{" "}
              {new Date(app.applicationDate).toLocaleDateString()}
              </p>
              <p className="text-gray-700 text-center"><span className="font-semibold">Rank:</span> {app.rank}</p>
              <p className="text-gray-700 text-center"><span className="font-semibold">Zipcode:</span> {app.zipCode}</p>
          </div>
        ))}
        </div>

        <div className="flex items-center gap-24 justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <button onClick={handlePaginationPrev} disabled={page === 1} className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</button>
            <button onClick={handlePaginationNext} className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</button>
        </div>

        </>
    )
}
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from 'axios'



export default function RankSearch(){
    const[page,setPage]=useState(1)
    const URL = `https://hawaiian-homes-tracker.onrender.com/applications?page=${page}&limit=20`
    const {data,isLoading,isError}=useQuery({
    queryKey: ['rank', page],
    queryFn: async () => await axios.get(URL).then(res => res.data),
    refetchOnWindowFocus: false,
    keepPreviousData: true,
})


    function handleNext(e){
        e.preventDefault()
        setPage(page + 1)
    }
    function handlePrev(e){
        e.preventDefault()
        setPage(page - 1)
    }

    return(
          <>
       <div className="mb-8 text-center">
       <h1 className="text-3xl font-bold text-gray-900  mt-24">Search By Rank</h1>
       </div>
 

    {/* Loading / Error States */}
    {isLoading && <p className="text-center">Loading Applications by Rank</p>}
    {isError && <p className="text-red-600 text-center">"Error fetching applications."</p>}


    {/* Applications Grid */}
    <div className="grid grid-cols-1 md:grid-cols-1 gap-2 text-center">
      {!isLoading &&
        !isError &&
        data?.applications?.map((app) => (
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
          </div>
        ))}
    </div>


    <div className="flex items-center gap-24 justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
    <button onClick={handlePrev} disabled={page === 1} className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Prev</button>
    <button onClick={handleNext}  className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</button>
   </div>
 


    </>
        
    )


}



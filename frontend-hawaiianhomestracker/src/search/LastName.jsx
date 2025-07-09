import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import { useState } from "react";
export default function LastName(){
    const[lastname, setLastName]=useState("")
    const[input, setInput]=useState("")
    const[page,setPage]=useState(1)

    
    //create function here to pull all applications if there is not user input(lastname)
   const fetchData = async(lastname,page)=>{
    if(!lastname){
        const res = await axios.get(`https://hawaiian-homes-tracker.onrender.com/applications?page=${page}&limit=20`)
        return res.data.applications
    }else{
        const res = await axios.get(`https://hawaiian-homes-tracker.onrender.com/applications/lastname/${lastname}`)
        return res.data.applications
    }
   }

   // use usequery here
   const {data,isLoading,isError,error} = useQuery({
    queryKey: ['applications', input, page],
    queryFn: () => fetchData(input,page),
    refetchOnWindowFocus: false,
    keepPreviousData: true
   })

   //create onSubmit function on form
   function handleInput(e){
    e.preventDefault()
    setInput(lastname.trim())
   }

   function handlePaginationNext(e){
    e.preventDefault()
    setPage(page + 1)
   }

   function handlePaginationPrev(e){
    e.preventDefault()
    setPage(page - 1)
   }



// if(isLoading)return<p>Currently Loading Applications ...</p>
// if(isError)return<p>Error fetching data</p>

    return (
         <>
       <div className="mb-8 text-center">
       <h1 className="text-3xl font-bold text-gray-900  mt-24">Search By Last Name</h1>
       </div>
 

    {/* Search Form */}
     <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <form className="max-w-md mx-auto mb-12" onSubmit={handleInput}>
      <label htmlFor="lastname-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
        Search Last Name
      </label>
      <div className="relative">
        <input
          type="search"
          id="lastname-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter last name..."
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>


    {/* Loading / Error States */}
    {isLoading && <p className="text-center">Currently Loading Applications ...</p>}
    {isError && (
      <p className="text-red-600 text-center">
        {error.response?.status === 404
          ? "No applications found"
          : "Error fetching applications."}
      </p>
    )}


    {/* Applications Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {!isLoading &&
        !isError &&
        data?.map((app) => (
          <div key={app._id} className="bg-white p-6 rounded-lg shadow border">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Name: {app.name}</h2>
            <p className="text-gray-700">
              <span className="font-semibold">Application Date:</span>{" "}
              {new Date(app.applicationDate).toLocaleDateString()}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Rank:</span> {app.rank}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Zipcode:</span> {app.zipCode}
            </p>
          </div>
        ))}
    </div>


        {!input && ( <div className="flex items-center gap-24 justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
    <button onClick={handlePaginationPrev} disabled={page === 1} className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Prev</button>
    <button onClick={handlePaginationNext}  className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</button>
  </div>)}
 

      </div>
    </>
)
}
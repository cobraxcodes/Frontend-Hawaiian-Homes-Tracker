import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import { useEffect, useState } from "react";
export default function LastName(){
    const[lastname, setLastName]=useState("")
    const[results, setResults]=useState([])
    const URL = "https://hawaiian-homes-tracker.onrender.com/"
    const {data, isLoading, isError} = useQuery({
        queryKey: ['applications'],
        queryFn: async() => await axios.get(URL).then(res => res.data),
        refetchOnWindowFocus: false
    })

    useEffect(() =>{
        if(data){
            console.log(data)
        }
    }, [data])

    const handleLastName = (e) =>{
        e.preventDefault()
        if(data && lastname){
            const filtered = data.applications.filter(app => app.nha.toLowerCase().includes(lastname.toLowerCase())
        )
        setResults(filtered)
        }
    }
      if(isLoading) return <p> Loading ... </p>
    if(isError) return <p>Error fetching data</p>

    return(
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div>
            <form className="max-w-md mx-auto" onSubmit={handleLastName}>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        </div>
        <input type="search" 
        id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Nihipali ..." required 
           />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
        </div>

        <div className="grid grid-cols=1 md:grid-cols-2 gap-6 mt-8">
            {results.length > 0 ? (
                results.map((app) =>(
                    <div key={app._id} className="bg-white p-6 rounded-lg shadow border">
                        <h2 className="text-lg font-bold text-gray-900 mb-2">Name: {app.name}</h2>
                        <p>Application Date: {app.applicationDate}</p>
                        <p>Rank: {app.rank}</p>
                        <p>Zipcode:{app.zipCode}</p>
                        </div>
                ))
            ):(
                data.applications.map((app) => (
                    <div key={app._id} className="bg-white p-6 rounded-lg shadow border">
                        <h2 className="text-lg font-bold text-gray-900 mb-2">Name: {app.name}</h2>
                        <p className="text-gray-700"><span className="font-semibold">Application Date:</span> {new Date (app.applicationDate).toLocaleDateString()}</p>
                        <p>Rank: {app.rank}</p>
                        <p>Zipcode:{app.zipCode}</p>
                 </div>
                ))
            )}
        </div>
        </div>
    
    )
}
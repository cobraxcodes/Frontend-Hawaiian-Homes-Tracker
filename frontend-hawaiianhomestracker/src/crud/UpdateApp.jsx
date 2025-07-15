import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function UpdateApp(){
   const token = localStorage.getItem('token')

    const fetchData = async() =>{
        const URL = "https://hawaiian-homes-tracker.onrender.com/applications/user/posts"
        const res = await axios.get(URL, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        return res.data.applications
    }


    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['applicationsByUser'],
        queryFn: fetchData
    })

    
    
    return(
        <>
        <div className="mb-8 text-center">
       <h1 className="text-3xl font-bold text-gray-900  mt-24">Update An Application</h1>
       </div>
 

     <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

    {/* Loading / Error States */}
    {isLoading && <p className="text-center">Finding Submitted Applications </p>}
    {isError && (
      <p className="text-red-600 text-center">
        {error.response?.status === 404
          ? "Please submit an Application to get started"
          : "Something went wrong. Please try again later."}
      </p>
    )}


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

            <div className="text-right ">
                <button className="mt-12 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update</button>
                </div>
          </div>
        ))}
    </div>
      </div>
        </>
    )
}

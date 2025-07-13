import { useContext, useEffect, useState } from 'react'
import { Context } from '../Context'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



export default function CreateApp(){
    const {fullname,setFullname,date,setDate,area,setArea,rank,setRank,zipcode,setZipcode}=useContext(Context)
    const token = localStorage.getItem('token')
    const [firstname, setFirstname]=useState("")
    const [lastname, setLastname]=useState("")
    const [error,setError]=useState("")
    const [success, setSuccess]=useState("")
    const navigate = useNavigate()

    const handleCreate = async(e) =>{
        e.preventDefault()
         const name = `${lastname}, ${firstname}`.trim()
            setFullname(name)
        try{
            if(name.length < 3 ){
                setError ('name must be longer than 3 characters')
                return
            }
            if(date.length < 8){
                setError('date must be longer than 3 characters')
                     return
            }
            if(area.length < 3){
                setError('areacode must be 3 digits')
                     return
            }
            if(rank.length < 2){
                setError('Rank must be more than 2 digits')
                     return
            }
            if(zipcode.length !== 5){
                setError('zipcodes must have 5 digits')
                     return
            }

            const URL = "https://hawaiian-homes-tracker.onrender.com/applications/new"
            const res = await axios.post(URL, {
             name: name,
             applicationDate: new Date(date),
             areaCode: Number (area),
             rank,
             zipcode
            },{
                headers: {
                    'Content-type':'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            
           
            
             setSuccess('Application created successfully')
             setError('')
              setTimeout(() =>{
            navigate('/read')
            }, 3000)

        }catch(error){
            console.error(error.message)
        }
    }

                useEffect(() =>{
                console.log(`name on app: ${fullname}`)
            }, [fullname])

       
    return(
      <>
      <div className='text-center font-bold '>
        <h1 className='mt-14 text-center text-3xl/9 font-bold tracking-tight text-gray-900'>Submit an application for tracking</h1>
        <p className='text-red-600 text-4xl mt-6'>DISCLAIMER:</p>
        <p className='text-red-400 mt-4'>This application submission is not an official application to the Department of Hawaiian Home Lands (DHHL). To apply for Hawaiian Home Lands, please visit the <span><a href='https://dhhl.hawaii.gov/applications/applying-for-hawaiian-home-lands/' className='text-red-600 underline '>official DHHL website</a></span> by clicking the provided link. As of 2025, applications must still be submitted by mail or in person.

The sole purpose of this website is to  <span className='font-bold text-red-600'> only help applicants track the status of their Hawaiian Home Lands application and receive updates as DHHL publishes new applicant lists.</span> This service is independently owned and operated, and is not affiliated with DHHL in any capacity.

We are committed to protecting your privacy and will never sell, share, or misuse any personal information you submit through this site. Before using this tracking tool, please ensure you have already applied through DHHL and have the required information available as requested below.</p>
        </div>
        <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
            <form className='space-y-4' onSubmit={handleCreate}>
                <div className=' flex flex-wrap gap-4 mt-4'>

                    {/* First Name */}
                 <h3 className='font-bold'>First Name</h3>
                <input type='text' value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="Jane " className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'/>
                
                {/* Last Name */}
                <h3 className='font-bold'>Last Name</h3>
                <input type='text' value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder='Doe' className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'/>
             
                {/* Application Date */}
                 <div className='flex flex-col w-64 ml-12'>
                <h3 className='font-bold '>Application Date</h3>
                <input type='date' value={date} onChange={(e) => setDate(e.target.value)} placeholder='7-11-1998'className='block w-64 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'/>
                </div>

                    {/* RANK */}
                  <div className='flex flex-col w-64 ml-12'>
                <h3 className='font-bold'>Rank </h3>
                <input type='text' value={rank} onChange={(e) => setRank(e.target.value)} placeholder='213' className='block w-64 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'/>
                </div>

                    {/* AREA CODE */}
                <div className='flex flex-col w-64 ml-12'>
                <h3 className='font-bold'>Area Code</h3>
                <input type='number' value={area} onChange={(e) => setArea(e.target.value)} placeholder='913' className='block w-64 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'/>
               </div>

                {/* ZIP CODE */}
                   <div className='flex flex-col w-64 ml-12'>
                <h3 className='font-bold'>Zipcode</h3>
                <input type='text' value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder='96701' className='block w-64 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'/>
                </div>  
                </div>

                <div className='flex justify-center'>
                    <button type='submit' className='flex w-64 mt-12 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Submit</button>
                </div>
            </form>
        </div>

        <div className='text-center font-bold'>
        {success? <p>{success}</p>:<p className='text-red-600'>{error}</p>}
        </div>

     
        </>
    )
}
import {useQuery} from '@tanstack/react-query'
import { useState } from 'react'
import axios from 'axios'



export default function AreaCode(){
    const [area, setArea]=useState("")
    const [input,setInput]=useState("")
    const [page,setPage]=useState(1)


    const fetchData = async () =>{
        if(!area){
            const res = await axios.get(`https://hawaiian-homes-tracker.onrender.com/applications?page=${page}&limit=20`)
            return res.data.applications
        }else{
            const res = await axios.get()
        }
    }
}
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data=useLoaderData()
 /*   const[data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Arpit-raj9891')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[]) */
  return (
    <div className='text-center m-4 bg-yellow-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader=async()=>{     //syntax of loader
    const response=await fetch('https://api.github.com/users/Arpit-raj9891')
    return response.json()
}
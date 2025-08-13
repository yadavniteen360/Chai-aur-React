import React from 'react'
import {useState,useEffect} from 'react'
function GitHub() {
    const [data,setData] = useState([])
     useEffect(()=>{
    fetch(`https://api.github.com/users/yadavniteen360`)
    .then((res)=>res.json())
    .then((data)=>{
    console.log(data);
        setData(data);
     });
},[])
  return (
    <div className='text-center bg-gray-700 text-3xl text-white p-2 m-2'>GitHub Followers:{data.followers}
 <img  src={data.avatar_url} alt="Git Picture" width={300}/> </div>
)
}

export default GitHub
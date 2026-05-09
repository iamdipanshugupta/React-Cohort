import  { useEffect, useState } from 'react'

const SpecialChai = () => {

    const [menu, setMenu] = useState(null);
    const [error , setError] =useState(null);
    const [loading , setLoading] = useState(true);

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/menu`)
        .then((response)=>{
            if(!response.ok){
                throw new Error("your network is not ok")
            }
            return response.json()
        })
        .then((data)=>(
            setMenu(data),
            setLoading(false)
        ))
        .catch((error)=>(
            setError(error),
            setLoading(false)
        ))
    },[])
  return {menu , error, loading}
}

export default SpecialChai

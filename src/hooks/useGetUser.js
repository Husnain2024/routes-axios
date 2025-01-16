import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

export const UseGetUser = () =>{
    const[user,setUser]=useState(null);
    
    useEffect(()=>{
        const getUser = onAuthStateChanged(auth,(user)=>{
            if (user) {
                setUser(user);
            }else{
                setUser(null);
            }
        })
        return () => getUser();
    },[])
    
    return {user}
}
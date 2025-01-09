import axios from "axios";
import { useEffect, useState } from "react";

const UseFetchData = (APIURL,reLoad) =>{

console.log(APIURL);


    const[data,setData]=useState(null);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState("");

    const getPostData = async () => {
        setLoading(true)
        try {
            const res = await axios.get(APIURL);
            if (res.status === 200) {
                setLoading(false)
                setError("");
                setData(res.data ?? [])
            }
            
        } catch (error) {
            setError("Something went wrong");
            console.error(error);
            setLoading(false)
    
        }
    }
    
    
    useEffect(()=>{
        if (APIURL) {
            getPostData();
        }
    },[APIURL,reLoad])
    
    return {data,loading,error}
}
export default UseFetchData;


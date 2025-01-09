import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';

const CreatePost = ()  =>{

    const[formData,setFormData]=useState({
        title:"",
        author:"",
        description:""
    });

    const[error,setError]=useState("");

    const navigate = useNavigate();

    const params = useParams();
    console.log(params,"params");
    

    
    
const handleInputChange = (e) =>{
    const value = e.target.value;
    const name = e.target.name;
    setFormData({
        ...formData,
        [name]:value
    })
}
const APIURL = `https://676abac0863eaa5ac0df6fca.mockapi.io/post`
console.log(APIURL);

const getPostById = async () => {
    try {
        const res = await axios.get(`${APIURL}/${params.id}`);
        const{title,author,description}=res.data;
        setFormData({
            title:title,
            author:author ,
            description:description
        })
        
    } catch (error) {
        console.error(error);
        
    }
}

useEffect(()=>{
    if (params.id) {
        getPostById();
    }
},[params?.id])


const handleSubmit = async (e) => {
    e.preventDefault();
    if ((formData.title !== "") && (formData.author !== "") && (formData.description !== "") ) {
        
        // agar ap k pass id ho gi
        if (params.id) {
            console.log("edit ho gaya hai");    
            const res = await axios.put(`${APIURL}/${params.id}`,formData)
            
            if (res.status === 201 || res.status === 200) {
                toast.error("Edit ho gaya hai"); 
                setFormData({
                        title:"",
                        author:"",
                        description:""
                    }
                )   
                // navigate('/blogs');
            }
        }
        else{
            const res = await axios.post(APIURL,formData)
            console.log("add ho gaya hai");
            
            // agar id nahe ho gi jab create ho ga
            if (res.status === 201) {
                toast.success("Add ho gaya hai"); 
                setFormData({
                        title:"",
                        author:"",
                        description:""
                    }
                )
                // setTimeout(navigate('/blogs'), 1000);
    
            }
        }
        
        setError("")
    }else{
        setError("Field should not be empty");
    }
}

    return(<>

        <h2>{params.id ? "Edit Post" : "Create Post"}</h2>
        <form onSubmit={handleSubmit}>
        {error && <h3 style={{textAlign:"center"}}>{error}</h3>}
    
            <div>
                <label>Post Name</label>
                <input type="text" onChange={handleInputChange} name="title" value={formData.title}/>
            </div>
            <div>
                <label>Author Name</label>
                <input type="text" onChange={handleInputChange}  name="author" value={formData.author}/>
            </div>
            <div>
                <label>Discription</label>
                <textarea name="description" onChange={handleInputChange} value={formData.description} ></textarea>
            </div>
            <div>
                <input className="submit_btn" type="submit"  />
            </div>
        </form>
        <ToastContainer />


        </>)
}

export default CreatePost;
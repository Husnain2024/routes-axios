import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CreatePost = ()  =>{

    const[formData,setFormData]=useState({
        title:"",
        author:"",
        description:""
    });

    const[error,setError]=useState("");

    const navigate = useNavigate();

    const parms = useParams();
    
    console.log(formData,"formdata");
    
    
const handleInputChange = (e) =>{
    const value = e.target.value;
    const name = e.target.name;
    setFormData({
        ...formData,
        [name]:value
    })
}
const APIURL = "https://676abac0863eaa5ac0df6fca.mockapi.io/post"

const getPostData = async () => {
    try {
        const res = await axios.get(`${APIURL}/${parms.id}`);
        if (res.status === 200) {
            setFormData(res.data )
        }
        
    } catch (error) {
        console.error(error);

    }
}


useEffect(()=>{
    if (parms.id) {
        getPostData();
    }
},[parms.id])



const handleSubmit = async (e) => {
    e.preventDefault();
    if ((formData.title !== "") && (formData.author !== "") && (formData.description !== "") ) {
        const res = await axios.post(APIURL,formData)
        console.log(res);
        if (res.status === 201) {
            setFormData({
                    title:"",
                    author:"",
                    description:""
                }
            )   
            navigate('/blogs');
        }

        
        setError("")
    }else{
        setError("Field should not be empty");
    }
}

    return(<>

        <h2>Create Post</h2>
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
        </>)
}

export default CreatePost;
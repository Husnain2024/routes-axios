import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

 const ViewPost = () =>{


const[post,setPost]=useState([]);
const[loading,setLoading]=useState(false);
const[error,setError]=useState("");
const[count,setCount]=useState(0);
    
console.log(count);


const APIURL = "https://676abac0863eaa5ac0df6fca.mockapi.io/post"

const getPostData = async () => {
    setLoading(true)
    try {
        const res = await axios.get(APIURL);
        if (res.status === 200) {
            setLoading(false)
            setError("");
            setPost(res.data ?? [])
        }
        
    } catch (error) {
        setError("Something went wrong");
        console.error(error);
        setLoading(false)

    }
}


useEffect(()=>{
    getPostData();
},[])


const handleDeletePost = async (id) => {
    const res = await axios.delete(`${APIURL}/${id}`)
    console.log(res);
    if (res.status == 200) {
        getPostData();
    }
}



if (loading) {
    return(
    <><h2>Loading....</h2></>
    )
}






    return(
        <>
        <h2>Blogs</h2>
        <Link className="add_btn" to="/create-post">Add Post</Link>

        {error && (
            <h2>{error}</h2>
        )}
        {
            post && post.length > 0 && (
                <table border={1}>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Post Title</th>
                    <th>description</th>
                    <th>author</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        post && post.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>{item.author}</td>
                                    <td>
                                        <Link className="action_btn" to={`/create-post/${item.id}`}>Edit</Link>
                                        <button className="action_btn"onClick={()=>handleDeletePost(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </table>
            )
        }
      
        </>
    )
}

export default ViewPost;
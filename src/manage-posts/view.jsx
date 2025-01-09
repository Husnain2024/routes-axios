import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseFetchData from "../hooks/useFetchData";
 const ViewPost = () =>{


    const [reLoad, setReload] = useState(true);

const[count,setCount]=useState(0);
    
console.log(count);


const APIURL = "https://676abac0863eaa5ac0df6fca.mockapi.io/post"

const{loading,error,data}=UseFetchData(APIURL,reLoad);



if (loading) {
    return(
    <><h2>Loading....</h2></>
    )
}

const handleDelPost = async (id) => {
    const res = await axios.delete(`${APIURL}/${id}`);
    if (res.status === 200) {
        setReload((prevReLoad) => !prevReLoad)
    }
    
} 




    return(
        <>
        <h2>Blogs</h2>
        <Link className="add_btn" to="/create-post">Add Post</Link>

        {error && (
            <h2>{error}</h2>
        )}
        {
            data && data.length > 0 && (
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
                        data && data.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>{item.author}</td>
                                    <td>
                                        <Link className="action_btn" to={`/create-post/${item.id}`}>Edit</Link>
                                        <button className="action_btn"onClick={()=>handleDelPost(item.id)}>Delete</button>
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
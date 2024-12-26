import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBook = () =>{
const[formData,setFormData]=useState({
    book_name:"",
    author_name:"",
    price:null
})

const[loading,setLoading]=useState(false)

const[msg,setMsg]=useState("");

const navigate = useNavigate()

const handleInputChange = (e) =>{
    const value = e.target.value;
    const name = e.target.name;
    
    setFormData({
        ...formData,
        [name]:value
    })
    
}



const APIURL = "https://676abac0863eaa5ac0df6fca.mockapi.io/books";

const handleSubmit = async (e) => {
     e.preventDefault()
     setLoading(true)
    const res = await axios.post(APIURL,formData);
    console.log(res,"res");

    if (res.status === 201) {
        setLoading(false)
        setMsg("Added succes")
        setFormData(
            {
                book_name:"",
                author_name:"",
                price:""
            }
            
        )
        // navigate('/books')
    }
    
}


    return(<>

    <h2>Create Book</h2>
    <form onSubmit={handleSubmit}>
    {msg && <h3 style={{textAlign:"center"}}>{msg}</h3>}

        <div>
            <label>Book Name</label>
            <input type="text" onChange={handleInputChange} name="book_name" value={formData.book_name}/>
        </div>
        <div>
            <label>Author Name</label>
            <input type="text" onChange={handleInputChange} name="author_name" value={formData.author_name}/>
        </div>
        <div>
            <label>Price</label>
            <input type="text" onChange={handleInputChange} name="price" value={formData.price}/>
        </div>
        <div>
            <input className="submit_btn" type="submit" value={loading ? "Submiting..." : "Submit"} disabled={loading} />
        </div>
    </form>
    </>)
}

export default CreateBook;
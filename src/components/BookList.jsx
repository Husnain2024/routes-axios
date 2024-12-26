import axios from "axios";
import {useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookList = () =>{
const[bookData,setBookData]=useState([]);
const[loading,setLoading]=useState(false);
const[errorMsg,setErrorMsg]=useState("");

const APIURL = "https://676abac0863eaa5ac0df6fca.mockapi.io/books";

const getBookList = async () => {
    setLoading(true);
    try {
        const res = await axios.get(APIURL);

        if (res.status === 200) {
            setLoading(false);
            setBookData(res.data);
            setErrorMsg("");
        }
        
    } catch (error) {
        const{data}=error.response;        
        setErrorMsg(data)
        setLoading(false);

    }
}



useEffect(()=>{
    getBookList();
},[])



if (loading) {
    return (
        <>
        <h2>Loading...</h2>
        </>
    )
}



    return(
        <>
        <h2>Book List</h2>
    <Link className="add_btn" to="/create-book">Add Book</Link>
        {errorMsg && <h3 style={{textAlign:"center"}}>{errorMsg}</h3>}
        {bookData && bookData.length > 0 && 
        <table border={1}>
            <thead>
            <tr>
                <th>Id</th>
                <th>Book Name</th>
                <th>Author Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
                {
                    bookData && bookData.map((item,index)=>{
                        return(
                            <>
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.book_name}</td>
                                <td>{item.author_name}</td>
                                <td>{item.price}</td>
                            </tr>
                            </>
                        )
                    })
                }
                
            </tbody>
        </table>
        }
        </>
    )
}


export default BookList;
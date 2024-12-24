import axios from "axios"
import { useEffect, useState } from "react";

const BookList = () =>{
const[bookData,setBookData]=useState([]);

console.log(bookData,"bookData");


const ApiUrl = "https://676abac0863eaa5ac0df6fca.mockapi.io/books";





useEffect(()=>{
 

    const getBookList = async () =>{
       
        try {
            const res = await axios.get(ApiUrl);
            setBookData(res.data)
        } catch (error) {
            console.log(error);
            
        }
    }

    getBookList();
},[])


    return(
        <>
        <h2>Book List</h2>
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
        </>
    )
}


export default BookList;
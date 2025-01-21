import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDocs,collection } from "firebase/firestore";
import { db } from "../firebase/config";

const ViewProducts = () => {
const[products,setProducts]=useState([])
console.log(products);


    const data = [];



const getProductData = async () => {
    try {
        const res = await getDocs(collection(db,'products'));
        console.log(res,"res");
        

const products = res.docs.map((doc)=>{
    return({
        id:doc.id,
        ...doc.data() 
    })
})

setProducts(products);

    } catch (error) {
        console.log(error);
        
    }
}

useEffect(()=>{
    getProductData();
},[])


    
    return(
        <>
        <h2>Blogs</h2>
        <Link className="add_btn" to="/create-product">Add products</Link>

        <table border={1}>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>products Title</th>
                    <th>description</th>
                    <th>products</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        products && products.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.discription}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <Link className="action_btn" to={`/create-post/${item.id}`}>Edit</Link>
                                        <button className="action_btn" >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </table>
        </>
    )
}
export default ViewProducts;
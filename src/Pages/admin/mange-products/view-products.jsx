import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { toast, ToastContainer } from "react-toastify";

const ViewProducts = () => {

    const [products, setProducts] = useState([])

    const getProductData = async () => {
        try {
            const res = await getDocs(collection(db, 'products'));
            console.log(res, "res");


            const products = res.docs.map((doc) => {
                return ({
                    id: doc.id,
                    ...doc.data()
                })
            })
console.log(products,"products");

            setProducts(products);

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getProductData();
    }, [])



    const handleDelete = async (Id) => {
        try {
            await deleteDoc(doc(db, 'products', Id));
            toast.success("deleted")
            getProductData();
        } catch (error) {
            console.log(error);

        }
    }



    return (
        <>
            <h2>Blogs</h2>
            <Link className="add_btn" to="/create-product">Add products</Link>
            <div className="p-5">
            <table class="table">
            <thead>
                <tr>
                    
                     <th scope="col">Id</th>
                     <th scope="col">products Title</th>
                     <th scope="col">description</th>
                     <th scope="col">products</th>
                     <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
             
                {
                    products && products.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.discription}</td>
                                <td>{item.price}</td>
                                <td>
                                    <Link className="action_btn" to={`/create-product/${item.id}`}>Edit</Link>
                                    <button className="action_btn" onClick={() => handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        
            </div>
            
            <ToastContainer />
        </>
    )
}
export default ViewProducts;
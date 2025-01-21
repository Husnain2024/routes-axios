import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateProduct = () =>{

    const nevigate = useNavigate();

      const[formData,setFormData]=useState({
            name:"",
            price:"",
            discription:""
        });

        const[error,setError]=useState("");

    
        const handleInputChange = (e) =>{
            const value = e.target.value;
            const name = e.target.name;
            setFormData({
                ...formData,
                [name]:value
            })
        }

        console.log(formData,"formData");


        const handleSubmit = async (e) => {
            e.preventDefault();
            if ((formData.name !== "") && (formData.price !== "") && (formData.discription !== "") ) {
                const res = await addDoc(collection(db,'products'),formData)
                console.log(res,"res");
                toast.success("created")
                setFormData({
                    name:"",
                    price:null,
                    discription:""
                })
                nevigate('/products')
                
            }else{
                setError("Field should not be empty");
            }
        }
        

    return(
        <>
        <form onSubmit={handleSubmit}>
        {error && <h3 style={{textAlign:"center"}}>{error}</h3>}
    
            <div>
                <label>Post Name</label>
                <input type="text" onChange={handleInputChange} name="name" value={formData.name}/>
            </div>
            <div>
                <label>price </label>
                <input type="text" onChange={handleInputChange}  name="price" value={formData.price}/>
            </div>
            <div>
                <label>Discription</label>
                <textarea name="discription" onChange={handleInputChange} value={formData.discription} ></textarea>
            </div>
            <div>
                <input className="submit_btn" type="submit"  />
            </div>
        </form>
        <ToastContainer/>
        </>
    )
}


export default CreateProduct;
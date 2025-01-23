import { useEffect, useState } from "react";
import { addDoc, collection, getDoc , doc,updateDoc} from "firebase/firestore";
import { db } from "../firebase/config";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const CreateProduct = () =>{

    const nevigate = useNavigate();
    const params = useParams();
    

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



        const handleSubmit = async (e) => {
            e.preventDefault();
            if ((formData.name !== "") && (formData.price !== "") && (formData.discription !== "") ) {
               
               if (params.id) {


                try {
                    await updateDoc(doc(db,'products',params.id),formData)
                    setFormData({
                     name:"",
                     price:"",
                     discription:""
                 });
                 toast.success("Edit succesfully")
                 setTimeout(function() { 
                     nevigate('/products')
                 }, 1000);
                } catch (error) {
                    console.log(error);
                    
                }
                      
                
                
               }else{
                const res = await addDoc(collection(db,'products'),formData)
             
                setFormData({
                    name:"",
                    price:"",
                    discription:""
                });
                toast.success("Add succesfully")
                setTimeout(function() { 
                    nevigate('/products')
                }, 1000);
               
               }
               
                
                
            }else{
                setError("Field should not be empty");
            }
        }


        const getDataById = async (id) => {
            console.log(id,"check id");
            
            try {
                const res = await getDoc(doc(db,'products',id))
                console.log("Document data:", res.data());

                const product = {
                    ...res.data()
                }

                setFormData(product)
                

            } catch (error) {
                console.log(error);
                
            }
        }



        useEffect(()=>{
            if (params.id) {
                getDataById(params.id);
            }
        },[params.id])


        

    return(
        <>
                <h2>{params.id ? "Edit Product" : "Create Product"}</h2>

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
                <input className="submit_btn" type="submit" value={params.id ? "Edit" : "Submit"}  />
            </div>
        </form>
        <ToastContainer/>
        </>
    )
}


export default CreateProduct;
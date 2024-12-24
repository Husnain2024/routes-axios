import { useState } from "react"
import { Table } from "./Table"

export const Form = () =>{
const[stuList,setStuList]=useState([])

const[formData,setFormData]=useState({
    fname:"",
    lname:"",
    email:"",
    phone:""
})



const handleInput = (e) =>{
    const value = e.target.value;
    const name = e.target.name;

    setFormData({
        ...formData,
        [name]:value
    })

}


const handleSubmit = (e) =>{
    e.preventDefault();
   setStuList([
    ...stuList,
    formData
   ])

   setFormData({
        fname:"",
        lname:"",
        email:"",
        phone:""
    })

}


    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">First Name</label>
                    <input type="text" name="fname" onChange={handleInput} value={formData.fname}/>
                </div>
                <div>
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lname" onChange={handleInput} value={formData.lname} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" name="email" onChange={handleInput} value={formData.email}/>
                </div>
                <div>
                    <label htmlFor="">Phone</label>
                    <input type="text" name="phone" onChange={handleInput} value={formData.phone} />
                </div>
                <input type="submit" value={"submit"}/>
            </form>


           <Table stuList={stuList}/>
        </>
    )
}
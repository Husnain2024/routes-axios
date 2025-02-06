import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { Navigate } from "react-router-dom";

const SignIn = () =>{

const[formData,setformData]=useState({
    email:"",
    password:""
})



const handleInputChange = (e) =>{
    const value = e.target.value;
    const name = e.target.name;
    setformData({
        ...formData,
        [name]:value
    })
}


const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const {email,password} = formData;
        const res = await signInWithEmailAndPassword(auth,email,password)
        console.log(res,"res");

        <Navigate to="/admin"/>
        
    } catch (error) {
        console.log(error);
        
    }
}

    return(
        <>
        <div class="login-page">
            <div class="form">
                <form class="register-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="email address" name="email" onChange={handleInputChange}/>
                <input type="password" placeholder="password" name="password" onChange={handleInputChange}/>
                <button>Login</button>
                <p class="message">Already registered? <a href="#">Sign In</a></p>
                </form>
            </div>
            </div>
        </>
    )
}

export default SignIn;
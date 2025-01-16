import { useState } from "react";
import { createUserWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import { auth, googleprovider } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const SignUp = () =>{

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
        const res = await createUserWithEmailAndPassword(auth,email,password)
        
        console.log(res,"res");
        
    } catch (error) {
        console.log(error);
        
    }
}
const nevigate = useNavigate()

const handleGoogleSignup = async () => {
    try {
        const res = await signInWithPopup(auth,googleprovider)
        console.log(res,"res");
        nevigate('/admin');
        
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
                <button>create</button>
                <p class="message">Already registered? <a href="#">Sign In</a></p>
                <button onClick={handleGoogleSignup}>Signup With Google</button>
                </form>
            </div>
            </div>
        </>
    )
}

export default SignUp;
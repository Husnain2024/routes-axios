import { Outlet } from "react-router-dom"
import Header  from "./componts/Header"
import Footer from "./componts/Footer"
import '../../Pages/Frontend/assets/css/styles.css';



export const FrontLayout = () =>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
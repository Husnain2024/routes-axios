import { NavLink, useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../firebase/config"

export const Header = ()=>{
    const menuList = [
        {
            name:"Home",
            url:"/"
        },
        {
            name:"About",
            url:"/about"
        },
        {
            name:"Services",
            url:"/services"
        },
        {
            name:"Blogs",
            url:"/blogs"
        },
        {
            name:"Books",
            url:"/books"
        },
        {
            name:"Users",
            url:"/users"
        },
        {
            name:"Products",
            url:"/products"
        }
    ]

const nevigate = useNavigate();
const handleLogout = async () => {
    try {
            await signOut(auth);
            nevigate('/login');        
        } catch (error) {
            console.log(error);
            
        }
}

    return(
        <>
        <header>

        <nav>
            <ul>
                {
                    menuList.map((item,index)=>{
                        return(
                            <>
                            <li key={index}>
                                <NavLink to={item.url}>{item.name}</NavLink>
                            </li>
                            </>
                        )
                    })
                }
                
            </ul>
        </nav>

        <div className="btn_wrap">
        <NavLink to={"/register"}>Register</NavLink>
        <NavLink to={"/login"}>Sign In</NavLink>
        </div>
        <button onClick={handleLogout}>Logout</button>
        </header>

        </>
    )
}
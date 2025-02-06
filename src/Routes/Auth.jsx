import { AuthLayout } from "../Layouts/Auth";
import SignIn from "../Pages/auth/signin";
import UnProtedtedRoute from "../protected/UnProtedtedRoute";


export const AuthRoute = [
    {
        element:<UnProtedtedRoute/>,
        children:[
            {
                path:"/login",
                element:<SignIn/>
            },
            {
                path:"*",
                element:"404"
            }
        ]
    }
]
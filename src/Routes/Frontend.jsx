import { FrontLayout } from "../Layouts/Frontend";
import About from "../Pages/Frontend/About/about";
import Home from "../Pages/Frontend/Home";


export const FrontendRoute = [
    {
        element:<FrontLayout/>,
        children:[
                {
                    
                    path: '/',
                    element: <Home/>,
                },
                {
                    
                    path: '/about',
                    element: <About/>,
                }
            ]
    }
]
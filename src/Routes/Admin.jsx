import Dashboard from "../Components/dashboard";
import {AdminLayout} from '../Layouts/Admin'
// import ViewProducts from "../mange-products/view-products";

export const AdminRoute = [
    {
        element:<AdminLayout/>,
        children:[
                {
                    
                    path: '/admin',
                    element: <Dashboard/>,
                },
                // {
                    
                //     path: '/products',
                //     element: <ViewProducts/>,
                // }
            ]
    }
]
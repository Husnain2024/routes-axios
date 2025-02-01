import Dashboard from "../Components/dashboard";
import {AdminLayout} from '../Layouts/Admin'
import CreateProduct from "../Pages/admin/mange-products/create";
import ViewProducts from "../Pages/admin/mange-products/view-products";

export const AdminRoute = [
    {
        element:<AdminLayout/>,
        children:[
                {
                    
                    path: '/admin',
                    element: <Dashboard/>,
                },
                {
                    
                    path: '/products',
                    element: <ViewProducts/>,
                },
                {
                    
                    path: '/create-product',
                    element: <CreateProduct/>,
                }
            ]
    }
]
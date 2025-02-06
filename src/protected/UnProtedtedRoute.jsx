import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const UnProtedtedRoute = () =>{
    const [user,loading] = useAuthState(auth);
    
if (loading) {
    return "Loading..."
}
if (user) {
    console.log("11");
    
    return <Outlet/> 
 }else{
    console.log("12");

     return  <Navigate to="/login"/>;
 }
    
    
}
export default UnProtedtedRoute;
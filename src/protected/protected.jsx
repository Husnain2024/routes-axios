import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { Navigate, Outlet } from 'react-router-dom';

const ProtedtedRoute = () =>{
    const [user,loading] = useAuthState(auth);
    console.log(user,"user");
    
if (loading) {
    return "Loading..."
}


if (user) {
   return <Outlet/> 
}else{
    return  <Navigate to="/login"/>;
}
    
    
}
export default ProtedtedRoute;
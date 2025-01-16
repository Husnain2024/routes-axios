import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { Navigate } from 'react-router-dom';

const ProtedtedRoute = ({children}) =>{
    const [user] = useAuthState(auth);
    console.log(user,"user");
    
    
 if(!user){
    return(
        <Navigate to="/login"/>
    )
 }else{
    return children;
 }

    
}
export default ProtedtedRoute;
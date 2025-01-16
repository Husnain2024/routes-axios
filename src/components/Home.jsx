import { useState } from 'react';
import { UseGetUser } from '../hooks/useGetUser';
export const Home = ()=>{

    const{user}=UseGetUser();    

console.log(user,"test");

    
    return (
      <>Welcome {user?.displayName}</>
    );
}


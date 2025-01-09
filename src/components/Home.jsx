import { useState } from 'react';
export const Home = ()=>{

        const [reLoad, setReload] = useState(true);
        console.log(reLoad);
        

const handleClick = () => setReload((prevReLoad) => !prevReLoad)


    
    return (
      <div className="grid place-items-center h-dvh bg-zinc-900/15">
        <button onClick={handleClick}>Notify !</button>
      
      </div>
    );
}


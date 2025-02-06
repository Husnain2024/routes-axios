import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './Routes';
import { RouterProvider } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(process.env.REACT_APP_API_URL);


root.render(
    <RouterProvider router={Router}/> 
);

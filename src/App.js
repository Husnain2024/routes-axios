import './App.css';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { AppRoutes } from './Routes/AppRoutes';
import { ToastContainer } from 'react-toastify';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from './firebase/config';
import ProtedtedRoute from './Routes/ProtectedRoutes';


function App() {



  return (
  <>
            <ProtedtedRoute>
                <Header/>
            </ProtedtedRoute>

  <AppRoutes/>
  </>
  );
}

export default App;

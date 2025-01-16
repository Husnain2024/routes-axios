import './App.css';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { AppRoutes } from './Routes/AppRoutes';
import { ToastContainer } from 'react-toastify';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from './firebase/config';


function App() {



  return (
  <>
  <Header/>
  <AppRoutes/>
  </>
  );
}

export default App;

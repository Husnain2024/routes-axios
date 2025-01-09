import './App.css';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { AppRoutes } from './Routes/AppRoutes';
import { ToastContainer } from 'react-toastify';



function App() {
  return (
  <>
  <Header/>
  <AppRoutes/>
  </>
  );
}

export default App;

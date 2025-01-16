import { Routes,Route } from 'react-router-dom';
import {Home} from '../components/Home'
import {Services} from '../components/Services'
import {About} from '../components/Aboutus'
import Books from '../components/BookList'
import CreateBook from '../components/create-book';
import ViewPost from '../manage-posts/view';
import CreatePost from '../manage-posts/create';
import NotFound from '../components/Notfound';
import SignUp from '../auth/signup';
import SignIn from '../auth/signin';
import Dashboard from '../components/dashboard';
import ProtedtedRoute from './ProtectedRoutes';

export const AppRoutes = () =>{
    return(
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/create-book' element={<CreateBook/>}/>
        <Route path='/blogs' element={
          <ProtedtedRoute>
            <ViewPost/>
          </ProtedtedRoute>
          
          }/>
        <Route path='/create-post/:id?' element={<CreatePost/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/admin' element={
          <ProtedtedRoute>
            <Dashboard/>
          </ProtedtedRoute>
          }/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    )
} 
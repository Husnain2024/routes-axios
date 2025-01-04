import { Routes,Route } from 'react-router-dom';
import {Home} from '../components/Home'
import {Services} from '../components/Services'
import {About} from '../components/Aboutus'
import Books from '../components/BookList'
import CreateBook from '../components/create-book';
import ViewPost from '../manage-posts/view';
import CreatePost from '../manage-posts/create';

export const AppRoutes = () =>{
    return(
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/books' element={<Books/>}/>
        />
        <Route path='/books' element={<Books/>}/>
        <Route path='/create-book' element={<CreateBook/>}/>
        <Route path='/blogs' element={<ViewPost/>}/>
        <Route path='/create-post/:id?' element={<CreatePost/>}/>
      </Routes>
    )
} 
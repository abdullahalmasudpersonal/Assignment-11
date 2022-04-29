
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import Notfound from './Pages/Shared/Notfound/Notfound';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div>
      <Header/>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/register' element={<Register/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/blogs' element={<Blogs/>}></Route>
       <Route path='/*' element={<Notfound/>}></Route>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;

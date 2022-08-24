import './styles/App.css';

import {Routes,Route,} from "react-router-dom";

//pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from './pages/Home';
import Searcher from './pages/Searcher';
import Files from './pages/Files';

export default function App() {
  return (
    <>
      <Routes> 
          <Route index path='/' element={<Home/>} />  
          <Route path='/register' element={<Register/>} /> 
          <Route path='/login' element={<Login/>} />
          <Route path='/buscador' element={<Searcher/>} />
          <Route path='/archivos' element={<Files/>} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  );
}

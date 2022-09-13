import './styles/App.css';

import {Routes,Route,} from "react-router-dom";

//pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from './pages/Home';
import Searcher from './pages/Searcher';
import Files from './pages/Files';
import List from './pages/List'
import Visor from './pages/Visor'
import Docs from './pages/Docs'
import ConexionRed from './pages/ConexionRed';
import ConexionComp from './pages/ConexionComp';
import Profile from './pages/Profile';
import Permiso from './pages/Permiso';

export default function App() {
  return (
    <>
      <Routes> 
          <Route index path='/' element={<Home/>} />  
          <Route path='/register' element={<Register/>} /> 
          <Route path='/login' element={<Login/>} />

          {/* Dentro APP */}
          <Route path='/buscador' element={<Searcher/>} />
          <Route path='/archivos' element={<Files/>} />
          <Route path='/listado' element={<List/>} />
          <Route path='/visor' element={<Visor/>} />
          <Route path='/documentos' element={<Docs/>} />
          <Route path='/conexionred' element={<ConexionRed/>} />
          <Route path='/conexioncomp' element={<ConexionComp/>} />
          <Route path='/perfil' element={<Profile/>} />
          <Route path='/permiso' element={<Permiso/>} />


          <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  );
}

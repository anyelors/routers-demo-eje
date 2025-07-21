import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Inicio from './pages/Inicio';
import SobreNosotros from './pages/SobreNosotros';
import Contacto from './pages/Contacto';
import Formulario from './pages/Formulario';
import Confirmacion from './pages/Confirmacion';
import Buscador from './pages/Buscador';
import RutaProtegidaPorRol from './components/RutaProtegidaPorRol';
import AdminPanel from './pages/AdminPanel';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
        <Route path="/buscar" element={<Buscador />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <RutaProtegidaPorRol rolPermitido="admin">
              <AdminPanel />
            </RutaProtegidaPorRol>
          }
        />


      </Routes>
    </BrowserRouter>

  );
}

export default App;

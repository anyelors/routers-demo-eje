import { Navigate } from 'react-router-dom';

export default function RutaProtegidaPorRol({ rolPermitido, children }) {
  const rol = localStorage.getItem("rol"); // 'admin' o 'user'
  return rol === rolPermitido ? children : <Navigate to="/login" />;
}

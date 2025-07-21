import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const loginAsAdmin = () => {
    localStorage.setItem("rol", "admin"); // Guardamos rol
    navigate("/admin"); // Redireccionamos al panel
  };

  const loginAsUser = () => {
    localStorage.setItem("rol", "user");
    navigate("/");
  };

  return (
    <div>
      <h2>🔐 Login simulado</h2>
      <button onClick={loginAsAdmin}>Entrar como Admin</button>{" "}
      <button onClick={loginAsUser}>Entrar como Usuario</button>
    </div>
  );
}

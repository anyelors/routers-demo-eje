import { useNavigate } from 'react-router-dom';

export default function Formulario() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Simula el envío de datos
    navigate("/confirmacion"); // Redirige automáticamente
  };

  return (
    <div>
      <h2>📝 Formulario</h2>
      <p>Completa el formulario y presiona el botón:</p>
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
}

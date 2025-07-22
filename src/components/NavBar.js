import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link>&emsp;
        <Link to="/sobre">Sobre la empresa</Link>&emsp;
        <Link to="/admin">Panel Admin</Link>&emsp;
        <Link to="/formulario">Formulario</Link>&emsp;
        <Link to="/buscar">Ir al buscador</Link>&emsp;
        <Link to="/contacto">Conactanos</Link>&emsp;
        <Link to="/blog/como-usar-react">Artículo: React</Link>&emsp;
        <Link to="/blog/tips-de-javascript">Artículo: JavaScript</Link>&emsp;
        <Link to="/blog/no-existe">Artículo no existente</Link>
      </nav>
      <hr />
    </>
  );
}

export default NavBar;

import { useParams } from "react-router-dom";

const articulos = {
  "como-usar-react":
    "React es una librería para crear interfaces de usuario basada en componentes.",
  "tips-de-javascript":
    "JavaScript es un lenguaje versátil y dinámico que permite crear experiencias interactivas.",
};

export default function BlogPost() {
  const { slug } = useParams();
  const contenido = articulos[slug];

  return contenido ? (
    <div>
      <h2>📰 {slug.replace(/-/g, " ")}</h2>
      <p>{contenido}</p>
    </div>
  ) : (
    <p>⛔ Artículo no encontrado</p>
  );
}

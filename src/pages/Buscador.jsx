import { useSearchParams } from 'react-router-dom';

export default function Buscador() {
  const [searchParams, setSearchParams] = useSearchParams();
  const termino = searchParams.get("q");

  return (
    <div>
      <h2>🔍 Buscador</h2>
      <input
        placeholder="Busca algo..."
        value={termino || ""}
        onChange={(e) => setSearchParams({ q: e.target.value })}
      />
      {termino && (
        <p>
          Resultados para: <strong>{termino}</strong>
        </p>
      )}
    </div>
  );
}

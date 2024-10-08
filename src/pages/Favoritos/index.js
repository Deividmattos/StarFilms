import { useEffect, useState } from "react";
import "./favoritos.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@StarFlix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function excluirFilme(id) {
    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    });
    setFilmes(filtroFilmes);
    localStorage.setItem("@StarFlix", JSON.stringify(filtroFilmes));
    toast.success("Filme removido com sucesso");
  }

  return (
    <div className="meus-filme">
      <h1>My Movies</h1>
      {filmes.length === 0 && <span>Voce nao tem filme Salvo :)</span>}

      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div className="excluir_item">
                <Link to={`/filme/${item.id}`}>Ver Detalhe</Link>
                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Bem-vindo!</h1>
      <p>Escolha uma das opções abaixo:</p>
      <div>
        <button onClick={() => navigate("/posts")}>Ir para Posts</button>
        <button onClick={() => navigate("/users")}>Ver Últimos Usuários</button>
        <button onClick={() => navigate("/movies")}>
          Ver Filmes Populares
        </button>
      </div>
    </div>
  );
};

export default Home;

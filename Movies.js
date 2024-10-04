import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGY5NmI4ODdlMTM3Y2Y3OWUwNWQwZDNmYTcxOWNiNSIsIm5iZiI6MTcyNzg4OTU0OS4xNzA4MDksInN1YiI6IjY2ZmQ3ZmMwYzlhMTBkNDZlYTdjNTRlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FUElGM_q2TWmIat57vFmEUEMdtq0PvCVsUcLDcK44hE";

    fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na requisição");
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data.results);
        setFilteredMovies(data.results); // Inicialmente todos os filmes são exibidos
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm)
    );
    setFilteredMovies(filtered);
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div>
      <h1>Filmes Populares</h1>
      <div>
        <input
          type="text"
          placeholder="Buscar filmes..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ marginBottom: "20px", padding: "10px", fontSize: "16px" }}
        />
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <li key={movie.id} style={{ marginBottom: "20px" }}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "200px", borderRadius: "10px" }}
              />
              <p>{movie.title}</p>
            </li>
          ))
        ) : (
          <li>Nenhum filme encontrado</li>
        )}
      </ul>
      <div>
        <button onClick={() => navigate("/posts")}>Ir para Posts</button>
        <button onClick={() => navigate("/users")}>Ver Últimos Usuários</button>
      </div>
    </div>
  );
};

export default Movies;

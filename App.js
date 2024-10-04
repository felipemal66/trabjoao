import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import Movies from "./pages/Movies"; // Novo componente para os filmes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />} />
        <Route path="/movies" element={<Movies />} />{" "}
        {/* Nova rota para filmes */}
      </Routes>
    </Router>
  );
}

export default App;

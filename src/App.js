import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MovieList from "./components/MovieList"; // Example route component
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

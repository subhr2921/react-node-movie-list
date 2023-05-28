import "./App.css";
import Movies from "./views/movies";
import Dashboard from "./views/dashboard/index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/movie-list" element={<Movies />} />
    </Routes>
  );
}

export default App;

import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./Page/Home/Home";
import Movies from "./Page/Movies/Movies";
import Shows from "./Page/Shows/Shows";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieCast />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/shows:id" element={<ShowCast />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

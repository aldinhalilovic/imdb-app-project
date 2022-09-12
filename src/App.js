import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <Routes>
          <Route path="/" element={<h1>movies</h1>} />
          <Route path="/movie" element={<h1>movies</h1>} />
          <Route path="/series" element={<h1>series</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

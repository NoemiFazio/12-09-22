import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import CataloguePage from "./Pages/CataloguePage";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CataloguePage />} />
          <Route path="*" element={<ErrorPage name="prova" status={404} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

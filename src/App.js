import "./App.css";
import "./styles/Components.style.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/HeaderNav";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutProyect from "./pages/About_Proyect";
import Atractions from "./pages/Atractions";
import TouristOffer from "./pages/Tourist_Offer";
import Events from "./pages/Events";
import Documents from "./pages/Documents";
import Map from "./pages/Map";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/aboutProyect" element={<AboutProyect />} />
          <Route path="/attractions" element={<Atractions />} />
          <Route path="/touristOffer" element={<TouristOffer />} />
          <Route path="/events" element={<Events />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/map" element={<Map />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

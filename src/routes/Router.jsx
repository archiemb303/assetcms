import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AppRouter() {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>    
      </Router>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import ComplaintType from "../pages/complaintType";
import ComplainantDetails from "../pages/complainantDetails";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AppRouter() {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complaint-type" element={<ComplaintType />} />
        <Route path="/complainant-details" element={<ComplainantDetails />} />
      </Routes>
      <Footer/>    
      </Router>
  );
}

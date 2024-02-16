import "./style/App.css";

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Landing from "./pages/LandingPage";
import Contact from "./pages/ContactPage";
import Thankyou from "./pages/ThankyouPage";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="route-container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

import { Routes, Route } from "react-router-dom";

import Homepage from "./Pages/Homepage/Homepage";
import Aboutpage from "./Pages/Aboutpage/Aboutpage";
import Kegiatanpage from "./Pages/Kegiatanpage/Kegiatanpage";
import Navigationbar from "./components/Navigationbar/Navigationbar";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <>
      <Navigationbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/kegiatan" element={<Kegiatanpage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

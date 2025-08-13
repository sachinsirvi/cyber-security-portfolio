import "./App.css";
import React from "react";
import Navbar from "./components/layout/Navbar.jsx";
import Banner from "./components/pages/Home/Banner.jsx";
import Movies from "./components/pages/Movies.jsx";
import Tv from "./components/pages/Tv.jsx";
import Footer from "./components/layout/Footer.jsx";
import InfoModal from "./components/common/InfoModal.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Movies />
      <Tv />
      <Footer />
      <InfoModal />
    </>
  );
}

export default App;

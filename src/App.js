import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Popular from "./components/Popular/Popular.jsx";
import Offers from "./components/Offers/Offers.jsx";
import About from "./components/About/About.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      <Offers />
      <About />
      <Blog />
      <Footer />
    </>
  );
}

export default App;

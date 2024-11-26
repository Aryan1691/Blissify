import Navbar from "./components/Navbar";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from "./components/Hero";
const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <Navbar />|
      <Hero />
    </div>
  );
};

export default App;

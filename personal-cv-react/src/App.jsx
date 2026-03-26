import { useState, useEffect } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    
    // Proper cleanup
    return () => document.body.classList.remove("dark");
  }, [darkMode]);

  return (
    <>
      <h1>My Personal Online CV</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <Header />
      <About />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}

export default App;
import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Skills data
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    {
      name: "Web Development",
      subSkills: ["Frontend", "Backend"]
    }
  ];

  // Education data
  const education = [
    { year: "2012", program: "Kindergarten", school: "Macasandig Elementary School" },
    { year: "2018", program: "Elementary", school: "Macasandig Elementary School" },
    { year: "2021", program: "Junior High School", school: "Macasandig National High School" },
    { year: "2024", program: "Senior High School", school: "PHINMA Cagayan de Oro College" },
    { year: "2028", program: "College", school: "USTP – CDO Campus" }
  ];

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <h1>My Personal Online CV</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <Header />
      <About />
      <Skills skills={skills} />
      <Education education={education} />
      <Contact />
    </>
  );
}

export default App;
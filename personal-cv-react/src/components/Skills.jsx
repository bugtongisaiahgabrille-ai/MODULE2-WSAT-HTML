import { useState } from "react";

function Skills({ skills }) {
  const [visible, setVisible] = useState(true);

  return (
    <section className="card" id="skillsSection">
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide Skills" : "Show Skills"}
      </button>

      {visible && (
        <>
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                {typeof skill === "string" ? (
                  skill
                ) : (
                  <>
                    {skill.name}
                    {skill.subSkills && (
                      <ul>
                        {skill.subSkills.map((sub, subIndex) => (
                          <li key={subIndex}>{sub}</li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export default Skills;
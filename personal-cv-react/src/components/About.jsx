import profile from "../assets/images/profile.png";

function About() {
  return (
    <section className="card">
      <img src={profile} alt="Profile photo" />
      <h2>About Me</h2>
      <p> Hi, good day everyone. My name is Isaiah Gabrille Bugtong.
                I am an Information Technology student learning web development.
                I am improving my skills in HTML, CSS, and JavaScript.</p>
    </section>
  );
}

export default About;
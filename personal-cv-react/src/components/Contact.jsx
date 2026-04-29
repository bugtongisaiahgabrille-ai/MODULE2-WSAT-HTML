import { useState } from "react";

function Contact() {

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const messageText = e.target.message.value.trim();

    if (!name || !email || !messageText) {
      window.alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost/cv-api/process.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
      });

      const data = await res.json();

      window.alert(data.message); // shows "Data saved successfully"

      e.target.reset();

    } catch (error) {
      console.error(error);
      window.alert("Error connecting to server");
    }
  };

  return (
    <section className="card">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="name" name="name" placeholder="Name" />
        <input type="email" id="email" name="email" placeholder="Email" />
        <textarea id="message" name="message" placeholder="Message"></textarea>
        <button type="submit" id="submitBtn">Send</button>
      </form>
    </section>
  );
}

export default Contact;
import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState(""); // to display feedback message

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const messageText = e.target.message.value.trim();

    if (!name || !email || !messageText) {
      setMessage("Please fill all fields");
    } else {
      setMessage("The message has been sent");
      // Optionally clear the form
      e.target.reset();
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
      {message && <p>{message}</p>}
    </section>
  );
}

export default Contact;
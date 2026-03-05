import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !messageText) {
      setFeedback("Please fill all fields");
    } else {
      setFeedback(`Thank you ${name}! Your message has been sent.`);
      setName("");
      setEmail("");
      setMessageText("");
    }
  };

  return (
    <section className="card">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        ></textarea>
        <button type="submit">Send</button>
      </form>
      {feedback && <p>{feedback}</p>}
    </section>
  );
}

export default Contact;
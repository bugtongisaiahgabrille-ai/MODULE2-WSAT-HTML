import { useState } from "react";

function Contact() {
  // We no longer need the 'message' state if we use window alerts
  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const messageText = e.target.message.value.trim();

    if (!name || !email || !messageText) {
      // This creates the pop-up box shown in your image
      window.alert("Please fill all fields");
    } else {
      // This creates the pop-up box shown in your image
      window.alert("The message has been sent");
      
      // Clear the form fields after successful "send"
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
    </section>
  );
}

export default Contact;
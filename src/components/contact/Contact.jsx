import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
      <div className="items">
            <a href="https://www.linkedin.com/in/hameeedurrehman/"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
          <div className="items">
            <a href="https://github.com/hameeedurrehman"><i class="fa-brands fa-github"></i></a>
          </div>
          <div className="items">
            <a href="https://twitter.com/hameeedurrehman"><i class="fa-brands fa-twitter"></i></a>
          </div>
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
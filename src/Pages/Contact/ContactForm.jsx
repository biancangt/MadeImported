import React, { useState } from "react";

function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mpwdvqow", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Entre em contato conosco</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">Nome</label>
        <input type="text" id="fname" name="fname" required disabled={status === "success"} />

        <label htmlFor="lname">Sobrenome</label>
        <input type="text" id="lname" name="lname" required disabled={status === "success"} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required disabled={status === "success"} />

        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" rows="5" required disabled={status === "success"}></textarea>

        <button type="submit" disabled={status === "success" || status === "sending"}>
          {status === "success" ? "Mensagem enviada!" : status === "sending" ? "Enviando..." : "Enviar Mensagem"}
        </button>

        {status === "error" && (
          <p style={{ color: "red", marginTop: "1rem" }}>
            Ocorreu um erro ao enviar a mensagem. Tente novamente.
          </p>
        )}
      </form>

      <ul className="list-unstyled custom-social">
        <li>
          <a href="mailto:madeimportado@gmail.com" aria-label="Email">
            <span className="fa-solid fa-envelope"></span>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/5511915349430"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telefone WhatsApp"
          >
            <span className="fa-solid fa-phone"></span>
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/madefgr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <span className="fa-brands fa-instagram"></span>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/5511915349430"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <span className="fa-brands fa-whatsapp"></span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactForm;

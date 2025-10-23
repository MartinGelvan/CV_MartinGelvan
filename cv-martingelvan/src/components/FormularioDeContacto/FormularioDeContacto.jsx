import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../css/FormularioDeContacto.css"; // Archivo de estilos

export const ContactForm = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Martin", // Tu Service ID de EmailJS
        "template_e7ylhqj", // Tu Template ID
        form.current,
        "4zXsfn2aPo6y_Unbo" // Tu Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form-container">
      <h2>Contacto</h2>
      <p>Completá el formulario para enviarme tu consulta.</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Nombre</label>
        <input type="text" name="name" placeholder="Tu nombre" required />

        <label>Email</label>
        <input type="email" name="email" placeholder="tu@email.com" required />

        <label>Puesto de interés</label>
        <select name="job" required>
          <option value="">Seleccioná un puesto</option>
          <option value="IT">IT</option>
          <option value="Diseñador">Diseñador</option>
          <option value="Administrativo">Administrativo</option>
          <option value="Vendedor">Vendedor</option>
        </select>

        <label>Mensaje</label>
        <textarea
          name="message"
          placeholder="Contanos por qué querés contratarme"
          required
        />

        <button type="submit">Enviar</button>
        {messageSent && <p className="success">¡Mensaje enviado con éxito!</p>}
      </form>
    </div>
  );
};

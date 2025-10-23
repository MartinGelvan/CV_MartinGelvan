import React from "react";
import { motion } from "framer-motion";
import "../css/ExperienciaAdministrativo.css";

export const ExperienciaAdministrativo = () => {
  return (
    <div className="experiencia-container">
      {/* PERFIL */}
      <motion.section
        className="perfil-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="nombre">Martin Gelvan</h1>
        <h2 className="titulo">Administrativo | Vendedor</h2>
        <p className="contacto">
          📞 (+54 9 11) 70000039 | 📧 martingelvan@gmail.com |{" "}
          <a
            href="https://www.linkedin.com/in/martingelvan"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p className="descripcion">
          Cuento con experiencia en gestión administrativa, manejo de cuentas
          digitales y atención al cliente. Mi objetivo es integrarme a una
          organización donde pueda aportar mi capacidad de organización, trato
          con clientes y uso de herramientas tecnológicas, mientras continúo
          desarrollándome profesionalmente.
        </p>
      </motion.section>

      {/* EXPERIENCIA */}
      <motion.section
        className="experiencia-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Experiencia Laboral</h3>

        <div className="card-experiencia">
          <h4>Administrador – Complejo Deportivo Caballito Norte</h4>
          <p className="fecha">2024 – 2025</p>
          <ul>
            <li>
              Atención al cliente en recepción y coordinación de reservas de
              canchas de fútbol.
            </li>
            <li>
              Manejo de caja diaria: cobros, arqueo y control de
              ingresos/egresos.
            </li>
            <li>
              Administración de proveedores y control de stock de insumos del
              predio.
            </li>
            <li>
              Uso de Excel para registro de operaciones y organización de
              información contable.
            </li>
            <li>
              Resolución de incidencias con clientes, garantizando una
              experiencia positiva.
            </li>
          </ul>
        </div>

        <div className="card-experiencia">
          <h4>Gestión de cuenta – Mercado Libre</h4>
          <p className="fecha">2023 – 2024</p>
          <ul>
            <li>
              Gestión integral de publicaciones, precios y stock en una cuenta
              de e-commerce.
            </li>
            <li>
              Atención al cliente y resolución de reclamos, manteniendo altos
              niveles de satisfacción.
            </li>
            <li>
              Monitoreo de ventas y creación de reportes básicos en Excel.
            </li>
            <li>
              Optimización de la descripción y presentación de productos,
              incrementando la visibilidad y ventas.
            </li>
          </ul>
        </div>
      </motion.section>

      {/* EDUCACIÓN */}
      <motion.section
        className="educacion-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3>Educación</h3>
        <div className="card-educacion">
          <p>
            <strong>Analista de Sistemas</strong> – ORT Buenos Aires (Marzo 2023
            – Presente)
          </p>
          <p>
            <strong>Analista Programador</strong> – ORT Buenos Aires (Marzo 2023
            – Septiembre 2025)
          </p>
          <p>
            <strong>Programador WebMaster</strong> – UTN (Febrero 2022 – Julio
            2022)
          </p>
          <p>
            <strong>PostProductor Audiovisual</strong> – DaVinci (Marzo 2017 –
            Diciembre 2019)
          </p>
        </div>
      </motion.section>

      {/* CONOCIMIENTOS */}
      <motion.section
        className="habilidades-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h3>Conocimientos y Herramientas</h3>
        <div className="skills-grid">
          {[
            "Excel",
            "Word",
            "Atención al Cliente",
            "Control de Stock",
            "Caja",
            "Gestión de Redes Sociales",
            "Mercado Libre",
            "Organización Administrativa",
          ].map((skill, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="skill-badge"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* IDIOMAS */}
      <motion.section
        className="idiomas-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
      >
        <h3>Idiomas</h3>
        <p>🇬🇧 Inglés – Nivel Básico</p>
      </motion.section>
    </div>
  );
};

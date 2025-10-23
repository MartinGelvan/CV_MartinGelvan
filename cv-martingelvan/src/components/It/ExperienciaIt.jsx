import React from "react";
import { motion } from "framer-motion";
import "../../../src/components/css/ExperienciaIt.css";

export const ExperienciaIT = () => {
  return (
    <div className="experiencia-container">
      <motion.section
        className="perfil-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="nombre">Martin Gelvan</h1>
        <h2 className="titulo">
          Desarrollador • Analista Funcional • Diseñador UX/UI
        </h2>
        <p className="contacto">
          📞 (+54) 9 1170000039 | 📧 martingelvan@gmail.com |{" "}
          <a
            href="https://www.linkedin.com/in/martingelvan"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p className="descripcion">
          Soy estudiante de Analista de Sistemas con un gran interés en el
          desarrollo de software, el análisis funcional y el diseño UX/UI. Busco
          oportunidades para aplicar mis conocimientos, aprender nuevas
          tecnologías y aportar soluciones creativas que generen valor. Me
          motiva trabajar en equipo y enfrentar desafíos tecnológicos.
        </p>
      </motion.section>

      <motion.section
        className="experiencia-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Experiencia Laboral</h3>
        <div className="card-experiencia">
          <h4>Desarrollador Independiente</h4>
          <p className="fecha">
            Julio 2025 – Agosto 2025 | Buenos Aires, Argentina
          </p>
          <p className="proyecto">
            <strong>Proyecto:</strong> App “Gifloox QR Scanner”
          </p>
          <ul>
            <li>
              Diseñé y desarrollé una aplicación móvil Android para lectura y
              gestión de códigos QR, próxima a publicarse en Google Play Store.
            </li>
            <li>
              Implementé la lógica y arquitectura con Flutter/Dart, garantizando
              un rendimiento fluido.
            </li>
            <li>
              Diseñé la interfaz con enfoque en UX/UI, priorizando la usabilidad
              y la simplicidad.
            </li>
            <li>
              Gestioné todo el ciclo de desarrollo: análisis, diseño,
              codificación y pruebas.
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="educacion-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3>Educación</h3>
        <div className="card-educacion">
          <p>
            <strong>Analista de Sistemas</strong> – ORT Buenos Aires (2023–2025)
          </p>
          <p>
            <strong>Tecnicatura en Programación</strong> – UTN Buenos Aires
            (2020–2021)
          </p>
        </div>

        <h4>Certificaciones</h4>
        <ul>
          <li>Analista Programador – ORT (Marzo 2023 – Septiembre 2025)</li>
          <li>Programador WebMaster – UTN (Febrero 2022 – Julio 2022)</li>
        </ul>
      </motion.section>

      <motion.section
        className="habilidades-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h3>Habilidades</h3>
        <div className="skills-grid">
          {[
            "C",
            "JavaScript",
            "HTML",
            "CSS",
            "Node.Js",
            "Java",
            "UX/UI Design",
            "React",
            "JSON",
            "Bootstrap",
            "Flutter/Dart",
            "Figma",
            "UML",
            "SQL",
            "Power BI",
            "VBScript",
            "Git",
            "Firebase",
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
    </div>
  );
};

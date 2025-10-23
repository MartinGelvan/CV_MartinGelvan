import React from "react";
import { motion } from "framer-motion";
import "../css/ExperienciaDiseñador.css";

export const ExperienciaDiseñador = () => {
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
        <h2 className="titulo">Diseñador Audiovisual & UX/UI</h2>
        <p className="contacto">
          📞 (+54 9 11) 70000039 | 📧 martingelvan@gmail.com |{" "}
          <a
            href="https://www.linkedin.com/in/martingelvan"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://www.instagram.com/gelvandesign"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </p>
        <p className="descripcion">
          Creativo digital con experiencia en diseño gráfico, edición de video,
          modelado y animación 3D. Manejo la creación de logos, flyers, videos
          lyric y contenidos visuales adaptados a distintos formatos y públicos.
          Busco incorporarme a un equipo donde pueda aportar mis habilidades
          artísticas y técnicas, desarrollar ideas innovadoras y seguir
          creciendo en el ámbito del diseño y la producción audiovisual.
        </p>
      </motion.section>

      <h3>Portfolio Destacado</h3>
      <div className="card-experiencia">
        <h4>Diseño UX/UI – App “Gifloox QR Scanner”</h4>
        <p className="fecha">Julio 2025 – Agosto 2025</p>
        <p>
          Realicé el diseño UX/UI completo de la aplicación móvil “Gifloox QR
          Scanner”, próxima a publicarse en Google Play Store.
        </p>
      </div>

      {/* EXPERIENCIA */}
      <motion.section
        className="experiencia-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Experiencia Laboral</h3>

        <div className="card-experiencia">
          <h4>Diseñador – PremiumBaby</h4>
          <p className="fecha">
            Enero 2019 – Diciembre 2022 | Buenos Aires, Argentina
          </p>
          <ul>
            <li>
              Diseño gráfico aplicado a productos infantiles, adaptando estilos
              a las tendencias del mercado.
            </li>
            <li>Creación de recursos visuales para la web y redes sociales.</li>
            <li>
              Producción de material promocional (banners, catálogos,
              presentaciones).
            </li>
            <li>
              Desarrollo de identidad visual coherente junto al equipo de
              marketing y ventas.
            </li>
          </ul>
        </div>

        <div className="card-experiencia">
          <h4>Diseños freelance para redes sociales</h4>
          <p className="fecha">Enero 2019 – Presente</p>
          <ul>
            <li>
              Creación de flyers, historias y publicaciones adaptadas a
              diferentes públicos y estilos visuales.
            </li>
            <li>
              Desarrollo de identidades visuales y animaciones simples para
              redes.
            </li>
            <li>
              Edición de videos y manejo de herramientas como Photoshop, After
              Effects y Canva.
            </li>
            <li>
              Gestión directa con clientes, interpretando sus necesidades y
              ofreciendo propuestas creativas alineadas a su marca.
            </li>
          </ul>
        </div>

        <div className="card-experiencia">
          <h4>Video lyric “Sola” – Banda XXI</h4>
          <p className="fecha">Junio 2021</p>
          <ul>
            <li>
              Diseño, edición y animación del video lyric oficial de la canción
              “Sola”.
            </li>
            <li>Uso de tipografía animada sincronizada con la música.</li>
            <li>Producción audiovisual con After Effects y Premiere.</li>
          </ul>
        </div>

        <div className="card-experiencia">
          <h4>Asistente de docente – Modelado 3D</h4>
          <p className="fecha">Enero 2018 – Diciembre 2018 | DaVinci</p>
          <ul>
            <li>
              Asistencia en la enseñanza de modelado 3D (ZBrush, Autodesk Maya).
            </li>
            <li>
              Acompañamiento a alumnos en prácticas y uso de herramientas.
            </li>
            <li>Colaboración en corrección y devoluciones constructivas.</li>
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

      {/* HERRAMIENTAS */}
      <motion.section
        className="habilidades-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h3>Herramientas y Conocimientos</h3>
        <div className="skills-grid">
          {[
            "Photoshop",
            "Illustrator",
            "After Effects",
            "Premiere",
            "Figma",
            "Canva",
            "Zbrush",
            "Autodesk Maya",
            "UX/UI Design",
            "Diseño Audiovisual",
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

      {/* PORTFOLIO */}
      <motion.section
        className="portfolio-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
      ></motion.section>
    </div>
  );
};

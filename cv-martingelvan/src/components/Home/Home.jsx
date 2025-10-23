import "../css/Home.css";
import { ContactForm } from "../FormularioDeContacto/FormularioDeContacto";

export const Home = () => {
  return (
    <div className="home-container">
      {/* FOTO DE PERFIL */}
      <div className="perfil-home">
        <img
          className="fotoMartin"
          src="/images/fotoMartin.jpeg"
          alt="Martin Gelvan"
        />
        <h1>Martin Gelvan</h1>
        <p className="perfil-titulo">
          Desarrollador | Analista Funcional | Diseñador UX/UI
        </p>
      </div>

      {/* TARJETAS DE EXPERIENCIA */}
      <section className="experiencias-home">
        <div className="tarjetas">
          <div className="card mi-card">
            <img src="./images/pc.svg" className="card-img-top" alt="IT" />
            <div className="card-body">
              <p className="card-text">
                Desarrollador || Analista Funcional || Diseñador UX/UI
              </p>
            </div>
          </div>

          <div className="card mi-card">
            <img
              src="./images/pencil.svg"
              className="card-img-top"
              alt="Diseñador"
            />
            <div className="card-body">
              <p className="card-text">
                Diseñador Audiovisual & UX/UI | Contenido Visual para Marcas
              </p>
            </div>
          </div>

          <div className="card mi-card">
            <img
              src="./images/folder.svg"
              className="card-img-top"
              alt="Administrativo"
            />
            <div className="card-body">
              <p className="card-text">Administrativo | Vendedor</p>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </div>
  );
};

import "../css/Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="logo">Martin Gelvan</h1>
        <p className="subtitle">
          Desarrollador | Analista Funcional | Diseñador UX/UI
        </p>

        <nav className="nav-bar">
          <ul className="nav-list">
            <li>
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/it"}>
                Experiencia IT
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/diseñador"}>
                Experiencia Diseñador
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/administrativo"}>
                Experiencia Administrativo
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

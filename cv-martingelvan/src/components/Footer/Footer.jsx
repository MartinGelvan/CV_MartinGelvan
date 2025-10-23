import "../css/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-redes">
        <a
          href="https://www.instagram.com/martingelvan/"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          Instagram
        </a>
        <a
          href="https://github.com/MartinGelvan"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          Github
        </a>
      </div>
      <p className="footer-text">
        © {new Date().getFullYear()} Hecho por Martin Gelvan
      </p>
    </footer>
  );
};

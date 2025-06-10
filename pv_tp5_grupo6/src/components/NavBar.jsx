import { Link } from "react-router-dom";

const NavBar = () => {
  const navStyle = {
    padding: "1rem 2rem",
    backgroundColor: "#1976d2",
    color: "white",
    display: "flex",
    gap: "1.5rem",
    alignItems: "center",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
  };

  return (
    <nav style={navStyle}>
      <Link to="/home" style={linkStyle}>Inicio</Link>
      <Link to="/lista-alumnos" style={linkStyle}>Lista de Alumnos</Link>
      <Link to="/nuevo-alumno" style={linkStyle}>Nuevo Alumno</Link>
      <Link to="/acerca" style={linkStyle}>Acerca de</Link>
    </nav>
  );
};

export default NavBar;

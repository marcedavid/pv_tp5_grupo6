import { useParams, useNavigate } from "react-router-dom";

const DetallesAlumnos = ({ alumnos }) => {
  const { lu } = useParams();
  const navigate = useNavigate();

  const alumno = alumnos.find((a) => a.lu === lu);

  if (!alumno) {
    return (
      <div>
        <h2>Alumno no encontrado</h2>
        <button onClick={() => navigate("/lista-alumnos")}>Volver a la lista</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
      <h2 style={{ color: "#1976d2" }}>
        {alumno.nombre} {alumno.apellido}
      </h2>
      <p><strong>LU:</strong> {alumno.lu}</p>
      <p><strong>Curso:</strong> {alumno.curso}</p>
      <p><strong>Email:</strong> {alumno.email}</p>
      <p><strong>Dirección:</strong> {alumno.direccion}</p>
      <p><strong>Teléfono:</strong> {alumno.telefono}</p>
       <button onClick={() => navigate("/lista-alumnos")} style={{ 
        backgroundColor: "#1976d2",
        color: "white",
        border: "none",
        padding: "0.4rem 0.7rem",
        borderRadius: "4px",
        cursor: "pointer",}}>
        Volver a la lista
      </button>
    </div>
  );
};

export default DetallesAlumnos;

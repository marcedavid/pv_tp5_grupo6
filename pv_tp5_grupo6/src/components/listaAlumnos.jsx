import { useState } from "react";
import FormularioAlumno from "./formularioAlumnos";

const ListaAlumnos = () => {
  const [alumnos, setAlumnos] = useState([
    {
      lu: "APU00999",
      nombre: "María Eugenia",
      apellido: "Diaz",
      curso: "Tercero",
      email: "mariadiaz@mail.com",
    },
    {
      lu: "APU01000",
      nombre: "Juan Carlos",
      apellido: "Pérez",
      curso: "Segundo",
      email: "juanperez@mail.com",
    },
  ]);

  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

  const guardarAlumno = (nuevo) => {
    const existe = alumnos.some((a) => a.lu === nuevo.lu);
    if (existe) {
      setAlumnos(alumnos.map((a) => (a.lu === nuevo.lu ? nuevo : a)));
      setAlumnoSeleccionado(null);
    } else {
      setAlumnos([...alumnos, nuevo]);
    }
  };

  const eliminarAlumno = (lu) => {
    if (confirm("¿Deseas eliminar este alumno?")) {
      setAlumnos(alumnos.filter((a) => a.lu !== lu));
    }
  };

  return (
    <div>
      <FormularioAlumno
        onGuardar={guardarAlumno}
        alumnoSeleccionado={alumnoSeleccionado}
        cancelar={() => setAlumnoSeleccionado(null)}
      />
      <h2 style={{ color: "#424242" }}>Lista de Alumnos</h2>
      <div style={styles.cardContainer}>
        {alumnos.map((alumno) => (
          <div key={alumno.lu} style={styles.card}>
            <h3 style={styles.cardTitle}>{alumno.nombre} {alumno.apellido}</h3>
            <p><strong>LU:</strong> {alumno.lu}</p>
            <p><strong>Curso:</strong> {alumno.curso}</p>
            <p><strong>Email:</strong> {alumno.email}</p>
            <div style={styles.cardButtons}>
              <button onClick={() => alert(`Ver detalles de ${alumno.nombre}`)} style={styles.btnNeutral}>Ver</button>
              <button onClick={() => setAlumnoSeleccionado(alumno)} style={styles.btnPrimary}>Editar</button>
              <button onClick={() => eliminarAlumno(alumno.lu)} style={styles.btnDanger}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1rem",
    marginTop: "1rem",
  },
  card: {
    backgroundColor: "#fff",
    border: "1px solid #e0e0e0",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    width: "250px",
    color: "#212121",
  },
  cardTitle: {
    marginBottom: "0.5rem",
    color: "#1976d2",
  },
  cardButtons: {
    display: "flex",
    gap: "0.5rem",
    marginTop: "1rem",
  },
  btnPrimary: {
    backgroundColor: "#1976d2",
    color: "white",
    border: "none",
    padding: "0.4rem 0.7rem",
    borderRadius: "4px",
    cursor: "pointer",
  },
  btnNeutral: {
    backgroundColor: "#9e9e9e",
    color: "white",
    border: "none",
    padding: "0.4rem 0.7rem",
    borderRadius: "4px",
    cursor: "pointer",
  },
  btnDanger: {
    backgroundColor: "#d32f2f",
    color: "white",
    border: "none",
    padding: "0.4rem 0.7rem",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ListaAlumnos;

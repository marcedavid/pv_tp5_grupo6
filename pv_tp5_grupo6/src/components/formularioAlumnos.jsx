import { useState, useEffect } from "react";

const FormularioAlumno = ({ onGuardar, alumnoSeleccionado, cancelar }) => {
  const [alumno, setAlumno] = useState({
    lu: "",
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
  });

  const [formDirection, setFormDirection] = useState("row");

  useEffect(() => {
    if (alumnoSeleccionado) {
      setAlumno(alumnoSeleccionado);
    } else {
      setAlumno({
        lu: "",
        nombre: "",
        apellido: "",
        curso: "",
        email: "",
      });
    }
  }, [alumnoSeleccionado]);

  // Lógica responsive
  useEffect(() => {
    const handleResize = () => {
      setFormDirection(window.innerWidth < 600 ? "column" : "row");
    };
    handleResize(); // correr al montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumno({ ...alumno, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (alumno.lu && alumno.nombre && alumno.apellido) {
      onGuardar(alumno);
      setAlumno({
        lu: "",
        nombre: "",
        apellido: "",
        curso: "",
        email: "",
      });
    } else {
      alert("Completá los campos obligatorios.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3 style={styles.formTitle}>
        {alumnoSeleccionado ? "Editar Alumno" : "Agregar Alumno"}
      </h3>
      <div style={{ ...styles.formRow, flexDirection: formDirection }}>
        <input
          name="lu"
          placeholder="LU"
          value={alumno.lu}
          onChange={handleChange}
          required
          disabled={alumnoSeleccionado}
          style={styles.input}
        />
        <input
          name="nombre"
          placeholder="Nombre"
          value={alumno.nombre}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="apellido"
          placeholder="Apellido"
          value={alumno.apellido}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="curso"
          placeholder="Curso"
          value={alumno.curso}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="email"
          placeholder="Email"
          value={alumno.email}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <div style={styles.buttonRow}>
        <button type="submit" style={styles.btnPrimary}>
          {alumnoSeleccionado ? "Guardar cambios" : "Agregar alumno"}
        </button>
        {alumnoSeleccionado && (
          <button type="button" onClick={cancelar} style={styles.btnNeutral}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

const styles = {
  form: {
    backgroundColor: "#ffffff",
    padding: "1rem",
    marginBottom: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    color: "#212121",
  },
  formTitle: {
    marginBottom: "1rem",
  },
  formRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    flexDirection: "row",
  },

  input: {
    padding: "0.5rem",
    flex: "1 1 200px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    backgroundColor: "#f5f5f5",
    color: "#212121",
  },
  buttonRow: {
    marginTop: "1rem",
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },
  btnPrimary: {
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    cursor: "pointer",
  },
  btnNeutral: {
    backgroundColor: "#757575",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default FormularioAlumno;

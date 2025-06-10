import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import ListaAlumnos from "./components/listaAlumnos";
import FormularioAlumno from "./components/formularioAlumnos"; 
import Acerca from "./views/Acerca";
import Home from "./views/home"; 
import { useState } from "react";

function App() {
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

  // Estado para editar (null si es nuevo)
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

  const guardarAlumno = (nuevo) => {
    const existe = alumnos.some((a) => a.lu === nuevo.lu);
    if (existe) {
      setAlumnos(alumnos.map((a) => (a.lu === nuevo.lu ? nuevo : a)));
    } else {
      setAlumnos([...alumnos, nuevo]);
    }
  };

  return (
    <Router>
      <NavBar />
      <div style={{ padding: "2rem", fontFamily: "Roboto, sans-serif", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/lista-alumnos"
            element={
              <ListaAlumnos
                alumnos={alumnos}
                setAlumnoSeleccionado={setAlumnoSeleccionado}
              />
            }
          />
          <Route
            path="/nuevo-alumno"
            element={
              <FormularioAlumnoWrapper
                alumnoSeleccionado={alumnoSeleccionado}
                guardarAlumno={guardarAlumno}
                setAlumnoSeleccionado={setAlumnoSeleccionado}
              />
            }
          />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
}

// Componente wrapper para manejar navegación tras guardar
import { useNavigate } from "react-router-dom";

function FormularioAlumnoWrapper({ alumnoSeleccionado, guardarAlumno, setAlumnoSeleccionado }) {
  const navigate = useNavigate();

  const onGuardar = (alumno) => {
    guardarAlumno(alumno);
    setAlumnoSeleccionado(null);
    navigate("/lista-alumnos"); // Volver a la lista después de guardar
  };

  const cancelar = () => {
    setAlumnoSeleccionado(null);
    navigate("/lista-alumnos"); // Volver a la lista si canceló
  };

  return (
    <FormularioAlumno
      onGuardar={onGuardar}
      alumnoSeleccionado={alumnoSeleccionado}
      cancelar={cancelar}
    />
  );
}

export default App;

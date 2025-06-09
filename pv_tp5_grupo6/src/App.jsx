import ListaAlumnos from "./components/listaAlumnos";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Roboto, sans-serif", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <h1 style={{ color: "#1976d2" }}>Gestión de Alumnos</h1>
      <ListaAlumnos />
    </div>
  );
}

export default App;

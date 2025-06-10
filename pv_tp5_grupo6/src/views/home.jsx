const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bienvenido a la Gestión de Alumnos</h1>
      <p style={styles.text}>
        Esta aplicación te permite administrar la información de los alumnos de manera fácil y rápida.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#f5f5f5",
    minHeight: "80vh",
    color: "#333",
    textAlign: "center",
    borderRadius: "8px",
    maxWidth: "600px",
    margin: "2rem auto",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    color: "#1976d2",
  },
  text: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
  },
};

export default Home;

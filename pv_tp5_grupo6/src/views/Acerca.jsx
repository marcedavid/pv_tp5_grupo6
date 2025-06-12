const Acerca = () => {
  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#333" }}>Acerca de esta aplicación</h2>
      <p>
       Esta aplicación web, desarrollada con React y Vite, permite gestionar un conjunto de datos de alumnos 
      con las funcionalidades de agregar, editar, eliminar y visualizar detalles específicos de cada alumno. 
      La interfaz está organizada en componentes funcionales de manera eficiente y ofrecen una navegación fluida
      mediante React Router DOM. Además, incorpora un menú de navegación general accesible desde todas las vistas. 
      El proyecto está versionado con Git y alojado en GitHub, siguiendo el manejo de ramas y documentación colaborativa.
      </p>

      <h3 style={{ marginTop: "1.5rem", color: "#555" }}>Integrantes del grupo</h3>

      <ul style={{ paddingLeft: "1.2rem" }}>
        <li>Alejandro Cuellar - GitHub: DFAle</li><br />
        <li>Moreno Candela  - GitHub: candelampv</li><br />
        <li>Mayra Zalazar - GitHub: MayraDamarisZalazar</li><br />
        <li>David Marcelo - GitHub: marcedavid</li><br />
        <li>Edgardo Misael Emir Torres - GitHub: misael3101</li><br />
      </ul>
    </div>
  );
};

export default Acerca;

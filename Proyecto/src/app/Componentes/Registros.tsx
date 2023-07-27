import React, { useEffect, useState } from 'react';
import { obtenerPersonas } from '../Firebase/Promesas';
import { Persona } from '../Interfaces/IFormulario';
import { Link } from 'react-router-dom';




export const Registros = () => {
  const [personas, setPersonas] = useState<Persona[]>([]);

  useEffect(() => {
    obtenerPersonas().then((listado) => {
      console.log('Ya estoy listo');
      console.log(listado);
      setPersonas(listado);
    });
    //el componente Registros utiliza el estado local personas para almacenar y mantener una lista de objetos Persona. 
    //Utiliza  useEffect para realizar una llamada a obtenerPersonas y actualizar el estado personas con el listado de personas obtenido. 
  }, []);

  const renderizarDatos = () => {
    return personas.map((p) => (
      <tr key={p.idPersona}>
        <td>{p.nombre}</td>
        <td>{p.apellido}</td>
        <td>{p.edad}</td>
        <td>{p.sexo}</td>
        <td>{p.fechaNacimiento}</td>
        <td>{p.ciudad}</td>
        <td>{p.correoElectronico}</td>
        <td>{p.contrasena}</td>
        <td>{p.noSoyRobot ? 'Sí' : 'No'}</td>
        <td><Link to={`/actualizar/${p.idPersona}`}>Actualizar</Link></td>
        <td><Link to={`/eliminar/${p.idPersona}`}>Eliminar</Link></td>
  
        
      </tr>
    ));

    //la función renderizarDatos es una utilidad que toma un array de objetos personas y devuelve una representación visual de cada persona en forma de filas en una tabla. 
    //Cada propiedad de la persona se muestra en una celda de la tabla, y también se proporcionan enlaces para actualizar o eliminar cada registro individual.
  };

  return (
    <table style={{
        background:'#193d3d'
    }}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Sexo</th>
          <th>Fecha_Nacimiento</th>
          <th>Ciudad</th>
          <th>Correo</th>
          <th>Contraseña</th>
          <th>No soy Robot</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>{renderizarDatos()}</tbody>
    </table>

    //muestra una tabla con estilos de fondo personalizados y muestra una lista dinámica de personas, cada una representada como una fila en la tabla. Los encabezados de columna identifican cada dato de la persona, y el contenido de la tabla es generado dinámicamente mediante la función renderizarDatos. esta tabla 
    //se utiliza para mostrar y gestionar registros de personas 
  );
};

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerPersona, eliminarPersona } from '../Firebase/Promesas';

const Eliminar = () => {
  const params = useParams();

  useEffect(() => {
    if (params.idPersona !== undefined) {
      obtenerPersona(params.idPersona).then((v) => {
        if (v !== undefined && v.idPersona !== undefined) {
          console.log("Persona a eliminar:", v);
        }
      });
    }
  }, [params.idPersona]);

  //el componente Eliminar utiliza el useParams para obtener el parámetro idPersona de la URL y luego llama a la función obtenerPersona con ese valor. 
  //Si se obtiene una respuesta válida, se muestra la información de la persona a eliminar en la consola.

  const eliminar = () => {
    if (params.idPersona !== undefined) {
      eliminarPersona(params.idPersona)
        .then(() => {
          alert('Persona eliminada con éxito');
        })
        .catch((error) => {
          alert('Hubo un error al eliminar la persona: ' + error.message);
        });
    } else {
      alert('No se pudo eliminar la persona porque no se encontró un ID válido.');
    }

    //, la función eliminar verifica si tiene un ID válido para identificar la persona a eliminar. Si es así, llama a la función eliminarPersona y muestra una alerta con un mensaje de éxito o error según el resultado de la operación. 
    //Si no se tiene un ID válido, muestra una alerta informando que la persona no pudo ser eliminada debido a la falta de un ID válido.

  };

  return (
    <div>
   
      <p>¿Seguro que quieres eliminar?</p>
      <button onClick={eliminar}>Eliminar</button>
    </div>
  );
  //muestra un mensaje de confirmación para eliminar una persona y un botón para realizar la eliminación
};

export default Eliminar;

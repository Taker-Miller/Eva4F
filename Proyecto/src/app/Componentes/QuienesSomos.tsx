import React, { useState } from 'react';
import '../assets/QuienesSomos.css'

export const QuienesSomos = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);


  const toggleContrast = () => {
    setIsHighContrast((prevState) => !prevState);

    //el componente QuienesSomos tiene un estado local isHighContrast y una función "toggleContrast" que permite cambiar el valor de dicho estado. 
  };

  return (
    <div className={`Quienes-container ${isHighContrast ? 'contraste' : ''}`}>
      <button onClick={toggleContrast}>
        {isHighContrast ? 'Cambiar a alto contraste' : 'Cambiar a bajo contraste'}
      </button>

      <h2 className={`Quienes-titulo ${isHighContrast ? 'black' : ''}`}>¿Quienes Somos?</h2>

      
      <br>
      </br>

      <p className={`Quienes-parrafos ${isHighContrast ? 'black' : ''}`}>
      En la ciudad chilena de Copiapó, existe una pequeña empresa llamada King Garden. Nos especializamos en ofrecer servicios de alta calidad
      y vanguardia para la creación, remodelación y mantenimiento de jardines y otros espacios al aire libre. La creación y mantenimiento de los jardines más exigentes de todo Santiago es nuestro principal objetivo. 
      Queremos ser el líder de la industria y la empresa de referencia. Nos enorgullece brindar un servicio integral que se adapta a los requisitos individuales de cada uno de nuestros clientes. 
      En cada proyecto que asumimos, nuestro equipo de profesionales altamente calificados se compromete a ofrecer soluciones especializadas y garantizar la satisfacción del cliente.
      La excelencia técnica es una prioridad en King Garden, pero también ponemos un fuerte énfasis en construir relaciones sólidas con nuestros clientes. 
                       Sus expectativas y deseos para sus jardines son importantes para nosotros y valoramos la importancia de escucharlo. 
                       Creemos que esta interacción constante nos permite diseñar espacios verdes que capturan con precisión la personalidad y forma de vida únicas de cada cliente.
                       Trabajamos arduamente para informar y asesorar a nuestros clientes además de brindarles un trabajo de alta calidad 
                       como parte de nuestro compromiso. Queremos que se sienta seguro de su capacidad para comprender 
                       los diversos procedimientos relacionados con el mantenimiento y cuidado de sus jardines. Para mantener sus jardines florecientes 
                       y saludables durante todo el año, ofrecemos asesoramiento profesional sobre métodos de riego, selección de plantas, 
                       control de plagas y todo lo que sea necesario.</p>
      
    
    </div>
  );

  //el componente QuienesSomos muestra contenido que describe la empresa y sus servicios relacionados con jardinería. 
  //El componente también permite cambiar entre un modo de alto contraste y un modo normal al hacer clic en el botón. 
};

export default QuienesSomos;

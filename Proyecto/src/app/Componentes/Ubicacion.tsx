import React from 'react';
import '../assets/ubicacion.css'

const Ubicacion = () => {
  return (
    <div className='fondoU'>
    <div className="Ubicacion" id="Ubicacion">
      <h2 className='titulo'>¡ENCUÉNTRANOS AQUÍ!</h2>
      
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.413123594076!2d-70.65924602464234!3d-27.362810562160185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9697e3110c44ab7f%3A0xdc8895ef2354daac!2sValle%20Fertil%2C%20Copiap%C3%B3%2C%20Atacama!5e0!3m2!1ses!2scl!4v1682649681397!5m2!1ses!2scl"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
    
    </div>
    </div>
  );
};

export default Ubicacion;

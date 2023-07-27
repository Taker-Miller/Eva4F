
import React from 'react';
import '../assets/servicios.css'


export const Servicios = () => {
  return   <div className='FondoH'>
  <div className='FondoH'>
    <h2 className='Servicios-titulo '>Venta De Herramientas</h2>
    <div className="fila">
      <div className="fila-contenedor">
        <div>
          
          <h2 className='Servicios-titulo '>Fumigacion</h2>
          <img src="/images/fumigar-jardin.jpg" alt="fumigar" style={{ width: '200px' }} />
          <p>Precio: $50.000</p>
        </div>

        
        <div>
          <h2 className='Servicios-titulo '>Podar El Jardin</h2>
          <img src="/images/podar.jpg" alt="podar" style={{ width: '200px' }} />
          <p>Precio: $20.000</p>
        </div>
        </div>
      </div>
    </div>


    <div className="fila">
      <div className="fila-contenedor">
      <div>
          <h2 className='Servicios-titulo '>Mantencion Completa </h2>
          <img src="/images/mantencion.jpg" alt="mantencion" style={{ width: '200px' }} />
          <p>Precio: $130.000</p>
        </div>

      </div>
    </div>
  </div>

  // el componente Servicios muestra información sobre diferentes servicios relacionados con la venta de herramientas y servicios de jardinería. 
  //Cada servicio se muestra con un título, una imagen representativa y su respectivo precio. 

};

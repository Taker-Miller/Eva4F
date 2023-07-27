import React from 'react';
import '../assets/VentaPlantas.css'

const VentaPlantas = () => {
  return (
    <div className='FondoPlanta'>
      <div className='FondoPlanta'>
        <h2 className='Plantas-titulo '>Venta De Plantas</h2>
        <div className="fila">
          <div className="fila-contenedor">
            <div>
              
              <h2 className='Plantas-titulo '>Mioporo</h2>
              <img src="/images/mioporo.jpg" alt="mioporo" style={{ width: '200px' }} />
              <p>Precio: $2.000</p>
            </div>

            
            <div>
              <h2 className='Plantas-titulo '>Hortencias</h2>
              <img src="/images/hortencias.jpg" alt="hortencias" style={{ width: '200px' }} />
              <p>Precio: $7.000</p>
            </div>
            </div>
          </div>
        </div>


        <div className="fila">
          <div className="fila-contenedor">
          <div>
              <h2 className='Plantas-titulo '>Cactus </h2>
              <img src="/images/catus.jpg" alt="cactus" style={{ width: '200px' }} />
              <p>Precio: $2.000</p>
            </div>

        
          </div>
        </div>
      </div>

      //el componente VentaPlantas muestra información sobre diferentes tipos de plantas disponibles para la venta. 
      //Cada tipo de planta se muestra con un título, una imagen representativa y su precio
  );
};

export default VentaPlantas;

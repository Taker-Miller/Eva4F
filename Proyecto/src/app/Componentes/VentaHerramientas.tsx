import React from 'react';
import '../assets/VentaH.css';

export const VentaHerramientas = () => {
  return (
    <div className='FondoH'>
      <div className='FondoH'>
        <h2 className='titulo-Herramientas'>Venta De Herramientas</h2>
        <div className="fila">
          <div className="fila-contenedor">
            <div>
              
              <h2 className='titulo-Herramientas'> Tijeron de poda pasto</h2>
              <img src="/images/tijeron.jpg" alt="tijeron" style={{ width: '200px' }} />
              <p>Precio: $2.000</p>
              <ul className='Herramientas-titulo'>
                <li>Marca: Ergo</li>
                <li>Ancho: 12 cm</li>
                <li>Alto: 3,5 cm</li>
                <li>Material: Acero</li>
                <li>Color: Negro</li>
              </ul>
            </div>

            
            <div>
              <h2 className='titulo-Herramientas'>Barrehojas 22 Dientes</h2>
              <img src="/images/barrehojas.jpg" alt="barrehojas" style={{ width: '200px' }} />
              <p>Precio: $2.000</p>
              <ul className='Herramientas-titulo'>
                <li>Marca: Gili</li>
                <li>Ancho: 27 cm</li>
                <li>Alto: 150 cm</li>
                <li>Material: Metal</li>
                <li>Material Del Mango: Madera</li>
              </ul>
            </div>
            </div>
          </div>
        </div>


        <div className="fila">
          <div className="fila-contenedor">
          <div>
              <h2 className='titulo-Herramientas'>Rastrillo de acero </h2>
              <img src="/images/rastrillo.jpg" alt="rake" style={{ width: '200px' }} />
              <p>Precio: $2.000</p>
              <ul className='Herramientas-titulo'>
                <li>Marca: Plasmet</li>
                <li>Ancho: 40 cm</li>
                <li>Alto:  130 cm</li>
                <li>Material: Acero</li>
                <li>Material Del Mango: Metal</li>
              </ul>
            </div>

            <div>
            <div>
              <h2 className='titulo-Herramientas'>Kit de herramientas de jardín 3 piezas naranjo</h2>
              <img src="/images/kit.jpg" alt="kit" style={{ width: '200px' }} />
              <p>Precio: $2.000</p>
              <ul className='Herramientas-titulo'>
                <li>Marca: Tramontina</li>
                <li>Garantia: 6 meses</li>
                <li>Características: Resistente y duradero</li>
                <li>Condición del producto: Nuevo</li>
               
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
      //el componente VentaHerramientas muestra información sobre diferentes tipos de herramientas disponibles para la venta en una tienda de jardinería o similar. 
      //Cada tipo de herramienta se muestra con un título, una imagen representativa, su precio y una lista de características adicionales específicas para cada herramienta.
 
  );
};

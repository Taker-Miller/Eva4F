import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Header.css'


export const Header = () => {
  return (
    <nav className="header-nav"> {/* Agrega la clase "header-nav" */}
      <Link to="/">Inicio</Link>
      <Link to="/quienes-somos">¿Quienes Somos?</Link>
      <Link to="/consejos">Consejos</Link>
      <Link to="/VentaPlantas">Venta De Plantas</Link>
      <Link to="/VentaHerramientas">Venta De Herramientas</Link>
      <Link to="/Servicios">Servicios</Link>
      <Link to="/Ubicacion">Ubicacion</Link>
      <Link to="/formulario">Formulario</Link>
      <Link to="/mostrar">Registros</Link>
    
    </nav>

    //el componente Header define una barra de navegación con varios enlaces que permiten al usuario navegar a diferentes páginas de la aplicación cuando se hace clic en cada enlace. 
    //Cada enlace está vinculado a una ruta específica, lo que permite la navegación dentro de la aplicación.
  );
};

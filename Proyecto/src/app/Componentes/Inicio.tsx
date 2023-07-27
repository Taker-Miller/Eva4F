import React, { useState } from 'react';
import '../assets/inicio.css';

export const Inicio: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  const toggleContrast = () => {
    setIsHighContrast((prevState) => !prevState);
    //muestra un componente funcional llamado Inicio con un estado local isHighContrast que se puede cambiar mediante la función "toggleContrast". 
    //Esta función alterna el valor del estado isHighContrast entre true y false cada vez que se llama
  };

  return (
    <div className={`inicio-container ${isHighContrast ? 'contraste' : ''}`}>
      <button onClick={toggleContrast}>
        {isHighContrast ? 'Cambiar a alto contraste' : 'Cambiar a bajo contraste'}
      </button>

      <h2 className={`inicio-titulo ${isHighContrast ? 'black' : ''}`}>
        ¡BIENVENIDOS A LA PAGINA DE KING GARDEN!
      </h2>

      <div className='inicio-titulo'>
        <img src="/images/logo.jpg" alt="Inicio" className="ImagenInicio" />
      </div>
      <br />

      <p className={`inicio-parrafos ${isHighContrast ? 'black' : ''}`}>
      En esta página encontrarás una amplia variedad de plantas, herramientas de jardinería y consejos para el cuidado de tus plantas. Somos una tienda online especializada en plantas de interior y exterior, con envío a domicilio en todo Copiapó, Chile. Además, realizamos entregas en Paipote, Tierra Amarilla y Caldera.
           En King Garden, te ofrecemos: Plantas de Interior: Descubre nuestras hermosas plantas de interior que agregarán vida y belleza a tu hogar. Desde exuberantes helechos hasta elegantes lirios de la paz, tenemos la planta perfecta para cada espacio.
           Plantas de Exterior: Encuentra una amplia selección de plantas de exterior que prosperarán en tu jardín, patio o balcón. Ya sea que estés buscando coloridas flores, árboles frutales o plantas aromáticas, estamos aquí para ayudarte a crear un oasis verde al aire libre.
           Herramientas de Jardinería: Descubre nuestras herramientas de jardinería duraderas y funcionales que te ayudarán a cuidar tus plantas de manera efectiva. Desde palas y rastrillos hasta regaderas y tijeras de podar, tenemos todo lo que necesitas para mantener tu jardín en óptimas condiciones.
           Consejos de Cuidado de Plantas: ¿No estás seguro de cómo cuidar tus plantas? No te preocupes, estamos aquí para ayudarte. En nuestra página, encontrarás consejos prácticos y guías útiles sobre el riego, la poda, la exposición al sol y otros aspectos importantes para mantener tus plantas saludables y felices.
           Realizar un pedido en nuestra tienda online es fácil y conveniente. Simplemente selecciona los productos que deseas, completa el proceso de compra y nosotros nos encargaremos de entregártelos directamente en la puerta de tu casa.
      </p>
    </div>
  );
};
//muestra contenido y ajusta su apariencia según el estado isHighContrast para cambiar entre un modo de alto contraste y un modo normal cuando se hace clic en el botón. 
export default Inicio;

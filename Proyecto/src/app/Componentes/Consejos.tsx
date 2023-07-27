import React, { useState } from 'react';
import '../assets/consejos.css'

const Consejos = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  const toggleContrast = () => {
    setIsHighContrast((prevState) => !prevState);
  };

  //define un componente llamado Consejos, que mantiene un estado llamado isHighContrast para controlar el modo de alto contraste. 
  //La función toggleContrast se utiliza para alternar el valor de isHighContrast entre true y false cada vez que se llama.

  return (
    <div className={`consejos-container ${isHighContrast ? 'contraste' : ''}`}>
      <button onClick={toggleContrast}>
        {isHighContrast ? 'Cambiar a alto contraste' : 'Cambiar a bajo contraste'}
      </button>

      <h2 className={`consejos-titulo ${isHighContrast ? 'black' : ''}`}>CONSEJOS RESPECTO A LA JARDINERIA</h2>

      <div className='consejos-titulo'>
      <img src="/images/consejos_jardineria.jpg" alt="Consejos" className="ImagenConsejos" />
      </div>
      <br>
      </br>

      <h2 className={`consejos-titulo ${isHighContrast ? 'black' : ''}`}>Antes Que Nada Hay Que Definir El Jardin</h2>

      <p className={`consejos-parrafos ${isHighContrast ? 'black' : ''}`}>
        Un jardín puede servir para plantar flores de mil colores,
        crear espacios apropiados para el esparcimiento y cultivar hortalizas.
        Por eso, desde el principio es necesario definir la función que este va a cumplir y delimitar claramente las áreas destinadas a cada fin.
        De esa manera tendremos claro qué es lo que queremos y nos será mucho más fácil visualizar el cómo lo construiremos.
        Si el presupuesto nos lo permite no está de más contratar los servicios de un paisajista que nos ayude con el diseño.
        Así, obtendremos una mezcla perfecta entre colores, alturas y ubicaciones.</p>
      
      <div className='consejos-titulo'>
      <img src="/images/jardineria.jpg" alt="bienvenido" className="estilo-imagen" />
      </div>

      <p className={`consejos-parrafos ${isHighContrast ? 'black' : ''}`}>

      <h2 className={`consejos-titulo ${isHighContrast ? 'black' : ''}`}>
       Evaluar el clima de la zona
      </h2>
      
        Antes de comprar las plantas debemos conocer a fondo las condiciones climáticas
        de la zona en la que pretendemos desarrollar nuestro jardín (cálida, desértica, tropical, húmeda, fría, etc.).
        De esa manera, al visitar el vivero podremos elegir, con la asesoría
        de los profesionales del lugar, flores, matas, hierbas y arbustos que realmente se adaptarán al clima
        en que serán sembradas.
      </p>
      <div className='consejos-titulo'>
      <img src="/images/clima.jpg" alt="bienvenido" className="estilo-imagen" />
      </div>


      <h2 className={`consejos-titulo ${isHighContrast ? 'black' : ''}`}>Almacenaje de semillas</h2>

      <p className={`consejos-parrafos ${isHighContrast ? 'black' : ''}`}>
        Uno de los mejores trucos de jardinería consiste en almacenar semillas, tallos y demás en tarros limpios y en sitios secos.
          Así evitamos que germinen por sí solas. También es importante etiquetar adecuadamente las semillas almacenadas para evitar confusiones.
            Puedes utilizar etiquetas o marcar los tarros con el nombre de la planta y la fecha de almacenamiento.
              Esto te ayudará a recordar qué semillas tienes y cuándo las almacenaste, lo que facilitará la planificación de siembra en el futuro.</p>

      <div className='consejos-titulo'>
        <img src="/images/semillas.jpg" alt="bienvenido" className="estilo-imagen" />
          </div>

      <h2 className={`consejos-titulo ${isHighContrast ? 'black' : ''}`}>Tener en cuenta la altura de las plantas</h2>

      <p className={`consejos-parrafos ${isHighContrast ? 'black' : ''}`}>
        A la hora de sembrar nuestras plantas debemos tener presente la altura de cada una de ellas,
          para que al crecer las más altas no priven de la luz a las más chicas causándoles la muerte.
            O por el contrario, plantar no considerando el exceso de sol para algunas.</p>

      <div className='consejos-titulo'>
      <img src="/images/medir.jpg" alt="bienvenido" className="estilo-imagen" />
      </div>

      <h2 className={`consejos-titulo ${isHighContrast ? 'black' : ''}`}>Evaluar el sustrato o terreno</h2>

      <p className={`consejos-parrafos ${isHighContrast ? 'black' : ''}`}>
       Existen plantas que para vivir requieren terrenos más arenosos y drenados, como los cactus; otras, como las heliconias,
       prefieren suelos más arcillosos y húmedos. Es decir: cada tipo necesita un sustrato específico.
       En consecuencia, antes de sembrar debemos conocer el tipo de terreno que hay en nuestro jardín y recubrirlo con composta orgánica.
       De esa manera fertilizamos de forma natural y promovemos la actividad biológica en el suelo,
       obteniendo como resultado plantas más saludables. La misma lógica aplica para las matas que sembramos en macetas.</p>

      <div className='consejos-titulo'>
        <img src="/images/terreno.jpg" alt="bienvenido" className="estilo-imagen" />
          </div>
    </div>
  );

  //el componente Consejos proporciona consejos de jardinería y permite que el usuario alterne entre un modo de alto contraste y un modo de bajo contraste para facilitar la accesibilidad visual.
};

export default Consejos;

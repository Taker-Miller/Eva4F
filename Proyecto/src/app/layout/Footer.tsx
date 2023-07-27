import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/redesFooter.css'
import '../assets/footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='div'>
        <div>
          <h2 className='contacto'>Contacto</h2>
        </div>
    <br>
      </br>
        <br>
          </br>

        <p className='parrafos'>Horario de apertura al público: Sábados, Domingos y Festivos de 12h a 15h. Reservas de espacio: Hasta las 21h00.</p>

        <p className='parrafos'>Horario de Verano: Sábados, Domingos y Festivos de 19h a 21h. Reservas de espacio: Hasta las 1h00. Julio y Agosto.</p>

        <p className='parrafos'>Email: sebastian.villalobos26@inacapmail.cl</p>

        <p className='parrafos'>Teléfono: +34 654 39 48 93</p>
        
      </div>

      <div className='div'>
        <h2 className='donde-estamos'>Donde Estamos</h2>
        <div>
          <br></br>
          <br></br>
          <p className='parrafos'>Valle Fertil, Cruce Barranquilla, Atacama</p>
        </div>
      </div>

      <div className='div'>

        <div className='div'>

        <h2 className='redes-sociales'>Redes Sociales</h2>
        <br>
          </br>
              <br>
                </br>
        <div className='div'>
          <a href="https://www.facebook.com/sebastian.villalobos.39904" className="redes" style={{ backgroundImage: 'url(https://www.facebook.com/images/fb_icon_325x325.png)' }}><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/taker_miller/" className="redes" style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png)' }}><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/channel/UCfMlDscGIVIDQcUnUKymRbw" className="redes" style={{ backgroundImage: 'url(https://yt3.googleusercontent.com/ytc/AGIKgqPRVCTEhRVQrADl9rmBCDN7ODyBuwgqZ74AYkqNlw=s900-c-k-c0x00ffffff-no-rj)' }}><i className="fab fa-youtube"></i></a>
          <a href="https://twitter.com/TakerSeba" className="redes" style={{ backgroundImage: 'url(https://store-images.s-microsoft.com/image/apps.45406.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.2a88a418-b96d-44a6-ad4f-5e0ee6289b2c)' }}><i className="fab fa-twitter"></i></a>
        </div>
        </div>
      </div>
    </div>
    //el componente Footer muestra información en el pie de página de la página web, como detalles de contacto y ubicación, junto con enlaces a redes sociales. 
    //Esto proporciona una manera fácil para que los visitantes se conecten con el propietario de la página y accedan a sus perfiles en las redes sociales.
  );
};

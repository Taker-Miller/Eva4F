import React, { useState } from 'react';
import { Persona } from '../Interfaces/IFormulario';
import { registrarPersona } from '../Firebase/Promesas';
import '../assets/formulario.css';

export const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [sexo, setSexo] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [noSoyRobot, setNoSoyRobot] = useState(false);

  //el componente Formulario crea un formulario en React y utiliza el useState para gestionar los valores de varios campos de entrada del formulario, así como una variable para el campo No soy un robot. 
  //Cada campo tiene su respectiva variable de estado, y estas variables se utilizan para actualizar los valores del formulario a medida que el usuario interactúa con él.

  // Estados para manejar los errores de cada campo
  const [errorNombre, setErrorNombre] = useState('');
  const [errorApellido, setErrorApellido] = useState('');
  const [errorEdad, setErrorEdad] = useState('');
  const [errorContrasena, setErrorContrasena] = useState('');
  const [errorCiudad, setErrorCiudad] = useState('');
  const [errorNoSoyRobot, setErrorNoSoyRobot] = useState('');
  const [errorGeneral, setErrorGeneral] = useState('');

  const registrar = () => {
    // Validación de campos
    if (
      nombre.trim() === '' ||
      apellido.trim() === '' ||
      edad === '' ||
      !sexo ||
      ciudad === '' ||
      contrasena.length < 6 ||
      !noSoyRobot
    ) {
      setErrorGeneral('Por favor, complete todos los campos correctamente.');
      return;
    }

    const p: Persona = {
      nombre: nombre.trim(),
      apellido,
      edad: parseInt(edad),
      sexo,
      fechaNacimiento,
      ciudad,
      correoElectronico,
    };

    registrarPersona(p);
    alert('Bienvenido ' + nombre + ' ' + apellido);
  };

  const validarNombre = (valor: string) => {
    setNombre(valor);
    const pattern = /^[a-zA-Z\s]+$/;
    if (!pattern.test(valor)) {
      setErrorNombre('El nombre solo puede contener letras');
    } else if (valor.length < 4) {
      setErrorNombre('El nombre debe tener más de 4 letras');
    } else {
      setErrorNombre('');
    }
    setErrorGeneral('');
  };

  const validarApellido = (valor: string) => {
    setApellido(valor);
    const pattern = /^[a-zA-Z\s]+$/; // Expresión regular para solo letras y espacios
    if (!pattern.test(valor)) {
      setErrorApellido('El apellido solo puede contener letras');
    } else if (valor.trim() === '') {
      setErrorApellido('El apellido no puede estar en blanco');
    } else {
      setErrorApellido('');
    }
    setErrorGeneral('');
  };

  const validarCiudad = (valor: string) => {
    setCiudad(valor);
    if (valor === '') {
      setErrorCiudad('Debe seleccionar una ciudad');
    } else {
      setErrorCiudad('');
    }
    setErrorGeneral('');
  };

  const handleSexoChange = (valor: string) => {
    setSexo(valor);
    setErrorGeneral('');
  };

  const validarEdad = (valor: string) => {
    const pattern = /^[0-9]*$/; // Permitir una cadena vacía o solo números
    if (!pattern.test(valor)) {
      setErrorEdad('Ingrese solo números para la edad');
    } else {
      setErrorEdad('');
      setEdad(valor);
    }
    setErrorGeneral('');
  };

  const validarContrasena = (valor: string) => {
    setContrasena(valor);
    if (valor.length < 6) {
      setErrorContrasena('La contraseña debe tener al menos 6 caracteres');
    } else {
      setErrorContrasena('');
    }
    setErrorGeneral('');
  };

  const handleCheckboxChange = (checked: boolean) => {
    setNoSoyRobot(checked);
    setErrorNoSoyRobot(checked ? '' : 'Debe marcar esta casilla');
    setErrorGeneral('');
  };

  return (
    <div className='fondoFormulario'>
      <form className='formulario'>
        <label className='label'>Nombre: </label>
        <br />
        <input
          type='text'
          onChange={(e) => validarNombre(e.target.value)}
          value={nombre}
          placeholder='Ingresa Tu Nombre..'
        />
        <br />
        <span className='error-message'>{errorNombre}</span>
        <br />

        <label className='label'>Apellido: </label>
        <br />
        <input
          type='text'
          onChange={(e) => validarApellido(e.target.value)}
          value={apellido}
          placeholder='Ingresa Tu Apellido..'
        />
        <br />
        <span className='error-message'>{errorApellido}</span>
        <br />

        <label className='label'>Edad: </label>
        <br />
        <input
          type='text'
          onChange={(e) => validarEdad(e.target.value)}
          value={edad}
          placeholder='Ingresa Tu Edad..'
        />
        <br />
        <span className='error-message'>{errorEdad}</span>
        <br />

        <label className='label'>Contraseña:</label>
        <br />
        <input
          type='password'
          onChange={(e) => validarContrasena(e.target.value)}
          value={contrasena}
          placeholder='Ingresa Una Contraseña..'
        />
        <br />
        <span className='error-message'>{errorContrasena}</span>
        <br />

        <label className='label'>Sexo:</label>
        <br />
        <div className='radio-container'>
          <p className='label'>Masculino</p>
          <label className='radio-label'>
            <input
              type='radio'
              name='sexo'
              value='masculino'
              checked={sexo === 'masculino'}
              onChange={(e) => handleSexoChange(e.target.value)}
              className='custom-radio'
            />
            <br />
            <br />
          </label>
          <br />

          <p className='label'>Femenino</p>
          <label className='radio-label'>
            <input
              type='radio'
              name='sexo'
              value='femenino'
              checked={sexo === 'femenino'}
              onChange={(e) => handleSexoChange(e.target.value)}
              className='custom-radio'
            />
          </label>
        </div>
        <span className='error-message'>{errorGeneral}</span>
        <br />

        <label className='label'>Fecha de Nacimiento:</label>
        <br />
        <input
          type='date'
          onChange={(e) => setFechaNacimiento(e.target.value)}
          value={fechaNacimiento}
        />
        <br />

        <label className='label'>Ciudad:</label>
        <br />
        <select value={ciudad} onChange={(e) => validarCiudad(e.target.value)}>
          <option value=''>Seleccione una opción</option>
          <option value='Copiapó'>Copiapó</option>
          <option value='Caldera'>Caldera</option>
          <option value='Paipote'>Paipote</option>
        </select>
        <br />
        <span className='error-message'>{errorCiudad}</span>

        <label className='label'>Correo Electrónico:</label>
        <br />
        <input
          type='email'
          onChange={(e) => setCorreoElectronico(e.target.value)}
          value={correoElectronico}
          placeholder='Ingresa Tu Correo Electronico..'
        />
        <br />

        <div className='checkbox-container'>
          <p className='label'>No Soy Un Robot</p>
          <label className='label'>
            <input
              type='checkbox'
              checked={noSoyRobot}
              onChange={(e) => handleCheckboxChange(e.target.checked)}
            />
          </label>
          <span className='error-message'>{errorNoSoyRobot}</span>
        </div>

        <button type='button' onClick={registrar}>Registrar</button>
      </form>
    </div>
  );
};
//muestra un formulario de registro con validación para cada campo de entrada y opciones de selección. Cuando el usuario completa el formulario y hace clic en el botón "Registrar", 
//se invoca la función registrar para procesar la información ingresada por el usuario.
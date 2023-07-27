import { Persona } from "../Interfaces/IFormulario";
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./FirebaseApp";

const convertirSnapshotAPersona = (snapshot: any): Persona => {
  const datos = snapshot.data();
  return {
    nombre: datos.nombre,
    apellido: datos.apellido,
    edad: parseInt(datos.edad),
    sexo: datos.sexo,
    fechaNacimiento: datos.fechaNacimiento,
    correoElectronico: datos.correoElectronico,
    ciudad: datos.ciudad,
    idPersona: snapshot.id,
  };

  //la función convertirSnapshotAPersona convierte un objeto "snapshot" de una base de datos en un objeto Persona, extrayendo y asignando los datos relevantes del "snapshot" a las propiedades del objeto Persona.
};



export const registrarPersona = async (p: Persona) => {
  await addDoc(collection(db, "personas"), p);

  //la función registrarPersona se utiliza para agregar un una nueva persona a una colección llamada "personas
};

export const actualizarPersona = async (idPersona: string, p: Persona) => {
  const docRef = doc(db, "personas", idPersona);
  await updateDoc(docRef, { ...p });

  //la función actualizarPersona se utiliza para actualizar los datos de una persona. Recibe como entrada el identificador único de la persona y un objeto que contiene los nuevos datos a actualizar. 
  //Luego, utiliza la referencia del documento para actualizar el documento existente con los nuevos datos proporcionados.
};

export const eliminarPersona = async (idPersona: string) => {
  await deleteDoc(doc(db, "personas", idPersona));

  //la función eliminarPersona se utiliza para eliminar una persona. Recibe como entrada el identificador único de la persona a eliminar y utiliza la referencia del documento para realizar la eliminación
};

export const obtenerPersonas = async () => {
  const querySnapshot = await getDocs(collection(db, "personas"));
  var personas: Persona[] = [];
  querySnapshot.forEach((d) => {
    var p: Persona = convertirSnapshotAPersona(d);
    personas.push(p);
  });
  return personas;

  //la función obtenerPersonas se utiliza para obtener una lista de personas almacenadas. Utiliza la función getDocs para obtener los documentos de la colección personas, 
  //y luego itera sobre cada documento para convertirlos en objetos Persona y almacenarlos en un array. 
};

export const obtenerPersona = async (idPersona: string) => {
  const docRef = doc(db, "personas", idPersona);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const p: Persona = convertirSnapshotAPersona(docSnap);
    return p;
  } else {
    return undefined;

    //la función obtenerPersona se utiliza para obtener la información de una persona específica desde la base de datos, identificada por su "idPersona". 
    //Si la persona existe en la base de datos, se devuelve la información de la persona como un objeto Persona. Si la persona no existe, se devuelve undefined.
  }
};

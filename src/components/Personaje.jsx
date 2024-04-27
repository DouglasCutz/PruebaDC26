import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  {UnicoPersonaje, unicoPersonaje} from '../functions/funciones'
import '../css/Personaje.css';



const Personaje = () => {
    const [personaje, setPersonaje] = useState(null);
    const params = useParams();
  
    useEffect(() => {
      unicoPersonaje(params.id, setPersonaje);
    }, []);
  
    return (
      <div className="container">
        {personaje != null ? (
          <div className="personaje-info">
            <h2>Personaje con el id {params.id}</h2>
            <p>Nombre: {personaje.name}</p>
            <p>Género: {personaje.gender}</p>
            <p>Especie: {personaje.species}</p>
            <img src={personaje.image} alt="" />
          </div>
        ) : (
          'No hay personaje'
        )}
      </div>
    );
  };
  
  export default Personaje;

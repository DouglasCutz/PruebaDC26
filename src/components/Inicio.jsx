import React,{useEffect, useState} from 'react'
import { todosPersonajes } from '../functions/funciones'
import '../css/Inicio.css';

const Inicio = () => {
    const [personajes, setPersonajes] = useState(null);
  
    useEffect(() => {
      todosPersonajes(setPersonajes);
    }, []);
  
    return (
      <div className="card-container">
        {personajes != null ? (
          personajes.map(personaje => (
            <div className="card" key={personaje.id}>
              <a href={`/personaje/${personaje.id}`}>
                <img src={personaje.image} alt={personaje.name} />
                <div>{personaje.name}</div>
              </a>
            </div>
          ))
        ) : (
          'No hay personajes'
        )}
      </div>
    );
  };
  
  export default Inicio;

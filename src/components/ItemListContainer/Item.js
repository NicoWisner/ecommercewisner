import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [users, setUsers] = useState([]);
  try {
    const obtenerUsers = async () => {
      const oDatos = await fetch('https://rickandmortyapi.com/api/character');
      const usu = await oDatos.json();
      console.log(usu);
      setUsers(usu);
    };
    useEffect(() => {
      obtenerUsers();
    }, []);
  } catch (err) {
    console.log('error', err);
  }

  return (
    <div>
      {users?.results?.map((element) => {
        return (
          <div className="container ">
            <div className="d-flex flex-row">
              <div className="flex-row">
                <div
                  key={element.id}
                  class="card p-2 container"
                  style={{ width: '18rem;' }}
                >
                  <img src={element.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title bg-dark">{element.name}</h5>
                    <p class="card-text bg-dark">{element.species}</p>
                    <p class="card-text bg-dark">{element.origin.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
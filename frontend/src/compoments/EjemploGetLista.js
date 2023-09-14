import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Realizar una solicitud GET para obtener la lista de usuarios
    axios
      .get("/api/users")
      .then((response) => {
        // Actualizar el estado de React con los datos recibidos
        setUsers(response.data);
      })
      .catch((error) => {
        // Manejar errores
        console.error("Error al obtener la lista de usuarios:", error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

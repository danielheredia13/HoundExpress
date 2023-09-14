import React, { useState } from "react";
import axios from "axios";

function PackageShippingForm() {
  const [formData, setFormData] = useState({
    origen: "",
    destino: "",
    peso: "",
    alto: "",
    largo: "",
    ancho: "",
    contenido: "",
    // Otros campos relacionados con el envío de paquetes
  });

  const [token, setToken] = useState(""); // Almacena el token JWT

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones del formulario
    if (!formData.origen || !formData.destino || !formData.peso) {
      alert("Por favor, complete los campos requeridos.");
      return;
    }

    // Realizar una solicitud POST segura con el token de autenticación
    axios
      .post("/api/packages", formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Agrega el token al encabezado
        },
      })
      .then((response) => {
        // Manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito
        console.log("Envío de paquete exitoso:", response.data);
      })
      .catch((error) => {
        // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
        console.error("Error al enviar el paquete:", error);
      });
  };

  return (
    <div>
      <h1>Formulario de Envío de Paquetes</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Origen:</label>
          <input
            type="text"
            name="origen"
            value={formData.origen}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Destino:</label>
          <input
            type="text"
            name="destino"
            value={formData.destino}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Peso (kg):</label>
          <input
            type="number"
            name="peso"
            value={formData.peso}
            onChange={handleChange}
          />
        </div>
        {/* Otros campos relacionados con el envío de paquetes */}
        <div>
          <label>Token de Autenticación:</label>
          <input
            type="text"
            name="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </div>
        <button type="submit">Enviar Paquete</button>
      </form>
    </div>
  );
}

export default PackageShippingForm;

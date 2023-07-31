import React, { useState, useEffect } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PackagesScreen = () => {
  const navigate = useNavigate();

  const [shipmentList, setShipmentList] = useState([]);

  const fetchShipments = async () => {
    const { data } = await axios("/api/shipment");
    setShipmentList(data);
  };

  useEffect(() => {
    fetchShipments();
  }, []);

  const deleteShipment = async (id) => {
    const { data } = await axios.delete(`/api/shipment/${id}`);
    fetchShipments();
  };

  return (
    <Container className="custom-table">
      <Button className="mt-3" onClick={() => navigate("/")}>
        Atras
      </Button>
      <Table bordered hover responsive className="table-sm mt-3 mb-5">
        <thead>
          <tr>
            <th>Origen / Nombre</th>
            <th>Origen / Telefono</th>
            <th>Origen / Correo Electronico</th>
            <th>Destino / Nombre</th>
            <th>Destino / Telefono</th>
            <th>Destino / Correo Electronico</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {shipmentList &&
            shipmentList.length > 0 &&
            shipmentList.map((shipment) => (
              <tr key={shipment._id}>
                <td>{shipment.origenNombre}</td>
                <td>{shipment.origenTelefono}</td>
                <td>{shipment.origenCorreoElectronico}</td>
                <td>{shipment.destinoNombre}</td>
                <td>{shipment.destinoTelefono}</td>
                <td>{shipment.destinoCorreoElectronico}</td>
                <td>
                  <Button className="btn-sm rounded">
                    <i
                      onClick={() => navigate(`/shipment/${shipment._id}`)}
                      className="fa-sharp fa-solid fa-pen"
                    ></i>
                  </Button>

                  <Button
                    onClick={() => deleteShipment(shipment._id)}
                    className="btn-sm rounded btn-trash"
                    variant="danger"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PackagesScreen;

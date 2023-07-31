import React, { useState, useEffect } from "react";
import { Container, Button, Card, InputGroup, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ShipmentScreen = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [origenNombre, setOrigenNombre] = useState("");
  const [origenTelefono, setOrigenTelefono] = useState("");
  const [origenCorreoElectronico, setOrigenCorreoElectronico] = useState("");
  const [origenEmpresa, setOrigenEmpresa] = useState("");
  const [origenCalle, setOrigenCalle] = useState("");
  const [origenNumeroExt, setOrigenNumeroExt] = useState("");
  const [origenNumeroInt, setOrigenNumeroInt] = useState("");
  const [origenColonia, setOrigenColonia] = useState("");
  const [origenDelegacion, setOrigenDelegacion] = useState("");
  const [origenEstado, setOrigenEstado] = useState("");
  const [origenCodigoPostal, setOrigenCodigoPostal] = useState("");
  const [origenComentario, setOrigenComentario] = useState("");
  const [destinoNombre, setDestinoNombre] = useState("");
  const [destinoTelefono, setDestinoTelefono] = useState("");
  const [destinoCorreoElectronico, setDestinoCorreoElectronico] = useState("");
  const [destinoEmpresa, setDestinoEmpresa] = useState("");
  const [destinoCalle, setDestinoCalle] = useState("");
  const [destinoNumeroExt, setDestinoNumeroExt] = useState("");
  const [destinoNumeroInt, setDestinoNumeroInt] = useState("");
  const [destinoColonia, setDestinoColonia] = useState("");
  const [destinoDelegacion, setDestinoDelegacion] = useState("");
  const [destinoEstado, setDestinoEstado] = useState("");
  const [destinoCodigoPostal, setDestinoCodigoPostal] = useState("");
  const [paquetes, setPaquetes] = useState([
    { peso: "", alto: "", largo: "", ancho: "", contenido: "" },
  ]);

  useEffect(() => {
    const packageFetch = async (id) => {
      try {
        const { data } = await axios(`/api/shipment/${id}`);

        setOrigenNombre(data.origenNombre);
        setOrigenTelefono(data.origenTelefono);
        setOrigenCorreoElectronico(data.origenCorreoElectronico);
        setOrigenEmpresa(data.origenEmpresa);
        setOrigenCalle(data.origenCalle);
        setOrigenNumeroExt(data.origenNumeroExt);
        setOrigenNumeroInt(data.origenNumeroInt);
        setOrigenColonia(data.origenColonia);
        setOrigenDelegacion(data.origenDelegacion);
        setOrigenEstado(data.origenEstado);
        setOrigenCodigoPostal(data.origenCodigoPostal);
        setOrigenComentario(data.origenComentario);
        setDestinoNombre(data.destinoNombre);
        setDestinoTelefono(data.destinoTelefono);
        setDestinoCorreoElectronico(data.destinoCorreoElectronico);
        setDestinoEmpresa(data.destinoEmpresa);
        setDestinoCalle(data.destinoCalle);
        setDestinoNumeroExt(data.destinoNumeroExt);
        setDestinoNumeroInt(data.destinoNumeroInt);
        setDestinoColonia(data.destinoColonia);
        setDestinoDelegacion(data.destinoDelegacion);
        setDestinoEstado(data.destinoEstado);
        setDestinoCodigoPostal(data.destinoCodigoPostal);
        setPaquetes(data.paquetes);
      } catch (error) {
        console.log(error.message);
      }
    };
    packageFetch(id);
  }, [id]);

  const handleAddPackage = () => {
    setPaquetes([
      ...paquetes,
      { peso: "", alto: "", largo: "", ancho: "", contenido: "" },
    ]);
  };

  const handleUpdatePackage = (index, field, data) => {
    const updatedpackages = [...paquetes];
    updatedpackages[index][field] = data;
    setPaquetes(updatedpackages);
  };

  const handleUpdateShipment = async () => {
    try {
      const shipmentData = {
        origenNombre,
        origenTelefono,
        origenCorreoElectronico,
        origenEmpresa,
        origenCalle,
        origenNumeroExt,
        origenNumeroInt,
        origenColonia,
        origenDelegacion,
        origenEstado,
        origenCodigoPostal,
        origenComentario,
        destinoNombre,
        destinoTelefono,
        destinoCorreoElectronico,
        destinoEmpresa,
        destinoCalle,
        destinoNumeroExt,
        destinoNumeroInt,
        destinoColonia,
        destinoDelegacion,
        destinoEstado,
        destinoCodigoPostal,
        paquetes,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.put(
        `/api/shipment/${id}`,
        shipmentData,
        config
      );

      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container className="home">
      <Container>
        <Button
          onClick={() => navigate("/packages")}
          className="btn-contact-display mt-3"
        >
          Atras
        </Button>
      </Container>
      <Container>
        <Card className="p-3 shipment-add">
          <h4>Actualizar Envio</h4>
          <h5>Remitente</h5>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={origenNombre}
              onChange={(e) => setOrigenNombre(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Telefono</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={origenTelefono}
              onChange={(e) => setOrigenTelefono(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              Correo Electronico
            </InputGroup.Text>
            <Form.Control
              placeholder=""
              value={origenCorreoElectronico}
              onChange={(e) => setOrigenCorreoElectronico(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Empresa</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={origenEmpresa}
              onChange={(e) => setOrigenEmpresa(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Calle</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={origenCalle}
              onChange={(e) => setOrigenCalle(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Numero Exterior</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={origenNumeroExt}
              onChange={(e) => setOrigenNumeroExt(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Numero Interior</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={origenNumeroInt}
              onChange={(e) => setOrigenNumeroInt(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Colonia</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={origenColonia}
              onChange={(e) => setOrigenColonia(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Delegacion</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={origenDelegacion}
              onChange={(e) => setOrigenDelegacion(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Estado</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={origenEstado}
              onChange={(e) => setOrigenEstado(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Codigo Postal</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={origenCodigoPostal}
              onChange={(e) => setOrigenCodigoPostal(e.target.value)}
            />
          </InputGroup>
          <h5>Destinatario</h5>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={destinoNombre}
              onChange={(e) => setDestinoNombre(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Telefono</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={destinoTelefono}
              onChange={(e) => setDestinoTelefono(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              Correo Electronico
            </InputGroup.Text>
            <Form.Control
              placeholder=""
              value={destinoCorreoElectronico}
              onChange={(e) => setDestinoCorreoElectronico(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Empresa</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={destinoEmpresa}
              onChange={(e) => setDestinoEmpresa(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Calle</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={destinoCalle}
              onChange={(e) => setDestinoCalle(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Numero Exterior</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={destinoNumeroExt}
              onChange={(e) => setDestinoNumeroExt(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Numero Interior</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={destinoNumeroInt}
              onChange={(e) => setDestinoNumeroInt(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Colonia</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={destinoColonia}
              onChange={(e) => setDestinoColonia(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Delegacion</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={destinoDelegacion}
              onChange={(e) => setDestinoDelegacion(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Estado</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={destinoEstado}
              onChange={(e) => setDestinoEstado(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Codigo Postal</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={destinoCodigoPostal}
              onChange={(e) => setDestinoCodigoPostal(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>Comentario</InputGroup.Text>
            <Form.Control
              as="textarea"
              value={origenComentario}
              onChange={(e) => setOrigenComentario(e.target.value)}
            />
          </InputGroup>
          {paquetes &&
            paquetes.map((paq, index) => {
              return (
                <Card key={index} className="p-3 shipment-add">
                  <h5>Paquete {index + 1}</h5>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Peso</InputGroup.Text>
                    <Form.Control
                      placeholder=""
                      value={paq.peso}
                      onChange={(e) =>
                        handleUpdatePackage(index, "peso", e.target.value)
                      }
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Largo</InputGroup.Text>
                    <Form.Control
                      placeholder=""
                      value={paq.largo}
                      onChange={(e) =>
                        handleUpdatePackage(index, "largo", e.target.value)
                      }
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Ancho</InputGroup.Text>
                    <Form.Control
                      placeholder=""
                      value={paq.ancho}
                      onChange={(e) =>
                        handleUpdatePackage(index, "ancho", e.target.value)
                      }
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Alto</InputGroup.Text>
                    <Form.Control
                      placeholder=""
                      value={paq.alto}
                      onChange={(e) =>
                        handleUpdatePackage(index, "alto", e.target.value)
                      }
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      Contenido
                    </InputGroup.Text>
                    <Form.Control
                      placeholder=""
                      value={paq.contenido}
                      onChange={(e) =>
                        handleUpdatePackage(index, "contenido", e.target.value)
                      }
                    />
                  </InputGroup>
                </Card>
              );
            })}
          <Button className="btn-add rounded my-3" onClick={handleAddPackage}>
            Agregar Otro Paquete
          </Button>
          <Button className="btn-add rounded" onClick={handleUpdateShipment}>
            Actualizar Envio
          </Button>
        </Card>
      </Container>
    </Container>
  );
};

export default ShipmentScreen;

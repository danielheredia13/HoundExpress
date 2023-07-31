import React, { useState } from "react";
import { Container, Button, Card, InputGroup, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UsersTable from "../compoments/UsersTable";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "../compoments/PDFDocument";
import Message from "../compoments/Message";

const HomeScreen = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [pdfData, setPdfData] = useState({});
  const [packageValidBoolean, setPackageValidBoolean] = useState(false);
  const [message, setMessage] = useState("");
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

  const handleFetchUsers = async () => {
    try {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUseUser = (id) => {
    let user = users.filter((user) => user.id === id);

    if (user && user[0].name) {
      setOrigenNombre(user[0].name);
      setOrigenCorreoElectronico(user[0].email);
      setOrigenTelefono(user[0].phone);
      setOrigenCalle(user[0].address.street);
      setOrigenNumeroInt(user[0].address.suite);
      setOrigenDelegacion(user[0].address.city);
      setOrigenCodigoPostal(user[0].address.zipcode);
      setOrigenEmpresa(user[0].company.name);
    }
  };

  const handleZipCode = async (cp) => {
    try {
      const { data } = await axios(`/api/zipcode/${cp}`);

      if (cp === origenCodigoPostal) {
        setOrigenColonia(data.colonia);
        setOrigenDelegacion(data.delegacion);
        setOrigenEstado(data.estado);
      }

      if (cp === destinoCodigoPostal) {
        setDestinoColonia(data.colonia);
        setDestinoDelegacion(data.delegacion);
        setDestinoEstado(data.estado);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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

  const isPackageValid = async () => {
    const { data } = await axios("/api/packagelimits");
    const { peso, alto, largo, ancho } = data;

    const valid = paquetes.every((paq) => {
      return (
        parseFloat(paq.peso) <= peso &&
        parseFloat(paq.alto) <= alto &&
        parseFloat(paq.largo) <= largo &&
        parseFloat(paq.ancho) <= ancho
      );
    });

    if (valid) {
      handleNewShipment(valid);
    } else {
      setMessage("Dimensiones o peso del paquete excedidos");
    }
  };

  const handleNewShipment = async (valid) => {
    try {
      if (valid) {
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

        setPdfData(shipmentData);

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const { data } = await axios.post(
          "/api/shipment",
          shipmentData,
          config
        );

        window.scrollTo({ top: 0, behavior: "smooth" });

        setOrigenNombre("");
        setOrigenTelefono("");
        setOrigenCorreoElectronico("");
        setOrigenEmpresa("");
        setOrigenCalle("");
        setOrigenNumeroExt("");
        setOrigenNumeroInt("");
        setOrigenColonia("");
        setOrigenDelegacion("");
        setOrigenEstado("");
        setOrigenCodigoPostal("");
        setOrigenComentario("");
        setDestinoNombre("");
        setDestinoTelefono("");
        setDestinoCorreoElectronico("");
        setDestinoEmpresa("");
        setDestinoCalle("");
        setDestinoNumeroExt("");
        setDestinoNumeroInt("");
        setDestinoColonia("");
        setDestinoDelegacion("");
        setDestinoEstado("");
        setDestinoCodigoPostal("");
        setPaquetes([
          { peso: "", alto: "", largo: "", ancho: "", contenido: "" },
        ]);
      } else {
        setMessage("Dimensiones o peso del paquete excedidos");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const errorReset = () => {
    setMessage("");
  };

  return (
    <Container className="home">
      <Button
        onClick={() => navigate("/packages")}
        className="btn-display mt-3"
      >
        Envios
      </Button>
      <Button onClick={handleFetchUsers} className="btn-display mt-3">
        Usuarios
      </Button>
      <Container>
        <UsersTable users={users} handleUseUser={handleUseUser} />
        <Card className="p-3 mb-5 shipment-add">
          <h4>Nuevo Envio</h4>
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
            <InputGroup.Text id="basic-addon1">Codigo Postal</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={origenCodigoPostal}
              onChange={(e) => setOrigenCodigoPostal(e.target.value)}
              onBlur={() => handleZipCode(origenCodigoPostal)}
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
            <InputGroup.Text id="basic-addon1">Codigo Postal</InputGroup.Text>
            <Form.Control
              placeholder=""
              value={destinoCodigoPostal}
              onChange={(e) => setDestinoCodigoPostal(e.target.value)}
              onBlur={() => handleZipCode(destinoCodigoPostal)}
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
          <InputGroup>
            <InputGroup.Text>Comentario</InputGroup.Text>
            <Form.Control
              as="textarea"
              value={origenComentario}
              onChange={(e) => setOrigenComentario(e.target.value)}
            />
          </InputGroup>
          {!packageValidBoolean && message.length > 1 && (
            <Container className="mt-3">
              <Message
                text={message}
                variant="danger"
                errorReset={errorReset}
              />
            </Container>
          )}

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
          <Button className="btn-add rounded mb-2" onClick={isPackageValid}>
            Agregar Envio
          </Button>
          {pdfData && pdfData.origenNombre && (
            <PDFDownloadLink
              document={<PDFDocument data={pdfData} />}
              fileName="nuevo-envio.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Cargando PDF..." : "Descargar PDF"
              }
            </PDFDownloadLink>
          )}
        </Card>
      </Container>
    </Container>
  );
};

export default HomeScreen;

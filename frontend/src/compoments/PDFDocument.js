import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
});

const PDFDocument = ({ data }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>Nuevo Envio</Text>
        <Text style={styles.subtitle}>Remitente</Text>
        <Text style={styles.text}>Nombre: {data.origenNombre}</Text>
        <Text style={styles.text}>Telefono: {data.origenTelefono}</Text>
        <Text style={styles.text}>
          Correo Electronico: {data.origenCorreoElectronico}
        </Text>
        <Text style={styles.text}>Empresa: {data.origenEmpresa}</Text>
        <Text style={styles.text}>
          Codigo Postal: {data.origenCodigoPostal}
        </Text>
        <Text style={styles.text}>Calle: {data.origenCalle}</Text>
        <Text style={styles.text}>Numero Exterior: {data.origenNumeroExt}</Text>
        <Text style={styles.text}>Numero Interior: {data.origenNumeroInt}</Text>
        <Text style={styles.text}>Colonia: {data.origenColonia}</Text>
        <Text style={styles.text}>Delegacion: {data.origenDelegacion}</Text>
        <Text style={styles.text}>Estado: {data.origenEstado}</Text>

        <Text style={styles.subtitle}>Destinatario</Text>
        <Text style={styles.text}>Nombre: {data.destinoNombre}</Text>
        <Text style={styles.text}>Telefono: {data.destinoTelefono}</Text>
        <Text style={styles.text}>
          Correo Electronico: {data.destinoCorreoElectronico}
        </Text>
        <Text style={styles.text}>Empresa: {data.destinoEmpresa}</Text>
        <Text style={styles.text}>
          Codigo Postal: {data.destinoCodigoPostal}
        </Text>
        <Text style={styles.text}>Calle: {data.destinoCalle}</Text>
        <Text style={styles.text}>
          Numero Exterior: {data.destinoNumeroExt}
        </Text>
        <Text style={styles.text}>
          Numero Interior: {data.destinoNumeroInt}
        </Text>
        <Text style={styles.text}>Colonia: {data.destinoColonia}</Text>
        <Text style={styles.text}>Delegacion: {data.destinoDelegacion}</Text>
        <Text style={styles.text}>Estado: {data.destinoEstado}</Text>

        <Text style={styles.title}>Paquetes</Text>
        {data.paquetes &&
          data.paquetes.map((paq, index) => (
            <View key={index}>
              <Text style={styles.subtitle}>Paquete {index + 1}</Text>
              <Text style={styles.text}>Peso: {paq.peso}</Text>
              <Text style={styles.text}>Largo: {paq.largo}</Text>
              <Text style={styles.text}>Ancho: {paq.ancho}</Text>
              <Text style={styles.text}>Alto: {paq.alto}</Text>
              <Text style={styles.text}>Contenido: {paq.contenido}</Text>
            </View>
          ))}
      </Page>
    </Document>
  );
};

export default PDFDocument;

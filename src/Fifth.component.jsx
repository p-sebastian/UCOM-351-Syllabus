import React from 'react'
import { ListGroup, Card } from 'react-bootstrap'

const Fifth = () => (
  <Card>
    <Card.Body>
      <Card.Title>5.1 Generales</Card.Title>
      <ListGroup>
        <ListGroup.Item>
          <b>5.1.1 </b>
          Entendimiento de la arquitectura de desarrollo de aplicaciones para
          Internet considerando el uso de las mejores practicas en el mercado
          global
        </ListGroup.Item>
        <ListGroup.Item>
          <b>5.1.2 </b>
          Desarrollo de habilidades técnicas en patrones de diseño SOA y
          Microservicios
        </ListGroup.Item>
        <ListGroup.Item>
          <b>5.1.3 </b>
          Utilización de las herramientas más idóneas para acelerar el
          desarrollo de aplicaciones
        </ListGroup.Item>
      </ListGroup>
      <Card.Title style={{ paddingTop: 10 }}>5.2 Especificos</Card.Title>
      <ListGroup>
        <ListGroup.Item>
          <b>5.2.1 </b>
          Aprender el uso de servicios web y su especificación
        </ListGroup.Item>
        <ListGroup.Item>
          <b>5.2.2 </b>
          Identificar patrones de diseño y aplicarlo cuando se lo requiera
        </ListGroup.Item>
        <ListGroup.Item>
          <b>5.2.3 </b>
          Utilizar el modelo MVC en la construcción de soluciones Web
        </ListGroup.Item>
      </ListGroup>
    </Card.Body>
  </Card>
)

export default Fifth

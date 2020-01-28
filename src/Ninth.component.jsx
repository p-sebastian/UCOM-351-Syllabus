import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const Ninth = () => (
  <Card>
    <Card.Body>
      <Card.Title>9.1 Bibliografia Basica</Card.Title>
      <ListGroup>
        <ListGroup.Item>
          <b>9.1.1 </b>
          Spring Microservices in action
        </ListGroup.Item>
        <ListGroup.Item>
          <b>9.1.2 </b>
          Pro ASP.NET MVC 5
        </ListGroup.Item>
        <ListGroup.Item>
          <b>9.1.3 </b>
          Building Web Applications with Visual Studio 2017: Using .NET Core and
          Modern JavaScript Frameworks
        </ListGroup.Item>
      </ListGroup>
      <Card.Title style={{ paddingTop: 10 }}>
        9.2 Bibliografia Complementaria
      </Card.Title>
      <ListGroup>
        <ListGroup.Item>
          <b>9.2.1 </b>
          SOA: Principles of Service Design
        </ListGroup.Item>
        <ListGroup.Item>
          <b>9.2.2 </b>
          Beginning Spring Boot 2
        </ListGroup.Item>
      </ListGroup>
    </Card.Body>
  </Card>
)

export default Ninth

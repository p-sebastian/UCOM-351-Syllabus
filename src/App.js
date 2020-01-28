import React from 'react'
import Header from './Header.component'
import First from './First.component'
import Second from './Second.component'
import { Third, Fourth } from './Third.component'
import Fifth from './Fifth.component'
import { Accordion, Card } from 'react-bootstrap'
import Sixth from './Sixth.component'
import Seventh from './Seventh.component'
import Eight from './Eight.component'
import Ninth from './Ninth.component'
import Tenth from './Tenth.component'

function App() {
  return (
    <div>
      <Header />

      <Accordion defaultActiveKey="9">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            1. Informacion General de la Asignatura
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <First />
          </Accordion.Collapse>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            2. Dedicacion de Horas
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Second />
          </Accordion.Collapse>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            3. Descripcion
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Third />
          </Accordion.Collapse>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            4. Justificacion
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Fourth />
          </Accordion.Collapse>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            5. Objetivos de la asignatura
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Fifth />
          </Accordion.Collapse>
          <Accordion.Toggle as={Card.Header} eventKey="5">
            6. Politicas generales del curso
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Sixth />
          </Accordion.Collapse>
          <Accordion.Toggle as={Card.Header} eventKey="6">
            7. Resultados de aprendizaje y estrategias de evaluacion
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="6">
            <Seventh />
          </Accordion.Collapse>
          <Accordion.Toggle as={Card.Header} eventKey="7">
            8. Programacion de los contenidos
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="7">
            <Eight />
          </Accordion.Collapse>
          <Accordion.Toggle as={Card.Header} eventKey="8">
            9. Bibliografia
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="8">
            <Ninth />
          </Accordion.Collapse>
          <Accordion.Toggle as={Card.Header} eventKey="9">
            10. Datos del Profesor
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="9">
            <Tenth />
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}

export default App

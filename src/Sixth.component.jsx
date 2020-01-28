import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const Sixth = () => (
  <Card>
    <Card.Body>
      <Card.Subtitle>
        Las políticas generales tienen que ver con aquellas directrices de
        Facultad enmarcada en los reglamentos, deben ser las mismas en todas las
        materias de la carrera. Se detallan ejemplos:
      </Card.Subtitle>
      <ListGroup>
        <ListGroup.Item>
          <b>Código de vestimenta: </b> Los estudiantes deben vestir en pantalón
          o jean en clase, no se permite shorts, ni zapatillas de playa (Esto es
          un ejemplo)
        </ListGroup.Item>
        <ListGroup.Item>
          <b>No se permite el uso de celulares durante la clase. </b>
          Colocar teléfonos en modo “silencio”. En caso de emergencia de
          contestar o enviar mensaje, favor salir del aula para esta actividad y
          reincorporarse en silencio para no interrumpir a los demás.
        </ListGroup.Item>
        <ListGroup.Item>
          <b>El horario de clase es el establecido: </b>
          Un estudiante podrá entrar a clase hasta 15 minutos luego de iniciada
          la clase.
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Inasistencias a clases: </b>
          solo se aceptan 6 faltas a la 7 reprueba la materia. (Materias de 3
          créditos).
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Las tareas deben pertenecer únicamente a un estudiante, </b>
          salvo que la tarea sea asignada en grupo. En el caso de copias o actos
          deshonestos la calificación será CERO para todos los involucrados.
        </ListGroup.Item>
        <ListGroup.Item>
          <b>La fecha de entrega de las tareas es impostergable.</b>
          Las tareas entregados en días posteriores a la fecha indicada se
          califican con la siguiente escala:
        </ListGroup.Item>
        <ListGroup.Item>
          1 día después de la fecha de entrega: -20 % menos (empieza 1 segundo
          después de la hora de entrega)
        </ListGroup.Item>
        <ListGroup.Item>
          2 días después de la fecha de entrega: -100 % menos
        </ListGroup.Item>
      </ListGroup>
    </Card.Body>
  </Card>
)

export default Sixth

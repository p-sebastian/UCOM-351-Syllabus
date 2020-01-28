import React from 'react'
import { ListGroup } from 'react-bootstrap'

const First = () => (
  <ListGroup>
    <ListGroup.Item>
      <div>
        <b>Asignatura</b> Desarrollo de Aplicaciones WEB
      </div>
      <div>
        <b>Codigo:</b> UCOM 351
      </div>
      <div>
        <b>Año:</b> 2020
      </div>
    </ListGroup.Item>
    <ListGroup.Item>
      <div>
        <b>Periodo Academico:</b> 13 de Enero a 4 de Abril
      </div>
      <div>
        <b>Semestre:</b> Extraordinario
      </div>
      <div>
        <b>Tipo de Materia:</b> Obligatoria
      </div>
    </ListGroup.Item>
    <ListGroup.Item>
      <div>
        <b>Corequisitos:</b> Ninguno
      </div>
      <div>
        <b>Numero de creditos:</b> 3
      </div>
    </ListGroup.Item>
    <ListGroup.Item>
      <div>
        <b>Unidad de Organizacion Curricular:</b> Profesional
      </div>
    </ListGroup.Item>
  </ListGroup>
)
export default First

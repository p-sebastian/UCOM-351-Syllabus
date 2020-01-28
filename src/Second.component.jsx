import React from 'react'
import { Table, Card } from 'react-bootstrap'
import styles from './Second.module.css'

const Second = () => (
  <Card.Body>
    <div className={styles.row}>
      <div>
        <Card.Title>DOCENCIA</Card.Title>
        <Table size="sm" striped bordered hover>
          <thead>
            <tr>
              <th>Horas de componente de aprendizaje asistido</th>
              <th>Horas de aprendizaje colaborativo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>48</td>
              <td>12</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <Card.Title>COMPONENTES</Card.Title>
        <Table size="sm" striped bordered hover>
          <thead>
            <tr>
              <th>Horas de componente de practica</th>
              <th>Horas de aprendizaje autonomo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>48</td>
              <td>48</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  </Card.Body>
)

export default Second

import React from 'react'
import { Card, Table } from 'react-bootstrap'

const DATA = [
  [
    'Aprender, diferenciar y analizar los patrones de diseño de aplicaciones Web e integraciones de aplicaciones',
    'Evaluación de conocimiento sobre los patrones de diseño de aplicaciones Web',
    'Alto / Medio / Bajo',
    'Evaluación escrita y sustentación oral',
    '25%',
    '25%'
  ],
  [
    'Aprender a codificar en la suite de herramientas de ASP.NET',
    'Resolución de problemas con programas informáticos en ASP.NET',
    'Alto / Medio / Bajo',
    'Talleres prácticos Proyecto',
    '25%',
    '25%'
  ],
  [
    'Emplear correctamente el paradigma de desarrollo basado en MVC.',
    'Construir aplicaciones usando el paradigma MVC',
    'Alto / Medio / Bajo',
    'Talleres prácticos Proyectos',
    '25%',
    '25%'
  ],
  [
    'Construir aplicaciones para Internet que aprovechen las tecnologías modernas en simplificar los problemas de programación para brindar mas opciones en lógica de negocio',
    'Creación de aplicaciones para Internet con las mejores tecnologías del mercado global',
    'Alto / Medio / Bajo',
    'Talleres prácticos Proyectos',
    '25%',
    '25%'
  ]
]
const Seventh = () => (
  <Card>
    <Card.Body>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <th rowSpan={2}>Resultados de aprendizaje</th>
            <th colSpan={3}>Estrategias de evaluacion</th>
            <th colSpan={2}>Ponderacion</th>
          </tr>
          <tr>
            <td>(Medición de resultados- Producto/desempeño esperado)</td>
            <td>Criterios y niveles de logro</td>
            <td>Técnicas e instrumentos</td>
            <td>Parcial 1</td>
            <td>Parcial 2</td>
          </tr>
          {DATA.map((r, ri) => (
            <tr key={ri}>
              {r.map((c, ci) => (
                <td key={ci}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Card.Body>
  </Card>
)

export default Seventh

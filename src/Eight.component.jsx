import React from 'react'
import { Card, Table } from 'react-bootstrap'

const DATA = [
  [
    1,
    '',
    'Unidad 1: Introducción',
    'Introducción a la materia Revisión de programa de estudio',
    '',
    '',
    'Grupos de discusión Investigación y trabajos grupales',
    ''
  ],
  [
    1,
    '',
    'Unidad 2: Arquitectura Web',
    'Conceptos básicos de arquitectura Web Evolución de la arquitectura',
    '',
    '',
    'Presentación de exposición en clase',
    ''
  ],
  [
    1,
    '',
    'Unidad 3: Arquitectura Orientada a Servicios',
    'Introducción a la arquitectura orientada a servicios, SOA Qué es un servicio Componentes de una arquitectura SOA',
    '',
    '',
    'Casos prácticos de implementaciones SOA en empresas telecom',
    ''
  ],
  [
    1,
    '',
    'Unidad 4: Arquitectura Orientada a Microservicios',
    'Introducción a la arquitectura orientada a microservicios, MSA Qué es un microservicio Componentes de una arquitectura MSA',
    '',
    '',
    'La arquitectura MSA como una evolución',
    ''
  ],
  [
    1,
    '',
    'Unidad 5: Spring Boot',
    'Introducción al framework de desarrollo de Spring Boot',
    '',
    '',
    'Talleres de Spring Boot',
    ''
  ],
  [
    1,
    '',
    'Unidad 6: Desarrollo de microservicios con Spring Boot',
    'Desarrollo con Eclipse y Spring Boot en Microservicios',
    '',
    '',
    'Talleres de Spring Boot',
    ''
  ],
  [
    1,
    '',
    'Unidad 7: Introducción a ASP.NET',
    'Historia de ASP.NET Evolución de ASP.NET',
    '',
    '',
    'Presentación de exposición en clase',
    ''
  ],
  [
    1,
    '',
    'Unidad 8: Creación de proyectos en ASP.NET MVC',
    'Manejo de Controllers, Views and Data Model Uso de Routes Creando y renderizando un View Manejando Dynamic Output',
    '',
    '',
    'Talleres en ASP.NET',
    ''
  ],
  [
    1,
    '',
    'Unidad 9: Data-Entry Application',
    'Manejo de Scene Diseñando Data Model',
    '',
    '',
    'Talleres en ASP.NET',
    ''
  ],
  [
    1,
    '',
    'Unidad 10: Formularios Web',
    'Construcción de formularios Web Manejo de eventos Manejo de validaciones Manejo de estilos',
    '',
    '',
    'Talleres en ASP.NET',
    ''
  ],
  [
    1,
    '',
    'Unidad 11: Consumo de servicios WEB',
    'Aplicaciones WEB consumiendo servicios WEB en SOAP y REST',
    '',
    '',
    'Talleres en ASP.NET y Servicios WEB REST y SOAP',
    ''
  ],
  [
    1,
    '',
    'Unidad 12: Talleres de creación de aplicaciones WEB y servicios WEB',
    'Aplicaciones WEB que interactúan con servicios WEB en SOAP y REST',
    '',
    '',
    'Talleres en ASP.NET y Servicios WEB REST y SOAP',
    ''
  ]
]
const Eight = () => (
  <Card>
    <Card.Body>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>SEM</th>
            <th>Resultados de Aprendizaje de la Materia / Learning Outcomes</th>
            <th>Número de Unidad / Temática</th>
            <th>Subtemas /Contenidos</th>
            <th>Estrategias metodológicas / Actividades</th>
            <th>Prácticas de aplicación/exp.</th>
            <th>Trabajo autónomo / Tareas fuera de clase</th>
            <th>Bibliografía a utilizar (Codificado)</th>
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

export default Eight

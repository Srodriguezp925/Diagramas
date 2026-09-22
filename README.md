# Diagramas de la patente «Defence Gun»

Proyecto dedicado a representar el diseño de la patente del **«Defence Gun»**, un arma de fuego de repetición patentada por **James Puckle en 1718**. La documentación presenta el mismo concepto mediante tres tipos de diagrama: **SVG**, **Excalidraw** y **Mermaid**.

## Objetivo

Mostrar de forma visual y comparable los principales elementos descritos en la patente:

- el cañón y su soporte;
- el cilindro giratorio con varias cámaras;
- el mecanismo de rotación y carga;
- la posición del tirador y la orientación del arma;
- la secuencia general de funcionamiento.

Los diagramas tienen un propósito **histórico y educativo**. Son representaciones esquemáticas de la patente y no deben interpretarse como planos de fabricación ni como una reproducción exacta de un arma histórica.

## Versiones del diagrama

### SVG

Ilustración vectorial del arma y de sus componentes principales. Este formato permite conservar la nitidez al ampliar la imagen y facilita su visualización directamente en un navegador.

Archivo: [defence-gun.svg](defence-gun.svg)

### Excalidraw

Diagrama editable con un estilo de pizarra. La versión de Excalidraw permite reorganizar los elementos, añadir anotaciones y explicar visualmente la relación entre las distintas partes del mecanismo.

Archivo: [defence-gun.excalidraw](defence-gun.excalidraw)

### Mermaid

Diagrama textual que representa la secuencia simplificada de funcionamiento:

Archivo: [defence-gun.mmd](defence-gun.mmd)

```mermaid
flowchart LR
	A[Preparar el arma] --> B[Cargar una cámara del cilindro]
	B --> C[Disparar]
	C --> D[Girar el cilindro]
	D --> E[Alinear la siguiente cámara]
	E --> B
```

## Contexto histórico

En 1718, James Puckle registró una patente para un arma montada sobre un soporte y equipada con un cilindro rotatorio. La intención era permitir varios disparos sucesivos sin recargar el cañón después de cada tiro. La patente también distinguía entre diferentes tipos de munición, incluida una propuesta de proyectil cuadrado destinada a emplearse contra determinados enemigos.

El proyecto se centra en la **estructura y el funcionamiento representado en la patente**, sin presentar el diseño como un arma moderna ni validar sus afirmaciones históricas o militares.

## Estructura prevista

```text
.
├── README.md
├── defence-gun.svg
├── defence-gun.excalidraw
└── defence-gun.mmd
```

## Visualización y edición

- El archivo `.svg` puede abrirse en cualquier navegador moderno.
- El archivo `.excalidraw` puede editarse en [Excalidraw](https://excalidraw.com/) o mediante una aplicación compatible.
- El archivo `.mmd` puede renderizarse con [Mermaid Live Editor](https://mermaid.live/) o con cualquier herramienta compatible con Mermaid.

## Alcance

Este repositorio reúne una interpretación gráfica de una patente histórica. Las ilustraciones simplifican algunos detalles para favorecer la lectura y no sustituyen la consulta del documento original ni de fuentes especializadas.
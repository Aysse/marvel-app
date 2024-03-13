# Proyecto Marvel App

Este proyecto consta de dos partes: un backend desarrollado con Node.js y Express, y un frontend desarrollado con React.js (Vite).

## Estructura del Proyecto

- `app/`: Carpeta del frontend.
- `server/`: Carpeta del backend.

## Ejecución de la Aplicación

## Stack Tecnológico

- React.js: 18.2.0
- Node.js: 20.8.1 

### Backend

1. Abre una terminal y navega hasta la carpeta del backend.

```bash
cd server
```

2. Instala las dependencias.

```bash
npm install
```

3. Inicia el servidor en modo desarrollo.

```bash
npm run dev
```

### Frontend
1. Abre otra terminal y navega hasta la carpeta del frontend.

```bash
cd app
```

2. Instala las dependencias.

```bash
npm install
```

3. Inicia la aplicación en modo desarrollo.

```bash
npm run dev
```
### Tests

- Entrar en la carpeta server o app y ejecutar el siguiente comando:
```bash
npm run test
```

### Lint

- Entrar en la carpeta server o app y ejecutar el siguiente comando:
```bash
npm run lint
```

## Vistas de la Aplicación

### Vista Principal

- Muestra un listado de 50 personajes o el resultado de la búsqueda.
- Haz clic en el icono de favoritos para ver los personajes favoritos almacenados.

### Detalle del Personaje

- Muestra información detallada sobre el personaje y los cómics en los que aparece.

### Notas Adicionales

- La aplicación utiliza modos de desarrollo y producción. Consulta las secciones correspondientes en package.json para más detalles.
# Hotel Reservación backend - Prueba Técnica

Este repositorio contiene el backend para la aplicación reservacion de hotel, desarrollado con Node.js y Express. El backend maneja la lógica del servidor, las conexiones a la base de datos y la autenticación de usuarios.

## Características

- **Node.js y Express**: El backend está construido utilizando Node.js y Express para manejar las rutas y la lógica del servidor.
- **Autenticación JWT**: Implementación de autenticación mediante tokens JWT para garantizar la seguridad de las sesiones de usuario.
- **Base de Datos con Mongoose**: Utilización de Mongoose para modelar los datos y conectarse a una base de datos MongoDB.
- **Gestión de Usuarios**: Incluye funcionalidades para el registro, inicio de sesión y administración de usuarios.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente antes de comenzar:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/) (gestor de paquetes)
- [MongoDB](https://www.mongodb.com/) (debe estar corriendo localmente o en un servicio en la nube)

## Instalación

Clona este repositorio y navega al directorio del proyecto:

```bash
git clone https://github.com/jaimecalderon19/hotel-reservacion-backend.git
cd hotel-reservacion-backend
```

Instala las dependencias del proyecto:

```bash
npm install
# o
yarn install
```

## Configuración

Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables de entorno:

```env
MONGO_URI=tu_conexion_a_mongodb
DATABASE=nombre_de_base_de_datos
JWT_SECRET=tu_secreto_jwt
PORT=3000
```

Asegúrate de reemplazar `tu_conexion_a_mongodb` y `tu_secreto_jwt` con tus valores reales.

## Uso

### Desarrollo

Para iniciar el servidor en modo de desarrollo, utiliza el siguiente comando:

```bash
npm run dev
# o
yarn dev
```

Esto iniciará el servidor utilizando `ts-node-dev` con soporte para recarga automática de cambios.

### Producción

Para construir el proyecto y ejecutarlo en producción:

```bash
npm run prod
# o
yarn prod
```

Esto compilará el código TypeScript en JavaScript y luego iniciará el servidor.

## Estructura del Proyecto

```plaintext
├── src
│   ├── controllers    # Controladores de las rutas
│   ├── models         # Modelos de Mongoose
│   ├── routes         # Definiciones de rutas
│   ├── middlewares    # Middlewares personalizados
│   └── main.ts        # Punto de entrada principal
├── dist               # Código JavaScript compilado para producción
├── .env               # Variables de entorno
├── package.json       # Configuración del proyecto y dependencias
└── tsconfig.json      # Configuración de TypeScript
```

## Scripts Disponibles

- `start`: Inicia el servidor utilizando el archivo compilado en `dist/main.js`.
- `dev`: Inicia el servidor en modo de desarrollo con `tsx` y recarga automática.
- `build`: Compila el código TypeScript en JavaScript y lo guarda en la carpeta `dist`.
- `prod`: Ejecuta `build` y luego `start` para desplegar en producción.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-feature`).
3. Realiza tus cambios.
4. Haz un commit de tus cambios (`git commit -am 'Añadir nueva feature'`).
5. Haz push a la rama (`git push origin feature/nueva-feature`).
6. Abre un Pull Request.
# Insurezella

## Descripción
Insurezella es un proyecto frontend desarrollado como parte de un desafío de desarrollo web. Está construido utilizando **Next.js** y **Tailwind CSS**, e incluye un slider interactivo con **React Slick** para la presentación de productos de seguros. El objetivo es proporcionar una interfaz moderna y responsiva que facilite la navegación y el acceso a información sobre diferentes tipos de seguros.

## Requisitos previos

Para ejecutar este proyecto de manera local, asegúrate de tener instalado:

- **Node.js** (versión 14.x o superior)
- **npm** o **yarn**

Las dependencias necesarias para el proyecto están en el archivo `package.json`:

```json
"dependencies": {
    "autoprefixer": "^10.4.20",
    "next": "14.2.13",
    "react": "^18",
    "react-dom": "^18",
    "react-icons": "^5.3.0",
    "react-slick": "^0.30.2",
    "slick-carousel": "^1.8.1"
  },
"devDependencies": {
    "eslint": "^8",
    "eslint-config-next": "14.2.13",
    "postcss": "^8",
    "tailwindcss": "^3.4.1"
}
```

## Instalación

Sigue los pasos a continuación para ejecutar este proyecto en tu máquina local:

1. Clona este repositorio:

    ```bash
    git clone https://github.com/usuario/insurezella.git


    ```
2. Dirigete a la carpeta del proyecto:

    ```bash
    cd insurezella

    ```
3. Instala las dependencias:

    ```bash
    npm install

    ```
4. Ejecuta el proyecto en modo desarrollador:

    ```bash
    npm run dev

    ```
   El servidor de desarrollo estará disponible en `http://localhost:3000`.
   
   ## Estructura del proyecto

   La estructura principal del proyecto es la siguiente:

   insurezella/
├── src/
│   ├── app/
│   │   ├── styles/
│   │   │   ├── index.css
│   │   │   └── favicon.ico
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   ├── Footer/
│   │   │   └── index.js
│   │   ├── Header/
│   │   │   └── index.js
│   │   ├── Hero/
│   │   │   └── index.js
│   │   ├── Insurances/
│   │   │   └── index.js
│   │   ├── Plans/
│   │   │   └── index.js
│   │   └── Products/
│   │       └── index.js
├── .eslintrc.json
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.js
├── package.json
└── README.md

## Uso

Para acceder a la aplicación, visita ``http://localhost:3000`` tras ejecutar el servidor. El proyecto incluye las siguientes funcionalidades clave:

- Slider interactivo: Navega entre las diferentes opciones de seguros.
- Contenido responsivo: La interfaz se ajusta a diferentes tamaños de pantalla.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue los procedimientos habituales de GitHub:

1.Haz un fork del proyecto.
2. Crea una rama con la nueva característica (git checkout -b feature/nueva-caracteristica).
3. Realiza los cambios necesarios y haz commit (git commit -am 'Añadir nueva característica').
4. Haz push a la rama (git push origin feature/nueva-caracteristica).
5. Abre un Pull Request.
¡Gracias por tu contribución!



# 🖥️ BuildTech — Catálogo de Componentes de PC

<div align="center">

**Proyecto académico de Desarrollo Front-End**

*Institución Universitaria Politécnico Grancolombiano*  
*Facultad de Ingeniería, Diseño e Innovación*  
*Bogotá, Colombia — 2026*

</div>

---

## 📋 Descripción del Proyecto

**BuildTech** es una aplicación web tipo catálogo diseñada para explorar y gestionar componentes de PC (procesadores, boards, memorias RAM, almacenamiento, refrigeración, fuentes de poder, chasis y ventiladores). El sitio permite a los usuarios navegar por un catálogo organizado por categorías, ver el detalle técnico de cada producto, guardar sus componentes favoritos y contactar al equipo de soporte.

Este proyecto fue desarrollado como parte de la asignatura de **Front-End**, aplicando los conocimientos adquiridos en los módulos de **HTML5**, **CSS3** y **JavaScript**.

---

## 👥 Equipo de Desarrollo

| Nombre | Rol |
|--------|-----|
| Junior Mosquera Mosquera | Desarrollador |
| Daniel Alfonzo González Pérez | Desarrollador |
| Georgette Garzón Burgos | Desarrollador |
| Samuel Duque Porras | Desarrollador |

**Docente:** Edgar Mauricio López Rojas

---

## 🗂️ Estructura del Proyecto

```
BuildTech/
│
├── index.html              → Página de inicio (Home)
├── catalogo.html           → Catálogo de productos
├── producto.html           → Vista de detalle de un producto
├── favoritos.html          → Lista de productos favoritos
├── contacto.html           → Formulario de contacto
│
├── css/
│   ├── styles.css          → Estilos globales y sistema de diseño
│   ├── inicio.css          → Estilos específicos de la página de inicio
│   ├── catalogo.css        → Estilos del catálogo
│   ├── producto.css        → Estilos del detalle de producto
│   ├── favoritos.css       → Estilos de la página de favoritos
│   └── contacto.css        → Estilos de la página de contacto
│
├── js/
│   ├── main.js             → Funciones compartidas (navegación, favoritos, utilidades)
│   ├── data.js             → Base de datos de productos (estructura tipo JSON)
│   ├── carousel.js         → Lógica del carrusel de la página de inicio
│   ├── catalogo.js         → Filtrado por categorías y renderizado de productos
│   ├── producto.js         → Carga dinámica del detalle y sistema de tabs
│   ├── favoritos.js        → Gestión de favoritos con LocalStorage
│   └── contacto.js         → Validación del formulario de contacto
│
└── assets/
    └── img/                → Imágenes del proyecto (formato .webp)
        ├── products/       → Imágenes de los productos
        ├── hero/           → Imagen del banner principal
        ├── setups/         → Fotos de builds de usuarios
        └── icons/          → Íconos e ilustraciones
```

---

## 🚀 Páginas del Sitio

### 1. Inicio (`index.html`)
Página principal con un **banner hero** de impacto visual, un **carrusel de componentes destacados** con navegación por flechas, una sección informativa que invita al usuario a explorar el catálogo y un grid con **builds montados por otros usuarios** a modo de comunidad.

### 2. Catálogo (`catalogo.html`)
Muestra el inventario completo de productos organizado por **8 categorías**: Procesadores, Boards, Memorias RAM, Almacenamiento, Refrigeración, Fuentes de Poder, Chasis y Fans. Al hacer clic en una categoría del sidebar, el contenido se **filtra dinámicamente** sin recargar la página.

### 3. Detalle de Producto (`producto.html`)
Vista individual de cada componente con **imagen ampliada**, precio, descripción, especificaciones técnicas (núcleos, hilos, velocidad de reloj) y un sistema de **pestañas (tabs)** para alternar entre Especificaciones, Descripción e Información Técnica. Incluye el botón **"Agregar a Favoritos"**.

### 4. Favoritos (`favoritos.html`)
Lista personalizada de los productos que el usuario ha guardado. Los datos se **persisten con LocalStorage**, por lo que sobreviven al cierre del navegador. Cada producto puede ser eliminado individualmente con animación visual.

### 5. Contacto (`contacto.html`)
Formulario con campos de Nombre, Email, Asunto (desplegable) y Mensaje, con **validación en tiempo real**. La barra lateral muestra las sedes de BuildTech (Medellín, Bogotá, Santa Marta) y enlaces a redes sociales.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso en el Proyecto |
|------------|-------------------|
| **HTML5** | Estructura semántica de todas las páginas |
| **CSS3** | Estilos, animaciones, layouts con Grid y Flexbox |
| **JavaScript (ES6+)** | Interactividad, manipulación del DOM, lógica de negocio |
| **LocalStorage** | Persistencia de datos de favoritos en el navegador |
| **Google Fonts** | Tipografía Montserrat para una estética moderna |

---

## 📚 Conceptos Aplicados

Este proyecto integra los siguientes conceptos vistos en la asignatura:

- **Escenario 1 — Desarrollo Web:** Comprensión del modelo cliente-servidor y protocolo HTTP.
- **Escenario 2 — HTML:** Estructura semántica con etiquetas como `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, formularios y tablas.
- **Escenario 3 — CSS:** Separación de la presentación (archivos `.css` externos), uso de selectores, variables CSS (`--custom-properties`), Flexbox, CSS Grid, transiciones y animaciones con `@keyframes`.
- **Escenario 4 — JavaScript:** Manipulación del DOM, eventos, funciones, arreglos de objetos, `localStorage`, `URLSearchParams`, `IntersectionObserver` y renderizado dinámico de contenido.

## 📄 Licencia

Proyecto académico desarrollado con fines educativos para el Politécnico Grancolombiano. Todos los derechos reservados © 2026.

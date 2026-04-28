# 🖥️ BuildTech — Componentes de PC

## 📋 Descripción

**BuildTech** es una aplicación web SPA (Single Page Application) construida con **Angular 19** que permite explorar, filtrar y gestionar componentes de PC. Los usuarios pueden navegar por un catálogo de productos, ver detalles técnicos, guardar favoritos con persistencia local y enviar consultas a través de un formulario de contacto con validación reactiva.

---

## 🛠️ Stack Tecnológico

| Tecnología    | Versión / Detalle                  |
| ------------- | ---------------------------------- |
| **Framework** | Angular 19 (Standalone Components) |
| **Lenguaje**  | TypeScript 5.x                     |
| **Estilos**   | CSS3 (Variables + BEM)             |
| **Fuente**    | Google Fonts — Montserrat          |
| **Estado**    | RxJS BehaviorSubject / Subject     |
| **Storage**   | LocalStorage (favoritos)           |
| **Build**     | Angular CLI + Vite                 |

---

## 📁 Estructura del Proyecto

```
BuildTech/
├── src/
│   ├── app/
│   │   ├── components/          # Componentes compartidos
│   │   │   ├── header/          # Navbar con badge de favoritos
│   │   │   ├── footer/          # Footer global
│   │   │   ├── product-card/    # Card reutilizable (3 variantes)
│   │   │   └── toast/           # Notificaciones animadas
│   │   ├── models/              # Interfaces TypeScript
│   │   │   ├── product.model.ts
│   │   │   └── category.model.ts
│   │   ├── pages/               # Componentes de página
│   │   │   ├── home/            # Página principal con Hero + Carousel
│   │   │   ├── catalogo/        # Catálogo con filtro por categorías
│   │   │   ├── producto/        # Detalle de producto con pestañas
│   │   │   ├── favoritos/       # Lista de favoritos reactiva
│   │   │   ├── contacto/        # Formulario con Reactive Forms
│   │   │   └── blog/            # Sección blog (próximamente)
│   │   ├── services/            # Servicios inyectables
│   │   │   ├── product.service.ts
│   │   │   ├── favorites.service.ts
│   │   │   └── toast.service.ts
│   │   ├── app.ts               # Componente raíz
│   │   ├── app.html             # Template raíz (Header + Router + Footer)
│   │   ├── app.config.ts        # Configuración de providers
│   │   └── app.routes.ts        # Definición de rutas
│   ├── styles.css               # Estilos globales (variables, reset, BEM)
│   ├── index.html               # HTML entry point
│   └── main.ts                  # Bootstrap de la aplicación
├── public/                      # Assets estáticos (imágenes)
├── angular.json                 # Configuración Angular CLI
├── tsconfig.json                # Configuración TypeScript
└── package.json                 # Dependencias
```

---

## 🚀 Instalación y Ejecución

### Prerrequisitos

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/S4muelDP/BuildTech.git
cd BuildTech

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm start
# → Disponible en http://localhost:4200/
```

---

## 📄 Páginas y Rutas

| Ruta              | Página     | Descripción                              |
| ----------------- | ---------- | ---------------------------------------- |
| `/`               | Home       | Hero, carrusel de productos, setups      |
| `/catalogo`       | Catálogo   | Grid de productos con filtro por categoría |
| `/producto/:id`   | Producto   | Detalle con especificaciones y pestañas  |
| `/favoritos`      | Favoritos  | Lista reactiva con persistencia local    |
| `/contacto`       | Contacto   | Formulario con validación reactiva       |
| `/blog`           | Blog       | Sección en construcción                  |

---

## 🧩 Arquitectura de Componentes

### Standalone Components

Todos los componentes utilizan la arquitectura **Standalone** de Angular 19 (sin NgModules):

- **`HeaderComponent`** — Navbar con navegación activa y badge de favoritos reactivo
- **`FooterComponent`** — Footer informativo con links de navegación
- **`ProductCardComponent`** — Card reutilizable con 3 variantes: `catalog`, `carousel`, `favorite`
- **`ToastComponent`** — Sistema de notificaciones animadas con auto-dismiss

### Servicios

- **`ProductService`** — Gestión del catálogo de productos y categorías
- **`FavoritesService`** — Persistencia en LocalStorage con estado reactivo (BehaviorSubject)
- **`ToastService`** — Emisor de notificaciones mediante RxJS Subject

---

## 🧑‍💻 Desarrolladores

| Nombre            | Rol         |
| ----------------- | ----------- |
| Junior Mosquera   | Desarrollo  |
| Samuel Duque      | Desarrollo  |
| Daniel González   | Desarrollo  |
| Georgette Garzón  | Desarrollo  |

---

## 📌 Notas

- La aplicación utiliza **datos estáticos** embebidos en el `ProductService` (sin backend).
- Los favoritos se persisten en `localStorage` bajo la clave `buildtech_favorites`.
- Las imágenes de producto incluyen un **fallback SVG** generado dinámicamente si la imagen original no carga.
- La migración se realizó desde una arquitectura estática HTML/CSS/JS hacia Angular SPA manteniendo paridad visual pixel-perfect.

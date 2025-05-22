# 🎬 MovieApp - Maquetado con React + TMDB API

Este proyecto es una aplicación web de maquetado donde se consume la API de [The Movie Database (TMDB)](https://www.themoviedb.org/) para mostrar distintas categorías de películas en una interfaz responsiva, utilizando **React**, **React Hooks** y **CSS puro**.

## 🚀 Tecnologías utilizadas

- React
- React DOM
- React Router DOM (para las rutas)
- React Hooks (`useState`, `useEffect`, `useParams`)
- CSS puro (sin frameworks de UI)
- API REST de TMDB

## 📸 Funcionalidades

- Ver películas por categorías: Tendencias, Populares, En Cartelera, Próximamente.
- Ver tráileres de películas (embed desde YouTube).
- Navegación entre secciones con React Router.
- Diseño responsive y accesible.
- Scroll horizontal y verticales para las películas.
- Modal animado para el tráiler.
- Dinamismo total con carga desde API externa.

## ⚙️ Instalación

1. Cloná el repositorio:

```bash
git clone https://github.com/tuusuario/movie-app.git
cd movie-app
```
2. Instalá dependencias:
```bash
  npm install
```
3. Configurá tu API key de TMB:

- Crea un archivo `env` en la raíz de tu proyecto con la siguiente variable
```env
  VITE_TMDB_API_KEY=TU_API_KEY
```
> Podés conseguir una API key gratuita en: https://developer.themoviedb.org/
4. Iniciá el proyecto

```bash
npm run dev
```

## 📦 Dependencias

```json
"dependencies": {
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x"
}
```

## 🎨 Estilos
- Todos los estilos están escritos con CSS puro organizados por componente (opcionalmente 1 archivo `.css` por componente).

## 📌 Estado del proyecto

✅ Proyecto funcional y en desarrollo activo.
📅 Última actualización: Mayo 2025
🎯 Objetivo: Practicar integración con API externas, maquetado moderno, manejo de estado y rutas en React.

## 📬 Contacto

- Email: bravoalva19@gmail.com
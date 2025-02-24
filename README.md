#  Contact Center App

## Descripción

Este proyecto es una aplicación frontend desarrollada en **Next.js** para un **contact center**. Permite visualizar información en tiempo real sobre los agentes y los clientes en espera, con actualizaciones mediante **WebSockets** y una API RESTful.

## Tecnologías utilizadas

- **Next.js** (CSR, SSR, App Router, Streaming)
- **React Hooks** (`useState`, `useEffect`, `useContext`)
- **WebSockets** para actualizaciones en tiempo real
- **Fetch API** para llamadas RESTful
- **Manejo de estado global**
- **Componentes reutilizables y modulares**

---

## Funcionalidades

###  Listado de Agentes
- Muestra la lista de agentes con:
  - **Nombre**
  - **Estado** (Disponible, En llamada, En pausa, etc.)
  - **Tiempo en espera**
- Permite filtrar los agentes por estado.

###  Listado de Clientes en espera
- Muestra la lista de clientes con:
  - **Nombre**
  - **Tiempo de espera**
- Permite filtrar los clientes según su tiempo de espera.

###  Actualización en Tiempo Real
- Implementación de **WebSockets** para recibir cambios en el estado de los agentes y la lista de clientes en espera.

###  Filtros con Query Params
- Implementación de filtros en la URL con **QueryParams**, asegurando una experiencia fluida para el usuario.

###  Renderizado Híbrido
- Uso de **Server-Side Rendering (SSR)** y **Client-Side Rendering (CSR)** dependiendo del contexto.
- Implementación de **Streaming y Loading UI** con el nuevo **App Router** de Next.js.

---

##  Instalación y Configuración

### 🔹 Requisitos
- **Node.js** v16+
- **NPM** o **Yarn**

### 🔹 Instalación
```bash
# Clonar el repositorio
git clone https://github.com/JeffersonFAG/VisualContact.git
cd contact-center-app

# Instalar dependencias
npm install  
```

### 🔹 Ejecución en desarrollo
```bash
npm run dev  
```
Accede a `http://localhost:3000` para ver la aplicación.

---

## 🛠 Estructura del Proyecto
```bash
📦 contact-center-app
├── 📂 app              # Páginas de Next.js (App Router)
├── 📂 components       # Componentes reutilizables
├── 📂 context          # Custom hooks
├── 📂 hooks            # Custom hooks
├── 📂 services         # Llamadas a la API
├── 📂 types            # Archivos de estilos
├── 📂 utils            # Archivos de estilos
├── next.config.js      # Configuración de Next.js
└── README.md           # Documentación del proyecto
```

---

## 📡 WebSockets
Se utiliza WebSockets para recibir actualizaciones en tiempo real sobre los estados de los agentes y la lista de clientes en espera.



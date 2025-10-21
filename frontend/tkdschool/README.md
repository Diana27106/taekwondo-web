# Taekwondo Sierra Nevada Web

¡Bienvenido al repositorio del proyecto **Taekwondo Sierra Nevada Web**!

Este proyecto es una plataforma digital integral para el Club de Taekwondo Sierra Nevada, diseñada para centralizar la gestión, mejorar la comunicación y establecer una sólida presencia profesional en línea.

## 🌟 Características Principales

- **Diseño Responsive:** Interfaz moderna y adaptativa (desktop y móvil) utilizando **Tailwind CSS**.
- **Contenido Dinámico:** Gestión de un **Blog** y un **Calendario de Eventos** a través del Panel de Administración.
- **Asistencia por IA:** Chat de Inteligencia Artificial integrado para consultas rápidas.
- **Panel de Administración Segurizado:** Interfaz privada con autenticación **JWT** para el equipo docente.
- **Comunicación Directa:** Formulario de contacto y enlaces rápidos (ej. WhatsApp).
- **Pila Tecnológica Moderna:** Construido con **React** y **Express** para un rendimiento rápido (gracias a Vite).

## 💡 Resumen del Proyecto y Propósito

El objetivo principal es **digitalizar la gestión del club**, proporcionando una herramienta de comunicación centralizada para alumnos, padres y profesores, y atrayendo nuevos miembros y patrocinadores con una imagen profesional en internet.

### Público Objetivo

- **Comunidad Interna:** Alumnos, padres/tutores y personal del club.
- **Comunidad Externa:** Potenciales patrocinadores y visitantes interesados en unirse.

### Modelo de Despliegue

La aplicación se compone de un **Frontend Público** (acceso libre) y un **Panel de Administración** (acceso privado) gestionados por un **Backend/API** robusto.

## 🛠️ Pila Tecnológica (Tech Stack)

| Componente        | Tecnología              | Descripción                                                                |
| :---------------- | :---------------------- | :------------------------------------------------------------------------- |
| **Frontend**      | React (Vite)            | Framework principal para la UI con un servidor de desarrollo ultrarrápido. |
| **Estilizado**    | Tailwind CSS            | Framework CSS utilitario para un diseño rápido y responsive.               |
| **Backend**       | Node.js + Express       | Servidor API ligero para la lógica de negocio y la gestión de datos.       |
| **Base de Datos** | PostgreSQL              | Base de datos relacional robusta y de código abierto.                      |
| **Autenticación** | JWT + bcrypt            | JSON Web Tokens para sesiones y bcrypt para encriptación de contraseñas.   |
| **IA**            | API Gratuita/Modelo OS  | Módulo integrado para consultas contextuales.                              |
| **DevOps**        | Docker & Docker Compose | Contenedores para un entorno de desarrollo reproducible.                   |

## 🚀 Instalación y Ejecución Local

Para poner en marcha el proyecto localmente, se recomienda utilizar **Docker Compose** para configurar rápidamente el backend y la base de datos, aunque también se puede ejecutar cada componente de forma independiente.

### Requisitos

- Node.js (v18+)
- npm
- Docker & Docker Compose (Recomendado)

### 1. Configuración del Entorno (Docker)

En la raíz del proyecto, ejecuta:

```bash
# Levanta la base de datos PostgreSQL y el backend (si está configurado en docker-compose.yml)
docker-compose up -d
```

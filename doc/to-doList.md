# Guía Personal Paso a Paso - Formato Tabla

## Preparación

| Task                                                    | Phase | Complexity | Dependencies          | Status      |
| ------------------------------------------------------- | ----- | ---------- | --------------------- | ----------- |
| Crear repositorio Git (GitHub) y ramas `main` / `dev`   | MVP   | Low        | None                  | Completed   |
| Crear `README.md` con resumen del proyecto              | MVP   | Low        | Git repo              | Completed   |
| Configurar issues / proyecto en GitHub (milestones)     | MVP   | Low        | Git repo              | Completed   |
| Instalar herramientas: Node, Git, Python/PHP, Docker    | MVP   | Medium     | None                  | In Progress |
| Crear `docker-compose.yml` base (frontend, backend, db) | MVP   | Medium     | Docker, Project Setup | Not Started |
| Script validación de versiones                          | MVP   | Low        | None                  | Not started |
| Configuración de .env                                   | MVP   | Low        | Project Setup         | Not started |

## Diseño / prototipo

| Task                                                                                  | Phase | Complexity | Dependencies | Status    |
| ------------------------------------------------------------------------------------- | ----- | ---------- | ------------ | --------- |
| Diseñar prototipo en Figma (pantallas clave: home, clases, calendario, perfil, admin) | MVP   | Medium     | None         | Completed |
| Definir paleta y componentes UI (botones, modales, cards)                             | MVP   | Medium     | Prototipo    | Completed |
| Exportar assets (logos, fotos, iconos)                                                | MVP   | Low        | Prototipo    | Completed |

## Planificación técnica

| Task                                                                                                     | Phase | Complexity | Dependencies | Status      |
| -------------------------------------------------------------------------------------------------------- | ----- | ---------- | ------------ | ----------- |
| Especificar stack final (React+TS, Tailwind, Django o Symfony, PostgreSQL)                               | MVP   | Medium     | None         | In Progress |
| Definir endpoints API principales (auth, clases, eventos, sponsors, blog, contact, chat)                 | MVP   | Medium     | Stack        | Not Started |
| Modelar base de datos (tablas: users, locations, instructors, classes, events, sponsors, blog, comments) | MVP   | High       | Stack        | Not Started |
| Crear plan temporal con tareas pequeñas (sprints)                                                        | MVP   | Medium     | Stack        | Not Started |
| Diagrama de arquitectura                                                                                 | MVP   | Low        | None         | Not Started |

## Preparación del backend

| Task                                                                                | Phase | Complexity | Dependencies | Status      |
| ----------------------------------------------------------------------------------- | ----- | ---------- | ------------ | ----------- |
| Iniciar proyecto backend (Django/Express)                                           | MVP   | Medium     | Stack        | Not Started |
| Configurar conexión a PostgreSQL y migraciones                                      | MVP   | Medium     | Backend init | Not Started |
| Crear modelo de `users` con campo `role` (user/admin)                               | MVP   | Medium     | DB setup     | Not Started |
| Implementar autenticación (registro/login + tokens o sesiones)                      | MVP   | Medium     | Users model  | Not Started |
| Implementar CRUD para: blog, events, sponsors, classes, locations                   | MVP   | High       | Backend init | Not Started |
| Crear endpoints para comentarios (o integración Google Reviews)                     | MVP   | Medium     | CRUD         | Not Started |
| Añadir validaciones y manejo de errores                                             | MVP   | Medium     | CRUD         | Not Started |
| Implementar API para chat (ruta `/api/chat` que devuelva respuestas simples de FAQ) | MVP   | Medium     | Backend init | Not Started |
| Añadir documentación API (Swagger/OpenAPI)                                          | MVP   | Medium     | Endpoints    | Not Started |

## Preparación del frontend

| Task                                                                                     | Phase | Complexity | Dependencies      | Status      |
| ---------------------------------------------------------------------------------------- | ----- | ---------- | ----------------- | ----------- |
| Inicializar proyecto React + TypeScript (Vite)                                           | MVP   | Low        | Stack             | Not Started |
| Instalar Tailwind y configurar estilos globales                                          | MVP   | Medium     | Frontend init     | Not Started |
| Crear estructura de rutas (Home, About, Classes, Calendar, Blog, Contact, Admin)         | MVP   | Medium     | Frontend init     | Not Started |
| Implementar Header y Footer responsive                                                   | MVP   | Medium     | Routes            | Not Started |
| Maquetar Home con hero + carrusel de reseñas                                             | MVP   | Medium     | UI assets         | Not Started |
| Implementar componentes: CardInstructor, ClassCard, Modal reusable, Carousel, ChatWidget | MVP   | High       | Routes            | Not Started |
| Integrar llamadas a la API (fetch/axios or react-query)                                  | MVP   | Medium     | Backend endpoints | Not Started |

## Funcionalidades clave (usuario)

| Task                                                                  | Phase | Complexity | Dependencies     | Status      |
| --------------------------------------------------------------------- | ----- | ---------- | ---------------- | ----------- |
| Página de clases con listado y filtros por sede/nivel                 | MVP   | Medium     | API              | Not Started |
| Página de detalle de clase (info, instructor, horario)                | MVP   | Medium     | API              | Not Started |
| Calendario interactivo (FullCalendar o similar) con eventos desde API | MVP   | Medium     | API              | Not Started |
| Sección patrocinadores (carrusel con flechas)                         | MVP   | Low        | API              | Not Started |
| Blog (lista + páginas detalle)                                        | MVP   | Medium     | API              | Not Started |
| Formulario de contacto con validación y modal de confirmación         | MVP   | Medium     | Frontend         | Not Started |
| Chatbot FAQ (widget flotante que llama a `/api/chat`)                 | MVP   | Medium     | Backend Chat API | Not Started |

## Panel Admin

| Task                                                                             | Phase | Complexity | Dependencies      | Status      |
| -------------------------------------------------------------------------------- | ----- | ---------- | ----------------- | ----------- |
| Crear ruta `/admin` protegida (verifica `role=admin`)                            | MVP   | Medium     | Auth              | Not Started |
| Crear vistas CRUD admin para blog, events, sponsors, classes, locations, precios | MVP   | High       | Backend endpoints | Not Started |
| Añadir edición de horarios y precios desde admin                                 | MVP   | Medium     | Admin CRUD        | Not Started |
| Añadir gestión de usuarios (reset password, roles)                               | MVP   | Medium     | Users model       | Not Started |
| Añadir logs básicos de cambios (historial)                                       | MVP   | Medium     | Admin actions     | Not Started |

## Integraciones externas

| Task                                                                             | Phase    | Complexity | Dependencies | Status      |
| -------------------------------------------------------------------------------- | -------- | ---------- | ------------ | ----------- |
| Investigar y configurar Google Places API para reseñas (o plan B: import manual) | MVP      | Medium     | None         | Not Started |
| Integrar iframe/embeds de Instagram si se desea                                  | MVP      | Low        | Frontend     | Not Started |
| Preparar placeholder para futura IA (estructura para conectar OpenAI)            | Post-MVP | Medium     | Backend      | Not Started |

## Calidad y pruebas

| Task                                                                              | Phase | Complexity | Dependencies       | Status      |
| --------------------------------------------------------------------------------- | ----- | ---------- | ------------------ | ----------- |
| Añadir validaciones client y server (XSS, SQL, formatos)                          | MVP   | Medium     | Frontend + Backend | Not Started |
| Escribir tests básicos backend (auth + CRUD)                                      | MVP   | Medium     | Backend            | Not Started |
| Escribir tests unitarios frontend para componentes clave                          | MVP   | Medium     | Frontend           | Not Started |
| Realizar pruebas manuales: casos de login, CRUD admin, calendario, contacto, chat | MVP   | Medium     | Frontend + Backend | Not Started |
| Corregir errores y optimizar rendimiento (imágenes, lazy loading)                 | MVP   | Medium     | Testing            | Not Started |

## Documentación

| Task                                                                                   | Phase | Complexity | Dependencies       | Status      |
| -------------------------------------------------------------------------------------- | ----- | ---------- | ------------------ | ----------- |
| Redactar Manual de Instalación (pasos para `docker-compose up`)                        | MVP   | Medium     | Backend + Frontend | Not Started |
| Redactar Manual de Usuario (cómo registrarse, usar calendario, chat)                   | MVP   | Medium     | Frontend           | Not Started |
| Redactar Manual de Administración (cómo añadir blog, editar horarios, cambiar precios) | MVP   | Medium     | Admin panel        | Not Started |
| Generar esquema de base de datos y diagrama de arquitectura                            | MVP   | Medium     | DB design          | Not Started |
| Añadir comentarios en el código y un fichero `NOTAS.md` con decisiones técnicas        | MVP   | Medium     | Codebase           | Not Started |

## Despliegue

| Task                                                          | Phase | Complexity | Dependencies | Status      |
| ------------------------------------------------------------- | ----- | ---------- | ------------ | ----------- |
| Configurar CI básico (GitHub Actions: test → build)           | MVP   | Medium     | Codebase     | Not Started |
| Preparar variables de entorno seguras en hosting              | MVP   | Medium     | Deployment   | Not Started |
| Desplegar (Render / Railway / DigitalOcean) y comprobar HTTPS | MVP   | Medium     | Deployment   | Not Started |
| Crear cuenta admin inicial y probar en entorno de producción  | MVP   | Low        | Deployment   | Not Started |

## Entrega y defensa

| Task                                                                              | Phase | Complexity | Dependencies     | Status      |
| --------------------------------------------------------------------------------- | ----- | ---------- | ---------------- | ----------- |
| Preparar presentación PPT (objetivos, demo, arquitectura, pruebas, conclusiones)  | MVP   | Medium     | Complete project | Not Started |
| Recoger capturas y vídeos cortos de flujo principal (registro, calendario, admin) | MVP   | Medium     | Project          | Not Started |
| Ensayar defensa explicando alcance real, decisiones y posibles mejoras            | MVP   | Medium     | Presentation     | Not Started |

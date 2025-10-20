---
# 🥋 Taekwondo Web — Technology Stack

This document provides an overview of the main technologies used in the **Taekwondo Web** project, their purposes, and how they work together.
---

## Table of Contents

1. Core Technologies
2. Frontend
3. Backend
4. Routing
5. Database
6. Testing
7. DevOps & Development Tools
8. Package Management
9. Architecture Overview

---

## Core Technologies

### **Vite (v7.1.7)**

**Purpose:** Fast modern frontend build tool that provides an optimized development and production workflow.
**Benefits:**

- Lightning-fast hot module replacement (HMR)
- Minimal configuration with out-of-the-box React support
- Optimized production builds using Rollup
  **Usage in our project:** Powers the local development server, compiles React code, and bundles the app for deployment.

### **React (v19.1.1)**

**Purpose:** JavaScript library for building component-based user interfaces.
**Benefits:**

- Declarative and reusable UI components
- Efficient rendering via the virtual DOM
- Large ecosystem and active community support
  **Usage in our project:** Core of the UI—handles rendering of pages, navigation, and components like `Navbar` and main layout.

---

## Frontend

### **Tailwind CSS (v4.1.14)**

**Purpose:** Utility-first CSS framework for rapid UI development.
**Benefits:**

- Clean, responsive design without writing custom CSS
- Automatically purges unused styles for small bundle size
- Highly customizable theme configuration
  **Usage in our project:** Styles all pages and components, ensuring a consistent and modern design across the site.

### **@tailwindcss/postcss (v4.1.14)**

**Purpose:** Integrates Tailwind CSS with PostCSS for advanced CSS transformations.
**Benefits:**

- Enables Tailwind to work seamlessly in modern build pipelines
- Allows CSS optimizations and transformations
  **Usage in our project:** Ensures Tailwind utilities are properly compiled and optimized.

### **PostCSS (v8.5.6)**

**Purpose:** CSS post-processor for transforming modern CSS into browser-compatible code.
**Benefits:**

- Supports plugins like Autoprefixer
- Improves maintainability and browser compatibility
  **Usage in our project:** Handles Tailwind and other CSS transformations during build time.

### **React DOM (v19.1.1)**

**Purpose:** React package for rendering components into the DOM.
**Usage in our project:** Connects React’s virtual DOM to the browser’s real DOM in `main.jsx`.

---

## Backend

### **Node.js**

**Purpose:** JavaScript runtime for executing server-side scripts.
**Benefits:**

- Enables full JavaScript development across frontend and backend
- Non-blocking I/O model for scalability
  **Usage in our project:** Provides the runtime for Vite and can later support API routes or a backend server in the `/backend` folder.

---

## Routing

### **React Router DOM (v7.9.4)**

**Purpose:** Declarative routing library for React applications.
**Benefits:**

- Easy page-to-page navigation without reloading
- Dynamic route matching and nested routing
- Simple configuration through JSX
  **Usage in our project:** Manages navigation between pages (e.g., Home, Classes, Contact).

---

## Database

Currently, the **Taekwondo Web** project does not use a database.
The `/backend` folder is prepared for future backend development, including potential database integration such as **MySQL**, **MongoDB**, or **Firebase** for student records, event scheduling, or belt progression tracking.

---

## Testing

Testing tools are not yet implemented but recommended for future iterations:

- **Jest** → For unit and component testing
- **React Testing Library** → For user interaction testing
- **Playwright** → For end-to-end browser tests

---

## DevOps & Development Tools

### **ESLint (v9.36.0)**

**Purpose:** Static code analysis tool for detecting syntax and logic issues.
**Benefits:**

- Ensures consistent coding style
- Prevents common React errors
- Integrates with modern editors like VS Code
  **Usage in our project:** Configured via `eslint.config.js` with plugins for React and React Hooks.

### **@vitejs/plugin-react (v5.0.4)**

**Purpose:** Official Vite plugin for React.
**Benefits:**

- Adds support for JSX and fast refresh
- Optimizes React build performance
  **Usage in our project:** Enables React integration inside the Vite ecosystem.

### **babel-plugin-react-compiler (v19.1.0-rc.3)**

**Purpose:** Experimental Babel plugin for improved React performance and compilation.
**Usage in our project:** Enhances JSX compilation and runtime optimization.

### **Globals (v16.4.0)**

**Purpose:** Provides predefined global variables for ESLint.
**Usage in our project:** Ensures ESLint correctly recognizes browser and Node.js globals.

---

## Package Management

### **npm**

**Purpose:** Default Node.js package manager.
**Benefits:**

- Simplifies dependency installation and version management
- Supports both local and global packages
- Integrates seamlessly with Vite’s workflow
  **Usage in our project:** Manages all dependencies and scripts defined in `package.json`.

---

## Architecture Overview

The **Taekwondo Web** project follows a modular and scalable structure designed for clarity and growth:

```
TKDSCHOOL/
│
├── backend/               # Future backend logic (APIs, data handling)
│
├── src/
│   ├── assets/
│   │   ├── img/
│   │   │   ├── small/
│   │   │   ├── medium/
│   │   │   └── large/
│   │   └── react.svg
│   │
│   ├── components/        # Reusable React components (e.g., Navbar.jsx)
│   ├── pages/             # Page-level components (App.jsx, main.jsx, etc.)
│   ├── tailwindcss        # Tailwind CSS configuration and utilities
│
├── public/                # Public static assets
├── .vscode/               # Editor configuration
├── package.json           # Dependencies and scripts
├── vite.config.js         # Build and server configuration
└── README.md              # Project documentation
```

---

## Summary

The **Taekwondo Web** project is a modern, responsive web application built with:

- **React** for dynamic UI
- **Tailwind CSS** for efficient styling
- **Vite** for blazing-fast development and build performance
- **React Router** for smooth navigation

Its architecture is optimized for **speed, maintainability, and scalability**, making it ready for future integration of backend services, databases, and testing tools.

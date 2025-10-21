## Project Documentation: Taekwondo Sierra Nevada Web

### 1. Summary and Purpose

| Field              | Value                                                                                                                                                                                                                                                                                                                                  |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Project Name**   | **Taekwondo Sierra Nevada Web**                                                                                                                                                                                                                                                                                                        |
| **Main Objective** | To **digitize the management** of the Taekwondo Sierra Nevada club. The platform aims to centralize information (news, schedules, events), serve as a **communication tool** for the community (students, parents, and teachers), and establish a **solid professional presence** on the internet to attract new members and sponsors. |

**Target Audience:**

- **Internal Community:** Students, parents and guardians, teaching staff, and administrative team.
- **External Community:** Potential sponsors, partners, and visitors interested in joining the club or obtaining general information.

**Deployment Model:**

Web application distributed in two main components:

- **Public Frontend:** Free access to informational content.
- **Administration Panel:** Private and protected access for content management.

**Budget (Zero Cost):**

The project adheres to a strict **$0$ (zero Euro) budget policy**. Its development relies exclusively on the use of **open source tools, free services, and free APIs**, prioritizing local development environments and **containerization (Docker)** to maintain reproducibility and reduce operational costs.

---

### 2. User Roles and Permissions

The system defines two main user roles with differentiated access levels:

#### 👤 User (Public)

| Functionality  | Permission   | Description                                                                          |
| :------------- | :----------- | :----------------------------------------------------------------------------------- |
| Navigation     | Total Access | Access to main sections: Home, About Us, Classes, Sponsors, Blog, and Contact.       |
| AI Interaction | Read/Consult | Use of the integrated Artificial Intelligence (AI) chat for informational inquiries. |
| Contact        | Write        | Submission of messages via the contact form.                                         |
| Quick Links    | Usage        | Direct access to communication links such as the WhatsApp button.                    |

#### 🛠️ Administrator (Teaching Staff)

This role requires **authentication (login)** and has exclusive access to the control panel.

| Functionality           | Permission | Managed Routes/Data                                                     |
| :---------------------- | :--------- | :---------------------------------------------------------------------- |
| Team Management         | CRUD       | Adding, editing, or deleting instructor profiles.                       |
| Headquarters Management | CRUD       | Updating information (tables) and contact details for the headquarters. |
| Sponsor Management      | CRUD       | Adding, editing, and deleting sponsor cards.                            |
| Blog Management         | Edit       | Modification of existing news (main, secondary, extra) and articles.    |
| Event Management        | CRUD       | Adding or modifying events in the interactive calendar.                 |

---

### 3. Key Features

- **Responsive Design:** Modern and adaptive interface, optimized for mobile and desktop devices.
- **Dynamic Content:** Blog and calendar with content updateable in **real-time** by administrators.
- **AI Assistance:** Free integrated AI chat to provide quick information and assistance to visitors.
- **Secured Administration Panel:** Private interface protected via login (username and password).
- **Communication:** Contact form with backend submission management and direct integration via WhatsApp.
- **Optimization:** Use of **Vite and React** to ensure fast loading and basic SEO optimization.

---

### 4. Technology Stack (Tech Stack)

The project employs modern, open-source technologies to ensure efficient development and zero-cost deployment.

#### 🧩 Frontend

| Component               | Technology                 | Purpose                                                      |
| :---------------------- | :------------------------- | :----------------------------------------------------------- |
| Development Environment | **Vite**                   | Ultra-fast development server and bundler.                   |
| Structure               | **React** (Hooks, Context) | Primary framework for building the user interface.           |
| Styling                 | **Tailwind CSS**           | Utility-first CSS framework for rapid and responsive design. |
| Routing                 | **React Router DOM**       | Management of application navigation and routes.             |
| Preprocessing           | PostCSS                    | Style processing (required by Tailwind).                     |
| Execution               | **Node.js + npm**          | Execution environment and dependency manager.                |

#### ⚙️ Backend and Database

| Component      | Technology            | Purpose                                                                        |
| :------------- | :-------------------- | :----------------------------------------------------------------------------- |
| API Server     | **Node.js + Express** | Lightweight server to manage the REST API and contact/administration requests. |
| Database       | **PostgreSQL**        | Robust and free relational database (local or Dockerized installation).        |
| ORM (Optional) | Prisma ORM            | Efficient management of database models and queries.                           |
| Security       | **JWT + bcrypt**      | JSON Web Tokens for authentication and bcrypt for password encryption.         |

#### 🤖 Artificial Intelligence

- **Model:** Free API or open source model (e.g., Hugging Face or GPT-3.5 via a free API proxy).
- **Implementation:** Integrated module that makes limited API calls to provide contextual responses.

#### 🐋 DevOps and Deployment

- **Environment:** **Docker & Docker Compose** (reproducible development environment).
- **Version Control:** **GitHub**.
- **Hosting:** Free services (**Render, Vercel, Netlify, or GitHub Pages**) for final deployment.

---

### 5. Architecture Overview

The system uses a simple **client-server architecture** approach with a clear separation of responsibilities:

- **Client (Frontend):** Managed by **React**, communicates with the server only via HTTP/API requests.
- **Server (Backend):** Managed by **Express**, handles business logic, database interaction, and authentication.
- **Database (PostgreSQL):** Persistently stores all dynamic data (news, events, instructors, etc.).
- **Authentication:** The Admin Panel uses **JWT tokens** issued by the server after a successful login, securing administrative routes.
- **AI Module:** Communicates with the free API and acts as an auxiliary service, potentially proxied through the backend.

---

### 6. Security and Compliance

Security is a priority, especially for administration routes.

- **Authentication:** Implementation of **JWT** for session validation and access to protected resources.
- **Passwords:** Encryption of administrator passwords using the **bcrypt** algorithm to prevent credential exposure in the database.
- **Route Protection:** Access restriction to all API endpoints that modify site data, allowing it only to users with **valid JWT tokens**.
- **Basic Compliance:** Basic measures for **privacy regulations (GDPR)** compliance will be implemented, ensuring that no sensitive public user data is stored without explicit consent.

---

### 7. Performance and Scalability

The project's design is geared towards efficiency and potential future scalability.

- **Frontend Performance:** Loading optimization through the use of **Vite**, lazy loading of components, and image compression.
- **Backend Scalability:** The modular architecture (Node/Express) allows for evolution towards **microservices** if user load or AI complexity were to increase in the future.
- **Portability:** The use of **Docker** ensures environment isolation, facilitating deployment on any compatible hosting provider.

---

### 8. Maintenance and Evolution

Development focuses on a **Minimum Viable Product (MVP)** with growth capability.

#### MVP (First Version)

- Fully functional informational website.
- Administration panel with essential content management functionalities (Blog, Events, Team, Headquarters, Sponsors).
- Basic AI Chat functionality.

#### Phase 2 (Future Features)

- **Advanced AI:** Exploration of more powerful AI models to offer advanced contextual assistance, possibly trained with internal club documentation.
- **Analytics:** Integration of a statistics panel to monitor traffic and user behavior.
- **Enrollment Module:** Development of online forms for class or event enrollment.
- **Service Integration:** Incorporation of external APIs (Social Networks, Google Maps) to enhance site functionality.

---

### 9. Documentation and Development Tools

| Resource Type   | Tool/Format                                    | Usage                                                    |
| :-------------- | :--------------------------------------------- | :------------------------------------------------------- |
| Task Management | **GitHub Project Board**                       | Workflow tracking and task assignment.                   |
| Documentation   | **Markdown Files** (README.md, setup.md, etc.) | Technical project documentation and configuration guide. |
| Code Editor     | **VSCode**                                     | Main development environment.                            |
| Database        | **pgAdmin**                                    | Graphical tool for PostgreSQL administration.            |
| Containers      | **Docker Desktop**                             | Local development environment management.                |
| API Testing     | **Postman**                                    | Testing and verification of backend endpoints.           |
| Visual Design   | **Canva / Figma** (Free Plan)                  | Creation of prototypes and basic visual assets.          |

---

**Conclusion**

The **Taekwondo Sierra Nevada Web** project represents a comprehensive and zero-cost web solution, optimized for efficiency, scalability, and easy management by the club's administration. By leveraging the suite of **open source technologies** (React, Express, PostgreSQL) and free deployment tools, professionalism and functionality are guaranteed without requiring monetary investment.

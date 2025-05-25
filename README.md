# Hospital Management System

A full-stack hospital management system with a Node.js/Express backend and a React frontend.

## Project Structure

```
backend/
  - Node.js/Express API
  - MongoDB models and controllers
frontend/
  - React application (Vite)
```

## Backend

- Location: [`backend/`](backend/)
- Main entry: [`server.js`](backend/server.js)
- Configuration: [`config/`](backend/config/)
- Models: [`models/`](backend/models/)
- Controllers: [`controller/`](backend/controller/)
- Routes: [`routes/`](backend/routes/)

### Setup

1. Install dependencies:
    ```sh
    cd backend
    npm install
    ```
2. Create a `.env` file with your environment variables (e.g., MongoDB URI).
3. Start the server:
    ```sh
    npm start
    ```

## Frontend

- Location: [`frontend/`](frontend/)
- Main entry: [`src/main.jsx`](frontend/src/main.jsx)
- Components: [`src/components/`](frontend/src/components/)
- Pages: [`src/pages/`](frontend/src/pages/)

### Setup

1. Install dependencies:
    ```sh
    cd frontend
    npm install
    ```
2. Start the development server:
    ```sh
    npm run dev
    ```

## Features

- User, Doctor, Patient, and Appointment management
- RESTful API
- Responsive React frontend

## License

MIT

---

*Edit this README to add more details about usage, API endpoints, and contribution guidelines as your project evolves.*

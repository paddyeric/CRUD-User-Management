# User Management System

A full-stack CRUD (Create, Read, Update, Delete) web application for managing users. The application allows you to add, view, edit, and delete user records, each consisting of a name and title. Built with a React frontend for a responsive user interface, a Node.js/Express backend for API handling, and MongoDB for data storage.

## Features

- Create Users: Add new users with name and title.
- Read Users: View a list of all users or fetch a specific user by ID.
- Update Users: Edit existing user details (name and title).
- Delete Users: Remove users from the system.
- Responsive UI: Clean and simple React-based interface.

## Tech Stack

- Frontend: React (with components for user list and add user form)
- Backend: Node.js, Express.js
- Database: MongoDB (with Mongoose for ODM)
- Other: CORS for cross-origin requests, dotenv for environment variables

## API Endpoints

The backend provides the following RESTful API endpoints for user management:

- GET /api/users: Retrieve all users.
  - Response: Array of user objects.
- GET /api/users/:id: Retrieve a specific user by ID.
  - Response: User object or 404 if not found.
- POST /api/users: Create a new user.
  - Request Body: `{ "name": "string", "title": "string" }`
  - Response: Created user object (201 status).
- PUT /api/users/:id: Update an existing user by ID.
  - Request Body: `{ "name": "string", "title": "string" }`
  - Response: Updated user object or 404 if not found.
- DELETE /api/users/:id: Delete a user by ID.
  - Response: Success message or 404 if not found.

All endpoints return JSON responses. Error handling includes appropriate HTTP status codes and error messages.

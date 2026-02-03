# FullStack User Management System

A comprehensive full-stack web application for managing user information, built with modern web technologies.

## Overview

This User Management System provides a complete solution for creating, viewing, updating, and deleting user records. The application consists of a React-based frontend for user interaction and a Node.js/Express backend with MongoDB database for data persistence.

## Features

- User CRUD Operations: Create, Read, Update, and Delete user records
- Responsive UI: Clean and intuitive React interface for user management
- RESTful API: Well-structured API endpoints for backend operations
- Database Integration: MongoDB with Mongoose for data modeling and management
- Real-time Feedback: User-friendly messages for successful operations and error handling

## Technology Stack

### Frontend
- React.js: Component-based UI framework
- CSS: Custom styling for responsive design
- Axios: HTTP client for API communication

### Backend
- Node.js: JavaScript runtime for server-side development
- Express.js: Web application framework for API creation
- MongoDB: NoSQL database for data storage
- Mongoose: ODM for MongoDB data modeling

## User Model
Each user record contains:
- Name: User's full name (required)
- Title: User's job title or position (required)
- Timestamps: Automatic creation and update timestamps

## API Endpoints
- GET /api/users - Retrieve all users
- GET /api/users/:id - Retrieve a specific user by ID
- POST /api/users - Create a new user
- PUT /api/users/:id - Update an existing user
- DELETE /api/users/:id - Delete a user

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or cloud service like MongoDB Atlas)
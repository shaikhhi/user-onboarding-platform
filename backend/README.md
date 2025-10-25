# User Onboarding and Approval Platform - Backend

This document provides an overview of the backend service for the User Onboarding and Approval Platform.

## Overview

The backend service is responsible for handling user registration, authentication, and approval processes. It exposes a RESTful API that the frontend application interacts with.

## Technologies Used

- **Node.js**: The backend is built using Node.js.
- **Express**: A web framework for building the API.
- **TypeScript**: For type safety and better development experience.
- **Azure SQL Database**: For persisting user data.
- **Docker**: For containerization of the application.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd user-onboarding-platform/backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Copy the `.env.example` file to `.env` and fill in the required values.

4. **Run Migrations**
   Ensure your Azure SQL Database is set up and run the migration scripts to create the necessary tables.

5. **Start the Application**
   ```bash
   npm start
   ```

## API Endpoints

- **POST /api/register**: Register a new user.
- **POST /api/login**: Authenticate a user.
- **GET /api/users/pending**: Retrieve a list of pending users for approval.
- **POST /api/users/approve/:id**: Approve a user by ID.
- **POST /api/users/reject/:id**: Reject a user by ID.

## Docker

To build and run the backend service using Docker, use the following commands:

1. **Build the Docker Image**
   ```bash
   docker build -t user-onboarding-backend -f infra/Dockerfile.backend .
   ```

2. **Run the Docker Container**
   ```bash
   docker run -d -p 3000:3000 --env-file .env user-onboarding-backend
   ```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
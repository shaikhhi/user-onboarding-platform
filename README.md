# User Onboarding and Approval Platform

## Overview
The User Onboarding and Approval Platform is a secure application designed to facilitate user self-registration and approval by administrators. Users can register and will be placed in a PENDING state until their accounts are approved or rejected by an admin. The platform consists of a frontend built with ReactJS and a backend developed using a chosen technology stack (Node.js, .NET, Java, or Python). 

## Features
- User self-registration with email verification.
- Admin dashboard for managing user approvals.
- Personalized user dashboard to display registration status.
- Secure password hashing and input validation.
- Containerized application using Docker for easy deployment.
- Environment variables for configuration management.
- Support for horizontal scaling and queue decoupling.

## Technology Stack
- **Frontend**: ReactJS
- **Backend**: Node.js / .NET / Java / Python
- **Database**: Azure SQL Database

## Setup Instructions

### Prerequisites
- Docker and Docker Compose installed on your machine.
- Node.js and npm (for frontend development).
- .NET SDK or Java SDK (if applicable for backend development).

### Environment Variables
Copy the `.env.example` file to `.env` and fill in the required variables.

### Running the Application
1. Navigate to the project root directory.
2. Build and start the application using Docker Compose:
   ```
   docker-compose up --build
   ```
3. Access the frontend at `http://localhost:3000` and the backend API at `http://localhost:5000`.

### Database Migration
Run the SQL migration scripts to set up the database schema:
```
# For Azure SQL Database
sqlcmd -S <server> -d <database> -U <username> -P <password> -i sql/migrations/001_create_users_table.sql
```

## Usage
- **For Users**: Navigate to the registration page to create an account. After registration, check your email for verification and status updates.
- **For Admins**: Log in to the admin dashboard to view pending users and approve or reject their registrations.

## Documentation
- For detailed architecture, refer to `docs/architecture.md`.
- For deployment instructions, refer to `docs/deployment.md`.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.
# User Onboarding Platform - Frontend

This document provides an overview of the frontend application for the User Onboarding and Approval Platform.

## Getting Started

To get started with the frontend application, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd user-onboarding-platform/frontend
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the application**:
   To start the development server, use:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

## Folder Structure

- `public/`: Contains static files like `index.html`.
- `src/`: Contains the source code for the application.
  - `api/`: API client for making requests to the backend.
  - `components/`: Reusable components like forms.
  - `hooks/`: Custom hooks for managing state and side effects.
  - `pages/`: Different pages of the application, including admin and user dashboards.
  - `types/`: TypeScript types and interfaces.

## Environment Variables

Create a `.env` file in the root of the frontend directory and add the necessary environment variables. Refer to `.env.example` for guidance.

## Building for Production

To build the application for production, run:
```bash
npm run build
```
This will create an optimized build in the `build/` directory.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
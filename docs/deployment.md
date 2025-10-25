# Deployment Instructions for User Onboarding and Approval Platform

## Prerequisites
- Docker and Docker Compose installed on your machine.
- Access to an Azure SQL Database.
- Kubernetes cluster (optional, for production deployment).

## Local Development Setup
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd user-onboarding-platform
   ```

2. **Environment Variables**
   - Copy the `.env.example` to `.env` and fill in the required values.
   ```bash
   cp .env.example .env
   ```

3. **Build and Run with Docker Compose**
   - Use Docker Compose to build and run the application locally.
   ```bash
   docker-compose up --build
   ```

4. **Access the Application**
   - The frontend will be available at `http://localhost:3000`.
   - The backend API will be available at `http://localhost:5000`.

## Deployment to Azure
1. **Create Azure SQL Database**
   - Set up an Azure SQL Database instance and configure the connection string in your `.env` file.

2. **Build Docker Images**
   - Navigate to the `infra` directory and build the Docker images.
   ```bash
   docker build -f Dockerfile.backend -t user-onboarding-backend .
   docker build -f Dockerfile.frontend -t user-onboarding-frontend .
   ```

3. **Push Docker Images to Container Registry**
   - Tag and push the images to your Azure Container Registry.
   ```bash
   az acr login --name <your-registry-name>
   docker tag user-onboarding-backend <your-registry-name>.azurecr.io/user-onboarding-backend
   docker tag user-onboarding-frontend <your-registry-name>.azurecr.io/user-onboarding-frontend
   docker push <your-registry-name>.azurecr.io/user-onboarding-backend
   docker push <your-registry-name>.azurecr.io/user-onboarding-frontend
   ```

4. **Deploy to Kubernetes (Optional)**
   - If using Kubernetes, apply the deployment and service configurations.
   ```bash
   kubectl apply -f infra/k8s/deployment.yaml
   kubectl apply -f infra/k8s/service.yaml
   ```

5. **Access the Application**
   - Once deployed, access the application using the external IP of the Kubernetes service or the Azure App Service URL.

## Notes
- Ensure that all environment variables are correctly set for production.
- Monitor logs and performance metrics to ensure the application runs smoothly.
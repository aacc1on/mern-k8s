# MERN Stack on Kubernetes

A simple Todo List app using MongoDB, Express, React, and Node.js, deployed on Kubernetes with Minikube.

## What's Inside

- MongoDB database
- Express.js REST API
- React frontend
- Kubernetes deployment configs
- Docker containers

## Prerequisites

Install these first:

- Docker
- Minikube
- kubectl

## Quick Start

### 1. Clone and Setup

```bash
git clone <your-repo>
cd mern-k8s
```

### 2. Start Minikube

```bash
minikube start --cpus=4 --memory=4096
```

### 3. Build Docker Images

```bash
# Use Minikube's Docker
eval $(minikube docker-env)

# Build backend
cd backend
docker build -t mern-backend:latest .

# Build frontend
cd ../frontend
docker build -t mern-frontend:latest .
```

### 4. Deploy to Kubernetes

```bash
cd ..
kubectl apply -f k8s/mongodb-deployment.yaml
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml
```

### 5. Access the App

```bash
# Get the URL
minikube service frontend-service

# Or get IP manually
minikube ip
# Then visit http://<minikube-ip>:30080
```

## Check Status

```bash
# See all pods
kubectl get pods

# See all services
kubectl get services

# Watch pods in real-time
kubectl get pods -w
```

## View Logs

```bash
# Backend logs
kubectl logs -f deployment/backend

# Frontend logs
kubectl logs -f deployment/frontend

# MongoDB logs
kubectl logs -f deployment/mongodb
```

## Stop Everything

```bash
# Delete all deployments
kubectl delete -f k8s/

# Stop Minikube
minikube stop
```

## Useful Commands

```bash
# Open Kubernetes dashboard
minikube dashboard

# SSH into a pod
kubectl exec -it <pod-name> -- sh

# Restart a deployment
kubectl rollout restart deployment/backend

# Scale replicas
kubectl scale deployment/backend --replicas=3
```

## Troubleshooting

**Pods not starting?**
```bash
kubectl describe pod <pod-name>
```

**Build taking too long?**
```bash
# Clear Docker cache
docker system prune -a
```

**Can't connect to backend?**
```bash
# Check service is running
kubectl get svc
kubectl logs deployment/backend
```

## Project Structure

```
mern-k8s/
├── backend/          # Node.js API
├── frontend/         # React app
└── k8s/             # Kubernetes configs
```

## What You'll Learn

- Docker containerization
- Kubernetes pods and deployments
- Services and networking
- Persistent volumes
- Scaling applications
- Container orchestration

## License

MIT# mern-k8s

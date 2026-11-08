# Simple Three-Tier Application Architecture

A simple full-stack application demonstrating a three-tier architecture:

- Frontend (Presentation Tier): HTML + JavaScript served through a lightweight web server
- Backend (Application Tier): Node.js + Express API
- Database (Data Tier): MongoDB

This project is a beginner-friendly example of how a web application can be structured across separate layers using Docker containers.

## Architecture Overview

- Frontend communicates with the backend API
- Backend connects to MongoDB
- Docker Compose orchestrates the complete system
- Each layer runs in its own container for isolation and scalability

## Project Structure

```text
.
├── .env.example
├── .gitignore
├── docker-compose.yml
├── backend
│   ├── Dockerfile
│   └── server.js
├── frontend
│   ├── Dockerfile
│   └── index.html
└── README.md

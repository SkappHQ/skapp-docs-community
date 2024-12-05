---
title: Skapp Setup Guide
id: skapp-setup-guide
sidebar_label: Skapp Setup Guide
sidebar_position: 1
description: Learn how to set up Skapp, the open-source business management platform, in less than 5 minutes with this step-by-step guide for both backend and frontend projects.
image: ../../src/images/thumbnails/common/skapp-setup-guide-thumbnail.png
keywords:
  [
    Skapp Setup Guide,
    Skapp Installation,
    Skapp Backend Setup,
    Skapp Frontend Setup,
    Open-Source Business Management Platform,
    Quick Start Skapp,
    Skapp Prerequisites,
    Skapp Configuration,
    Skapp Development Environment,
  ]
---

Let's discover **Skapp in less than 5 minutes**.

## Backend Project Setup Guide

This section provides step-by-step instructions on how to set up the backend project, which is developed using Java Spring Boot framework.

## Prerequisites

Before starting, ensure you have the following installed:

- **Java Development Kit (JDK)** (Version 21 or higher)
- **IDE** (Any Java IDE for development, but **IntelliJ IDEA** is recommended)
- **MySQL** (Ensure MySQL is installed and running)
- **Git** (To clone the repository)

## 1. Clone the Repository

First, clone the GitHub repository to your local machine:

```bash
git clone https://github.com/SkappHQ/skapp-be
cd Skapp-BE
```

## 2. Database Setup

When you run the Spring Boot application, the required tables will be automatically created in your MySQL database. Ensure that your MySQL service is running and properly configured.

## 3. Configure Environment Variables

Next, you need to set up the environmental variables required for the Spring Boot application. To do this, follow these steps:

1. Open your IDE (eg:- IntelliJ IDEA)
2. Navigate to the 'Run' menu and select 'Edit Configurations'
3. In the 'Run/Debug Configurations' window, select your Spring Boot application.
4. Add the following environment variables in the 'Environment Variables' section

```bash
DB_URL=jdbc:mysql://localhost:3306/skapp-dev?createDatabaseIfNotExist=true
DB_USERNAME=your-db-user-name
DB_PASSWORD=your-db-password
SPRING_PROFILES_ACTIVE=non-prd
RESET_DATABASE_API_KEY=random-string
```

The SPRING_PROFILES_ACTIVE environment variable is used to specify which profile should be active (eg:- dev, test, prod, qa). For development purpose make sure to set it as non-prod (our non-prod environments are dev, qa, and e2e).

## 4. Run the Application

To run the Spring Boot application:

- Open the project in your IDE (eg:- IntelliJ IDEA)
- Ensure that all Maven Dependencies are downloaded and the project is built automatically by IntelliJ IDEA
- Navigate to the 'Run' menu and select your Spring Boot application to run it

## 5. API Documentation

The API documentation is available at Swagger, which has a comprehensive list of all the available endpoints.

- Visit **Swagger** at http://localhost:8008/swagger-ui/index.html to access the API documentation.

## 6. Troubleshooting

Common issues you might encounter during setup:

- **Database Connection Issues** - Ensure MySQL is running and the connection details are correct
- **Environment Variable Issues** - Ensure that all necessary environment variables are set correctly in the IDE
- **Dependency Issues** - Ensure that the proper Maven dependencies are downloaded

## Frontend Project Setup Guide

This document provides step-by-step instructions on how to set up the frontend project, which is built using Next.js and TypeScript.

## Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (version 18.x or higher)
- **npm** (version 7.x or higher)
- **Git** (for cloning the repository)

## 1. Clone the Repository

Start by cloning the project repository to your local machine:

```bash
git clone https://github.com/SkappHQ/skapp-fe
cd Skapp-FE
```

## 2. Install Dependencies

Once inside the project directory, install the required dependencies:

```bash
npm install
```

This command will install all the necessary packages specified in the package.json file.

## 3. Add the Environment Variables

Ensure you add the .env file in the root directory of the project. This file should contain the necessary environment variables.

Note: Make sure the .env file is securely stored and not shared publicly.

```bash
NEXT_PUBLIC_API_URL="https://api.example.com/v1"

NEXTAUTH_SECRET="random_string"

NEXTAUTH_URL="deployed-app-url" # add only for production env
```

- **NEXT_PUBLIC_API_URL** - the link to your hosted backend platform
- **NEXTAUTH_SECRET** - A random string used to hash tokens, sign cookies and generate cryptographic keys. You can generate a secure secret using `openssl rand -base64 32`
- **NEXTAUTH_URL** - The URL of your deployed Next.js application, used by NextAuth for redirects in production. This defaults to localhost:3000.

## 4. Start the Development Server

After setting up the environment variables and installing the packages, start the development server:

```bash
npm run dev
```

This command will start the Next.js development server, and you should be able to view the application in your browser at http://localhost:3000.

## 5. Troubleshooting

If you encounter any issues during setup, please refer to the following:

- Ensure all dependencies are correctly installed.
- Verify that the .env file contains the correct credentials.
- Check for any error messages in the terminal and resolve them as needed.

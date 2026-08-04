# COMS3011A Lab 1 – Todo Application

## Student number: 2800066

Name: Tyra Mohamed

Course: COMS3011A(software design project)

---

## Overview

This project was developed for **COMS3011A Software Design**.

It is a **local-first Todo application** built with **Next.js**, **TypeScript**, **Prisma**, and **SQLite**.

The application is designed for a single user running it locally on their own computer. No user accounts or internet connection are required after installation.

---

## Features

The application allows a user to:

- Create a task
- Edit an existing task
- Archive a task (tasks are never deleted)
- View archived tasks
- Sort tasks by:
  - Due Date
  - Topic
  - Status
- Highlight overdue tasks
- Store all data permanently using SQLite so that tasks remain after restarting the application

---

## Technologies Used

- Next.js
- React
- TypeScript
- Prisma ORM
- SQLite
- Tailwind CSS
- Lucide React
- Vitest

Further information about each dependency can be found in:

```
docs/ThirdPartyCode.pdf
```

---

# Prerequisites

Before running this project, install:

- Node.js (Version:v24.14.1 )
- npm (included with Node.js)

---

# Clone the Repository

Clone the GitHub repository.(use command prompt terminal)

```bash
git clone https://github.com/tyracodes/coms3011a-lab1.git
```

Move into the project folder.

```bash
cd coms3011a-lab1
```

---

# Install Dependencies

Install all required packages.

```bash
npm install
```

---

# Generate the Prisma Client

```bash
npx prisma generate
```

---

# Create the SQLite Database

Create the local SQLite database.

```bash
npx prisma db push
```

---

# Run the Application

Start the development server.

```bash
npm run dev
```

Open the application in your browser.

```
http://localhost:3000
```

---

# Run the Automated Tests

Run all automated tests.

```bash
npm test
```

There are four automated tests included in the project.

---

# Project Structure

```
coms3011a-lab1
│
├── ai
│   └── AI conversation transcripts
│
├── app
│   └── Next.js pages and server actions
│
├── components
│   └── Reusable React components
│
├── docs
│   ├── DatabaseDesign.pdf
│   ├── RunningIt.pdf
│   └── ThirdPartyCode.pdf
│
├── lib
│   └── Database and application logic
│
├── prisma
│   ├── schema.prisma
│   ├── dev.db
│   └── test.db
│
├── tests
│   └── Automated tests
│
└── README.md
```

---

# Documentation

Additional documentation is available in the **docs** folder.

- Database Design
- Third-Party Code
- Running the Application

---

# AI Usage

This folder contains the AI conversation transcripts used during the development of this project.

## Tool

- ChatGPT Web

## Model

- GPT-5.5

## Usage

The AI assistant was used for:

- Project planning
- Designing the application structure
- Generating code
- Explaining concepts
- Debugging errors
- Writing documentation
- Reviewing implementation decisions

All generated code and documentation were reviewed, tested and modified before inclusion in the final submission.
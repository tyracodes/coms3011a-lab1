# COMS3011A Lab 1 – Todo Application

## Student number: 2800066

Name: Tyra Mohamed

Course: COMS3011A

---

## Project Description

This project is a local-first Todo application built using:

- Next.js
- TypeScript
- Prisma
- SQLite

The application allows a single user to:

- Create tasks
- Edit tasks
- Archive tasks
- Sort tasks
- View overdue tasks
- Save data between application restarts

---

## Requirements

Before running the project, install:

- Node.js 20 or later
- npm

---

## Installation

Clone the repository.

```bash
git clone https://github.com/tyracodes/coms3011a-lab1.git
```

Go into the project folder.

```bash
cd coms3011a-lab1
```

Install the dependencies.

```bash
npm install
```

Generate the Prisma client.

```bash
npx prisma generate
```

Create the SQLite database.

```bash
npx prisma db push
```

---

## Run the Application

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Run the Tests

```bash
npm test
```

There are four automated tests.

---

## Features

- Create tasks
- Edit tasks
- Archive tasks
- View archived tasks
- Sort by:
  - Topic
  - Status
  - Due Date
- Overdue tasks are highlighted
- Data persists after restarting the application

---

## Technologies Used

- Next.js
- React
- TypeScript
- Prisma ORM
- SQLite
- Tailwind CSS
- Vitest

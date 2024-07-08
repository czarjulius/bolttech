# Todo App

A multi-user task manager web application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Server

### Installing

- Install Node js
- Clone the repository [todo repo](https://github.com/czarjulius/bolttech.git)
- Navigate to the location of the folder and `cd` into `server` directory
- See `.env.example` copy the fields, create `.env.local` on the root directory and add your environment variables
- Run `npm install` to install dependencies
- Run `npm run migration` to run the migration files and create the neccessary tables on your database
- Run `npm run start:dev` to get the app started on your local machine
- Visit for example `http://localhost:4000/auth/register` to interact with the endpoints

---

## API Endpoints

| Method | Description                             | Endpoints              |
| ------ | --------------------------------------- | ---------------------- |
| POST   | Register a new user                     | /auth/register         |
| POST   | Login already existing user             | /auth/login            |
| POST   | Add new project                         | /projects              |
| POST   | Add new task                            | /tasks                 |
| GET    | View all projects in a paginated format | /projects              |
| GET    | View all tasks in a paginated format    | /tasks                 |
| PATCH  | Update a specific project by id         | /projects/:<projectId> |
| PATCH  | Update a specific task by id            | /tasks/:<taskId>       |
| DELETE | remove a specific project using id      | /projects/:<projectId> |
| DELETE | remove a specific project using id      | /projects/:<projectId> |
| DELETE | remove a specific task using id         | /tasks/:<taskId>       |

---

## Authors

- Julius Ngwu

## License

MIT License
Copyright (c) 2024 Julius Ngwu

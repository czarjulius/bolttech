# Todo App

A multi-user task manager web application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Server

### Installing

- Install Node js
- Clone the repository `https://github.com/czarjulius/perizer.git`
- Navigate to the location of the folder and `cd` into `server` directory
- See `.env.example` copy the fields, create `.env` on the root directory and add your environment variables
- Run `yarn install` to install dependencies
- Run `yarn start:dev` to get the app started on your local machine
- Navigate to `http://localhost:5002/perizer/users` to see the users

---

**NOTE**

The app was configured to seed the provided data on server start

---

## Running the automated tests

- Run `yarn test` to install dependencies

## Running the docker

- Navigate to the location of the folder and `cd` into `server` directory
- Run `docker-compose up` to start up the server

## Client

### Installing

- Clone the repository `https://github.com/czarjulius/perizer.git`
- Navigate to the location of the folder and `cd` into `client` directory
- See `.env.example` copy the fields, create `.env` on the root directory and add your environment variables
- Run `npm install` to install dependencies
- Run `npm run dev` to get the app started on your local machine
- Navigate to `http://localhost:3000/` to see and search users

## Authors

- Julius Ngwu

## License

MIT License
Copyright (c) 2023 Julius Ngwu

# NodeJS Boilerplate Rest

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Node.js CI](https://img.shields.io/badge/node-%3E%3D22.x-brightgreen.svg)]()


A simple Node.js boilerplate with Express, Sequelize, and basic user API setup.

## Features

- ES Modules (`"type": "module"`) support with `import`/`export`
- Express.js server setup with routing
- Sequelize ORM for database integration (MySQL/PostgreSQL support)
- Environment-based configuration management
- Structured logging with Winston
- User routes and controller examples
- Integration with Jest for testing

- Logging is handled by Winston with configurable options.

- Modify config files as needed for your environment and database.

- Tests are configured to run asynchronously with Jest.

## Requirements

- Node.js >= 22
- MySQL or compatible database
- npm or yarn

## Setup

1. Clone the repo

```
git clone https://github.com/harishinjamuri/nodejs-boilerplate-rest.git
cd nodejs-boilerplate-rest
```

2. Install dependencies

```
npm install
# or
yarn install
```

3. Configure your environment variables

Create a .json file or modify the config files to set your database credentials and other settings inside `src/config/`.

4. Run migrations or create your database tables

5. Start the server

```
npm start
```

Server will be running at http://localhost:3000

## Running Tests
Run tests with:
```
npm test
```

Ensure you start the tests with:

```
node --experimental-vm-modules node_modules/.bin/jest
```
to support ESM imports in Jest.

## Project Structure
- `src/` - source code

- `src/routes/` - route handlers

- `src/controllers/` - controllers

- `src/models/` - Sequelize models

- `src/services/` - service layer

- `tests/` - test cases

## Usage Example
### Register a user
```
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"username":"John Doe","email":"john.doe@example.com","password":"password123"}'
```

## Contributing
Feel free to fork and send pull requests for improvements or bug fixes!


## License
This project is licensed under the Apache License 2.0 - see the [LICENSE](https://github.com/harishinjamuri/nodejs-boilerplate-rest/blob/main/LICENSE) file for details.

> ⚡ Looking to start a new Node.js backend project? Use this boilerplate as a template by clicking [**Use this template**](https://github.com/harishinjamuri/nodejs-boilerplate-rest/generate).

Here's a `README.md` file for your health monitoring package:

```markdown
# Health Monitor Package

## Overview

The Health Monitor Package is a Node.js library built using Fastify to monitor the health of a VM. It provides versioned API endpoints to check the status of various services such as API, MySQL, Redis, Kafka, and Akamai.

## Features

- Health checks for API, MySQL, Redis, Kafka, and Akamai.
- Versioned API routes.
- Configurable through `.env` file.
- Modular design for easy addition of new health checks.
- Unit testing using `tap`.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd health-monitor
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on the provided `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your configuration:
   ```env
   API_ENABLED=true
   MYSQL_ENABLED=true
   REDIS_ENABLED=true
   KAFKA_ENABLED=true
   AKAMAI_ENABLED=true

   MYSQL_HOST=localhost
   MYSQL_USER=root
   MYSQL_PASSWORD=password
   MYSQL_DATABASE=test

   REDIS_HOST=localhost
   REDIS_PORT=6379

   KAFKA_BROKER=localhost:9092

   AKAMAI_URL=https://example.akamai.com
   ```

## Usage

1. Start the Fastify server:
   ```bash
   node src/index.js
   ```

2. Access the health check endpoints:
   - Version 1: `http://localhost:3000/v1/health`
   - Version 2: `http://localhost:3000/v2/health`

## Configuration

The package uses environment variables for configuration. Update the `.env` file to enable/disable health checks and provide necessary connection details.

## Project Structure

```
health-monitor/
├── src/
│   ├── checks/
│   │   ├── apiCheck.js
│   │   ├── mysqlCheck.js
│   │   ├── redisCheck.js
│   │   ├── kafkaCheck.js
│   │   ├── akamaiCheck.js
│   ├── routes/
│   │   ├── v1/
│   │   │   └── health.js
│   │   ├── v2/
│   │   │   └── health.js
│   ├── utils/
│   │   └── config.js
│   ├── plugins/
│   │   └── healthPlugin.js
│   ├── index.js
├── test/
│   ├── health.test.js
├── .env
├── .env.example
├── package.json
└── README.md
```

## Adding Custom Health Checks

1. Create a new health check file in `src/checks/`.
2. Implement the health check logic.
3. Import and register the new check in `src/plugins/healthPlugin.js`.

## Running Tests

To run the unit tests:
```bash
npm test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License

This project is licensed under the MIT License.
```

Make sure to replace `<repository_url>` with the actual URL of your repository. This README provides an overview of the package, installation instructions, usage details, project structure, configuration, and contribution guidelines.

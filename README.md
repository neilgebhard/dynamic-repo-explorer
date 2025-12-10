# Dynamic Repo Explorer

A full-stack application for exploring GitHub repositories dynamically.

## Installation

### Client

Navigate to the client directory and install dependencies:

```bash
cd client
npm install
```

### Service

Navigate to the service directory and install dependencies:

```bash
cd service
npm install
```

Set up environment variables by copying the example file:

```bash
cp .env.example .env
```

Edit the `.env` file and add your GitHub token:

```
PORT=3001
GITHUB_TOKEN=
```

## Running Locally

### Start the Service

From the service directory:

```bash
cd service
npm run dev
```

The service will run on `http://localhost:3001`.

### Start the Client

From the client directory:

```bash
cd client
npm run dev
```

The client will run on `http://localhost:3000`.

### Run Tests for Client

- `npm run test` - Run tests

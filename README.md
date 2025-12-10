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

- `npm run test`

## Development Notes

**AI Usage**:

I built this project using Claude AI as a development tool. I used AI to help plan out tasks, implement features when I hit roadblocks, debug errors, and handle styling. I stayed hands-on the whole time, writing code myself, tweaking and modifying AI-generated code to fit what I needed, making architectural decisions, and making sure everything met my standards and followed the project requirements. Most importantly, I reviewed and understood all the AI-generated code before adding it to the project. This is actually how I work. AI is a solid tool for moving faster, but I make sure I fully own and understand what goes into my code.

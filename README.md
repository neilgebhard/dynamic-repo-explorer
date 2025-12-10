# Dynamic Repo Explorer

A full-stack application for exploring GitHub repositories dynamically.

## Getting Started

1. Install client dependencies:

   ```bash
   cd client && npm install
   ```

2. Install service dependencies:

   ```bash
   cd ../service && npm install
   ```

3. Set up environment variables in `/service` by copying `.env.example`:

   ```bash
   cp .env.example .env
   ```

4. Edit `/service/.env` and add your GitHub token (or add mine):

   ```
   PORT=3001
   GITHUB_TOKEN=
   ```

5. Start the service:

   ```bash
   npm run dev
   ```

6. In a new terminal, start the client in `/client`:
   ```bash
   npm run dev
   ```

The client will run on `http://localhost:3000` and the service on `http://localhost:3001`.

To run tests, use `npm run test` in `/client`.

## Development Notes

**AI Usage**:

I built this project using Claude AI as a development tool. I used AI to help plan out tasks, implement features when I hit roadblocks, debug errors, and handle styling. I stayed hands-on the whole time, writing code myself, tweaking and modifying AI-generated code to fit what I needed, making architectural decisions, and making sure everything met my standards and followed the project requirements. Most importantly, I reviewed and understood all the AI-generated code before adding it to the project. This is actually how I work. AI is a solid tool for moving faster, but I make sure I fully own and understand what goes into my code.

# First Server

A small REST API built with **Node.js** and **Express**, created as part of my journey learning the MERN stack.

It serves a list of trading card game stores and lets you fetch a single store by its id. Data is currently stored in a local array; the next step is connecting it to MongoDB.

## Tech stack

- Node.js
- Express 5
- ES Modules (`import` / `export`)

## Getting started

### Prerequisites

- Node.js 18 or later

### Installation

```bash
git clone https://github.com/simonesbds/first-server.git
cd first-server
npm install
```

### Running the server

```bash
npm run dev    # development mode, restarts on file changes
npm start      # standard mode
```

The server runs at `http://localhost:3000`.

## API endpoints

| Method | Endpoint          | Description                     | Response                |
| ------ | ----------------- | ------------------------------- | ----------------------- |
| GET    | `/`               | Welcome message                 | Text                    |
| GET    | `/api/stores`     | Returns all stores              | JSON array              |
| GET    | `/api/stores/:id` | Returns a single store by id    | JSON object, or 404     |

### Example response

`GET /api/stores/1`

```json
{
  "id": 1,
  "name": "Tecno Card",
  "city": "Francavilla al Mare"
}
```

`GET /api/stores/99`

```json
{
  "message": "Store non trovato"
}
```

## Project structure

```
first-server/
├── controllers/
│   └── storeController.js   # request handling logic
├── data/
│   └── stores.js            # temporary mock data
├── routes/
│   └── storeRoutes.js       # store endpoints (Express Router)
├── server.js                # app setup and entry point
└── package.json
```

## What I learned

- Setting up a Node.js project with npm and ES Modules
- Creating routes with Express and returning JSON responses
- Reading URL parameters and handling "not found" cases with proper status codes
- Organizing code into routes, controllers and data
- Using Git and GitHub with meaningful commit messages

## Next steps

- [ ] Connect to MongoDB with Mongoose
- [ ] Add POST, PUT and DELETE endpoints
- [ ] Move configuration to environment variables

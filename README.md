# URL Shortener

A minimal full-stack URL shortener built with **Node.js**, **Express**, **MongoDB (Mongoose)**, and **EJS**. Paste a long URL, get a short one back, and track how many times each short link has been clicked — all from a single-page Bootstrap UI.

## Features

- 🔗 Shorten any URL into a compact 7-character code (via `nanoid`)
- 📊 Click tracking — every redirect increments a counter stored in MongoDB
- 📋 Live table of all shortened URLs, their original destination, and click counts
- 🎨 Clean, responsive UI styled with Bootstrap 5
- ⚡ Lightweight — no build step, no frontend framework, just server-rendered EJS

## Screenshots

| Home page | Shortened URLs & click tracking |
|---|---|
| ![URL shortener form](./screenshots/Screenshot%202026-07-30%20025330.png) | ![Table of shortened URLs with click counts](./screenshots/Screenshot%202026-07-30%20025858.png) |

## Tech Stack

| Layer     | Technology                  |
|-----------|------------------------------|
| Runtime   | Node.js (ES Modules)         |
| Server    | Express 5                    |
| Database  | MongoDB via Mongoose         |
| Views     | EJS                          |
| ID Gen    | nanoid                       |
| Dev tools | nodemon                      |

## Project Structure

```
url-shortener/
├── models/
│   └── url_shortner_model.js   # Mongoose schema (originalUrl, shortUrl, clicks)
├── utils/
│   └── database.js             # MongoDB connection logic
├── views/
│   └── index.ejs                # Home page (form + URL table)
├── screenshots/                 # App screenshots
├── server.js                    # Express app & routes
├── package.json
└── .env                         # PORT config
```

## How It Works

1. **`GET /`** — Renders the home page with a form and a table of all previously shortened URLs.
2. **`POST /shortUrl`** — Accepts `originalUrl` from the form, generates a random 7-character code with `nanoid`, and saves the pair to MongoDB.
3. **`GET /:shortUrl`** — Looks up the short code, increments its click counter, and redirects the visitor to the original URL. Returns `404` if the code doesn't exist.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended, ES Modules support required)
- A running [MongoDB](https://www.mongodb.com/) instance (local or Atlas)

### Installation

```bash
# Clone the repo
git clone https://github.com/mohamadnafe14-arch/url-shortener.git
cd url-shortener

# Install dependencies
npm install
```

### Configuration

Create a `.env` file in the project root:

```env
PORT=8000
```

> **Note:** The MongoDB connection string is currently hardcoded in `utils/database.js` (`mongodb://127.0.0.1:27017/urlshortener`). If you want to use a remote database (e.g. MongoDB Atlas), update that connection string or refactor it to read from an environment variable such as `MONGO_URI`.

### Running the app

```bash
# Development (auto-restarts on file changes)
npm run dev
```

The app will start on `http://localhost:8000` (or whatever `PORT` you set).

## Usage

1. Open the app in your browser.
2. Paste a long URL into the input field and click **Shorten URL**.
3. Your shortened link appears in the table below — click it to be redirected, and watch the click counter increase.

## Roadmap / Ideas for Contribution

- [ ] Move the MongoDB connection string into an environment variable
- [ ] Add input validation for malformed/invalid URLs
- [ ] Add a "copy to clipboard" button for shortened links
- [ ] Support custom aliases for short URLs
- [ ] Add link expiration
- [ ] Add automated tests
- [ ] Add a proper `test` script (currently a placeholder)

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

ISC — see `package.json` for details.

# Users Dashboard (Test)

This is a small Next.js application that demonstrates:
- Client-side fetching from `https://jsonplaceholder.typicode.com/users`
- Loading & error states with retry
- Client-side search (name or email, case-insensitive, live)
- Client-side pagination (5 users per page)
- Route-based i18n (`/en` and `/fr`)
- Simple responsive layout

This project is designed to run on **Node 20**.

---

## Prerequisites

- Node.js 20.x installed. Recommended: use `nvm` to install and switch Node versions.
  ```bash
  # install & use node 20 (macOS/Linux)
  nvm install 20
  nvm use 20
  node -v  # verifies node 20.x

## Getting Started

- Clone the repository and install dependencies
    git clone <repo-url>
    cd users-dashboard

npm install

Then, run the development server:

```bash
npm run dev
```

English version → http://localhost:3000/en

French version → http://localhost:3000/fr
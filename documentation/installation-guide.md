# Installation guide

## Table of contents

- [Setting up the backend](#setting-up-the-backend)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Running locally](#running-locally)
  - [Building the project](#building-the-project)
- [Setting up the frontend](#setting-up-the-frontend)

## Setting up the backend

### Requirements

- [Node.js](https://nodejs.org) (v16.x)
- [NPM](https://npmjs.com) (v6 and up)
- [MySQL](https://www.mysql.com) database (hosted, local or [Docker](https://www.docker.com/))

### Installation

1. Clone this repo using `git clone`
2. Navigate to repo folder: `cd sl-website-be`
3. Copy environment file: `cp .env.example .env`
4. Fill in `.env`
5. Run `npm install` to install dependencies

### Running locally

1. [Clone and install](#installation) this repo
2. Start the development server using `npm run develop`
3. Visit the CMS frontend on [port 1337](http://localhost:1337)

### Building the project

```bash
npm run build
```

## Setting up the frontend

You can now set up the frontend using the [frontend installation manual](#setting-up-the-frontend).

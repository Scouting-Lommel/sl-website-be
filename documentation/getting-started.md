# Getting started

## Table of contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Running locally](#running-locally)
- [Building the project](#building-the-project)
  - [Local build](#local-build)
  - [Production build](#production-build)
- [Development](#development)
  - [Trunk-based development](#trunk-based-development)
- [Endpoints](#endpoints)

## Requirements

- [Node.js](https://nodejs.org) (v16.x)
- [NPM](https://npmjs.com) (v6 and up)
- [MySQL](https://www.mysql.com) database (hosted, local or [Docker](https://www.docker.com/))

## Installation

1. Clone this repo using onto your machine and navigate to the local repo

   ```bash
   git clone https://github.com/Scouting-Lommel/sl-website-be.git
   cd sl-website-be
   ```

2. Copy the example environment file

   ```bash
   cp .env.example .env
   ```

3. Fill in `.env`. For environment values, contact repo owner.
4. Install dependencies

   ```bash
   npm install
   ```

## Running locally

1. [Clone and install](#installation) this repo
2. Start the development server using

   ```bash
   npm run develop
   ```

3. You can now visit the CMS admin panel on [port 1337](http://localhost:1337)

## Building the project

### Local build

1. [Clone and install](#installation) this repo
2. Produce a production build using `npm`

   ```bash
   npm run build
   ```

### Production build

It is not necessary to build for production manually. A CI/CD pipeline has been set up for automatic deployment when pushing changes and/or features to the `main` branch.

For more info, check out the [deployment docs](/documentation/deployment.md).

## Development

### Trunk based development

Instead of the traditional git-flow, this project is based on the [trunk based development](https://trunkbaseddevelopment.com/) principle.

> Trunk based development: a source-control branching model, where developers collaborate on code in a single branch called ‘trunk’, resist any pressure to create other long-lived development branches by employing documented techniques. They therefore avoid merge hell, do not break the build, and live happily ever after.

## Endpoints

| Name                   | Description                                    | Endpoint                                                       |
| :--------------------- | :--------------------------------------------- | :------------------------------------------------------------- |
| Frontend (production)  | Production environment for the public website  | [phantomdev.be](https://www.phantomdev.be) (to be changed)     |
| Frontend (development) | Development environment for the public website | [dev.phantomdev.be](https://dev.phantomdev.be) (to be changed) |
| CMS                    | CMS admin panel                                | [cms.phantomdev.be](https://cms.phantomdev.be) (to be changed) |
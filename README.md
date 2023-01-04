# Scouting Lommel Backend

## Table of contents

- [Tech stack](#tech-stack)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running locally](#running-locally)
- [Building the project](#building-the-project)

## Tech stack

- [Strapi](https://strapi.io) instance (= headless CMS)
- [MySQL](https://www.mysql.com) database

## Requirements

- [Node.js](https://nodejs.org) (v16.x)
- [NPM](https://npmjs.com) (and up v6)
- [MySQL](https://www.mysql.com) database (hosted, local or [Docker](https://www.docker.com/))

## Installation

- Run `git clone` to clone the repo
- Navigate to repo folder: `cd sl-website-be`
- Copy environment file: `cp .env.example .env`
- Fill in `.env`
- Run `npm install` to install dependencies

## Running locally

- [Clone and install](#installation)
- Run `npm run develop` to start the development server
- Visit [the CMS frontend](http://localhost:1337)

## Building the project

- `npm run build`

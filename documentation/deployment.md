# Deployment

TODO: write deployment manual

## Table of contents

- [Resource providers](#resource-providers)
  - [DNS](#dns)
  - [Frontend hosting](#frontend-hosting)
  - [Backend hosting](#backend-hosting)
  - [Error tracking](#error-tracking)
  - [E-mail setup](#e-mail-setup)
- [Environments](#environments)

## Resource providers

| Resource       | Provider                                                  | Comments                                                                         |
| :------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------- |
| DNS            | [Cloudflare](https://cloudflare.com/) DNS management      | DNS management DDoS protection.                                                  |
| Frontend app   | Hosting on [Vercel](https://www.vercel.app)               | Dynamic hosting with CI/CD capabilities for FE app.                              |
| Backend CMS    | Hosting on [Heroku](https://www.heroku.com)               | Dynamic hosting with CI/CD capabilities for BE CMS.                              |
| Database       | MySQL database hosted on [Vimexx](https://www.vimexx.be/) | Both the development and production environments have a separate MySQL database. |
| Error tracking | [Sentry](https://www.sentry.com)                          | Error tracking in a Sentry dashboard.                                            |
| E-mail setup   | To be determined                                          | Check out the [e-mail setup docs](/documentation/e-mail-setup.md).               |

### DNS

DNS records are managed by [Cloudflare](https://www.cloudflare.com/). Cloudflare also offers a layer of securities like DDoS protection.

### Frontend hosting

The website's frontend is a NextJS application and is hosted on [Vercel](https://www.vercel.com). A CI/CD pipeline has been set up for automatic deployment when pushing changes and/or features to the `main` and `development` branches.

### Backend hosting

The website's backend CMS is a [Strapi](https://www.strapi.io) instance and is hosted on [Heroku](https://www.heroku.com). A CI/CD pipeline has been set up for automatic deployment when pushing changes and/or features to the `main` branch.

### Error tracking

Errors will be collected in a [Sentry](https://www.sentry.com) dashboard.

### E-mail setup

To be determined.

## Environments

This project consists of different environments, all of which having a different purpose.

| Environment | Branch        | Purpose               |
| :---------- | :------------ | :-------------------- |
| Production  | `main`        | Public website        |
| Development | `development` | Development & testing |

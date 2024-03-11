module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: (() => {
        switch (env("APP_ENV")) {
          case "production":
            return env("DB_HOST");
          case "development":
            return env("DEV_DB_HOST");
          case "uat":
            return env("UAT_DB_HOST");
          default:
            console.error("The application environment is wrong or undefined!");
            return "";
        }
      })(),
      port: env.int(() => {
        switch (env("APP_ENV")) {
          case "production":
            return env("DB_PORT");
          case "development":
            return env("DEV_DB_PORT");
          case "uat":
            return env("UAT_DB_PORT");
          default:
            console.error("The application environment is wrong or undefined!");
            return null;
        }
      }),
      database: (() => {
        switch (env("APP_ENV")) {
          case "production":
            return env("DB_NAME");
          case "development":
            return env("DEV_DB_NAME");
          case "uat":
            return env("UAT_DB_NAME");
          default:
            console.error("The application environment is wrong or undefined!");
            return "";
        }
      })(),
      user: (() => {
        switch (env("APP_ENV")) {
          case "production":
            return env("DB_USERNAME");
          case "development":
            return env("DEV_DB_USERNAME");
          case "uat":
            return env("UAT_DB_USERNAME");
          default:
            console.error("The application environment is wrong or undefined!");
            return "";
        }
      })(),
      password: (() => {
        switch (env("APP_ENV")) {
          case "production":
            return env("DB_PASSWORD");
          case "development":
            return env("DEV_DB_PASSWORD");
          case "uat":
            return env("UAT_DB_PASSWORD");
          default:
            console.error("The application environment is wrong or undefined!");
            return "";
        }
      })(),
    },
    debug: env("APP_ENV") === "production" ? false : true,
  },
});

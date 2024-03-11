module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env(() => {
        switch (env("APP_ENV")) {
          case "production":
            return "DB_HOST";
          case "development":
            return "DEV_DB_HOST";
          case "uat":
            return "UAT_DB_HOST";
          default:
            console.error("The application environment is wrong or undefined!");
            return "";
        }
      }),
      port: env.int(() => {
        switch (env("APP_ENV")) {
          case "production":
            return "DB_PORT";
          case "development":
            return "DEV_DB_PORT";
          case "uat":
            return "UAT_DB_PORT";
          default:
            console.error("The application environment is wrong or undefined!");
            return "";
        }
      }),
      database: env(() => {
        switch (env("APP_ENV")) {
          case "production":
            return "DB_NAME";
          case "development":
            return "DEV_DB_NAME";
          case "uat":
            return "UAT_DB_NAME";
          default:
            console.error("The application environment is wrong or undefined!");
            return "";
        }
      }),
      user: env(() => {
        switch (env("APP_ENV")) {
          case "production":
            return "DB_USERNAME";
          case "development":
            return "DEV_DB_USERNAME";
          case "uat":
            return "UAT_DB_USERNAME";
          default:
            console.error("The application environment is wrong or undefined!");
            return "";
        }
      }),
      password: env(() => {
        switch (env("APP_ENV")) {
          case "production":
            return "DB_PASSWORD";
          case "development":
            return "DEV_DB_PASSWORD";
          case "uat":
            return "UAT_DB_PASSWORD";
          default:
            console.error("The application environment is wrong or undefined!");
            return "";
        }
      }),
    },
    debug: env("APP_ENV") === "production" ? false : true,
  },
});

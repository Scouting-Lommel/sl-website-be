module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env(env("APP_ENV") === "production" ? "DB_HOST" : "DEV_DB_HOST"),
      port: env.int(
        env("APP_ENV") === "production" ? "DB_PORT" : "DEV_DB_PORT"
      ),
      database: env(
        env("APP_ENV") === "production" ? "DB_NAME" : "DEV_DB_NAME"
      ),
      user: env(
        env("APP_ENV") === "production" ? "DB_USERNAME" : "DEV_DB_USERNAME"
      ),
      password: env(
        env("APP_ENV") === "production" ? "DB_PASSWORD" : "DEV_DB_PASSWORD"
      ),
    },
    debug: env("APP_ENV") === "production" ? false : true,
  },
});

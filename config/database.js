module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DB_HOST"),
      port: env.int("DB_PORT"),
      database: env("DB_NAME"),
      user: env("DB_USERNAME"),
      password: env("DB_PASSWORD"),
    },
    debug: env("APP_ENV") === "production" ? false : true,
  },
});

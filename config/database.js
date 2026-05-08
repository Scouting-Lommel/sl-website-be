module.exports = ({ env }) => {
  return {
    connection: {
      client: "mysql2",
      connection: {
        host: env("DB_HOST"),
        port: env.int("DB_PORT"),
        database: env("DB_NAME"),
        user: env("DB_USERNAME"),
        password: env("DB_PASSWORD"),
      },
      debug: false,
    },
  };
};

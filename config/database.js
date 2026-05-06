module.exports = ({ env }) => {
  const appEnv = env("APP_ENV");
  const prefixByEnv = {
    production: "DB",
    development: "DEV_DB",
    uat: "UAT_DB",
  };

  const prefix = prefixByEnv[appEnv];
  if (!prefix) {
    throw new Error(
      `Invalid APP_ENV "${appEnv}". Expected one of: ${Object.keys(prefixByEnv).join(", ")}`
    );
  }

  return {
    connection: {
      client: "mysql",
      connection: {
        host: env(`${prefix}_HOST`),
        port: env.int(`${prefix}_PORT`),
        database: env(`${prefix}_NAME`),
        user: env(`${prefix}_USERNAME`),
        password: env(`${prefix}_PASSWORD`),
      },
      debug: false,
    },
  };
};

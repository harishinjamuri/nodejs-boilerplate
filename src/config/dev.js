import path from "path";

const config = {
  app: {
    port: 3001 /*Node Server Port*/,
  },
  bodyLimit: "100mb",
  logging: {
    console: {
      level: "debug",
    },
    file: {
      enabled: true,
      path: path.join("./", "logs"),
      level: "debug",
      zippedArchive: true,
      json: false,
      exceptionFile: true,
    },
    fileNames: {
      application: "application",
    },
  },
  database: {
    host: "localhost",
    user: "root",
    password: "",
    dbName: "test_database",
    maxConnections: 50,
  },
  corsHeaders: ["Link"],
};

export default config;
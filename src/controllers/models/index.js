import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import { fileURLToPath, pathToFileURL } from "url";
import {config} from "../../config/index.js";
import { logger } from "../../core/logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);
const db = {};

logger.info(JSON.stringify(config))
const sequelize = new Sequelize(
  config.database.dbName,
  config.database.user,
  config.database.password,
  {
    dialect: "mysql",
    // port: config.database.port,
    host: config.database.host,
    pool: {
      max: config.database.maxConnections,
      min: 0,
      idle: 10000,
      acquire: 30000,
    },
    logging: false,
    // logging: (message, executionTime) => {
    //   logger.info(`Query ${message} Execution Time: ${executionTime} ms`);
    // },
    timezone: "+05:30",
    benchmark: true,
  },
);

const files = fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js",
  );

for (const file of files) {
  const modulePath = pathToFileURL(path.join(__dirname, file)).href;
  const modelModule = await import(modulePath);

  // Support both `export default` and named exports
  const modelFactory = modelModule.default || modelModule;
  const model = modelFactory(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
}

for (const modelName of Object.keys(db)) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
}

export default db;

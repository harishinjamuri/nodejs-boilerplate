import chalk from 'chalk';
import { logger } from "./core/logger.js"
import moment from "moment";
import {config} from "./config/index.js";
import app from './core/express.js';

logger.info( chalk.bold(`---------------------[ Server starting at ${moment().format("YYYY-MM-DD HH:mm:ss.SSS")} ]---------------------------`));

logger.info(`${chalk.bold("Application root path: ")} ${global.rootPath}`);

const server = app.listen(config.app.port, function () {
  logger.info(`Environment:\t ${chalk.underline.bold(process.env.NODE_ENV || 'development')}`);

  logger.info("----------------------------------------------");
});

export default {app, server};

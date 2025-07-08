import winston from "winston";
import path from "path";
import stackTrace from "stack-trace";
import dailyRotateLogFile from "winston-daily-rotate-file";
import fs from "fs";
import * as mkdirp from "mkdirp";
import stripAnsi from 'strip-ansi';

import {config} from "../config/index.js";



const logDir = config.logging.file.path;
if (!fs.existsSync(logDir)) {
  mkdirp.sync(logDir);
}

console.log('stripAnsi type:', typeof stripAnsi);

// Custom log format
const customFormat = winston.format.printf(({ level, message, timestamp }) => {
  const trace = stackTrace.get()[10] || {};
  const fileName = path.basename(trace.getFileName() || '');
  const lineNumber = trace.getLineNumber() || '';
  const funcName = trace.getFunctionName() || 'anonymous';
  const pid = process.pid;

  const raw= `${timestamp} ${level.toUpperCase()} ${fileName}:${lineNumber} - ${funcName}() - ${pid} - ${message}`;
  return stripAnsi(raw);
});

// Common transport config
const createTransport = (filenamePattern) =>
  new dailyRotateLogFile({
    filename: `logs/${filenamePattern}-%DATE%.log`,
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxFiles: '7d',
    level: 'info',
    auditFile: 'logs/.audit.json'
  });

// Logger instance
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    customFormat
  ),
  transports: [
    createTransport('application'), // General logs
  ],
  exceptionHandlers: [
    createTransport('exceptions') // Unhandled exceptions
  ],
  rejectionHandlers: [
    createTransport('exceptions') // Unhandled promise rejections
  ]
});

// Also log to console
logger.add(new winston.transports.Console({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    customFormat
  )
}));

export {
  logger,
};

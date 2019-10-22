import Pino from "pino";

const hostname = "localhost";
export const loggerLevel = "debug";
export const logger = Pino({
  level: process.env.E_LOG_LEVEL | "debug",
  customLevels: { "0": 0 }
});
export const port = 8080;
export const host = `${hostname}:${port}`;
export const baseUrl = `http://${host}/api`;

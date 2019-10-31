const hostname = "localhost";
export const loggerLevel = process.env.E_LOG_LEVEL | "debug";
export const port = 8080;
export const host = `${hostname}:${port}`;
export const baseUrl = `http://${host}/api`;

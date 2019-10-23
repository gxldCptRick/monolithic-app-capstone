import Express from "express";
import Pino from "pino";
import { baseUrl, loggerLevel } from "../config/mainConfig";
import { routeDefinitions } from "../config/studentConfigs";
export const studentRoutes = Express.Router();

const logger = Pino({ level: loggerLevel });

studentRoutes.get("/", (req, res) => {
  logger.debug("Creating the response object from the route definitions");
  let obj = JSON.parse(JSON.stringify(routeDefinitions));
  logger.debug(obj);
  logger.debug("Updating the response object with uppercase methods");
  Object.keys(obj).forEach(
    key => (obj[key].path = obj[key].path.toUpperCase())
  );
  logger.debug(obj);
  res.json({
    data: obj
  });
  logger.debug("Sent response to the client");
});

studentRoutes.post("/", (req, res) => {
  req.
  res.status(201).send({created: });
});

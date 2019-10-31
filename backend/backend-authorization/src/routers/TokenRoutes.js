import Express from "express";
import { DefaultLogger } from "../config/Logging";
import { routeDefinitions, TokenHandler } from "../config/studentConfigs";

export const TokenRoutes = Express.Router();

const logger = DefaultLogger()

TokenRoutes.post("/", (req, res) => {
  const payload = req.body;
  try{
    logger.info('Generating Token for security')
    const token = await TokenHandler.createToken(payload);
    logger.info('Finished Token for security')
    res.json({status: 200, data: { token: token }})
    logger.info('Responded to Client with Token')
  }catch(e){
    logger.error(e);
    logger.error('Failed to Generate Token')
    logger.info('Sending the error to the user')
    res.status(400).json({ status: 400, errorMessage: 'Could not Generate a Token for the given username', data: {reason: e}})
  }

});

TokenRoutes.post("/validate", (req, res) => {});

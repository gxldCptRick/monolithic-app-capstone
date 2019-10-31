import Express from "express";
import { DefaultLogger } from "../config/Logging";
const logger = DefaultLogger();
export const RoleRouter = Express.Router();

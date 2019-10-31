import Pino from "pino";
import { loggerLevel } from "./mainConfig";
export const DefaultLogger = () => Pino({ level: loggerLevel });

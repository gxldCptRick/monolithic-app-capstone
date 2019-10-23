import Express from "express";
import BodyParser from "body-parser";
import { port, baseUrl, logger } from "./src/config/mainConfig";
import { studentRoutes } from "./src/routers/student";
import ExpressPino from "express-pino-logger";
const app = Express();

app.use(ExpressPino({ logger }));
app.use(BodyParser.json());
app.use("/api/student", studentRoutes);

app.listen(port, () => logger.debug(`listening on port ${port}`));

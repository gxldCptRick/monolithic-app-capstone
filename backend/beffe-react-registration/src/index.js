import Express from "express";
import Compress from "compression";
import PinoExpress from "express-pino-logger";
import BodyParser from "body-parser";
import { StudentRoutes } from "./routers/StudentRoutes";
import path from "path";
import cors from "cors";
import { port } from "./configs/ServerConfig";
const app = Express();
app.use(PinoExpress({ autoLogging: true }));
app.use(cors({ origin: "http://localhost:3000" }));
app.use(Compress());
app.use(Express.static("public"));
app.use(BodyParser.json());
app.use("/api/student", StudentRoutes);
app.get("*", (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, "..", "/public/index.html")));
});
app.listen(port, () => console.log(`listening on port ${port}`));

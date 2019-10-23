import Express from "express";
import Compress from "compression";
const app = Express();
app.use(Compress());
app.use(Express.static("public"));

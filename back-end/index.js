import Express from "express";
import { port, StudentPaths } from "./src/config/mainConfig";
const app = Express();

app.get("/student", (req, res) => {
  let obj = Object.assign({}, StudentPaths);
  Object.keys(obj).forEach(k => (obj[k].path = `${req.baseUrl}${obj[k].path}`));
  res.status(200).json(obj);
});

app.listen(port, () => console.log(`listening on port ${port}`));

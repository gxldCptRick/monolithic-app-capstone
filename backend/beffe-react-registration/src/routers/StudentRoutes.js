import Express from "express";
import { StudentHandler, TokenHandler } from "../configs/ServerConfig";
export const StudentRoutes = Express.Router();

StudentRoutes.get("/", (req, res) => {
  res.status(200).json({ status: 200, data: { message: "route is active" } });
});
StudentRoutes.post("/", async (req, res) => {
  const payload = req.body;
  const results = [
    StudentHandler.addStudent(payload),
    TokenHandler.generateToken(payload)
  ];
  try {
    await Promise.all(results);
    res.status(200).json({
      status: 200,
      data: { message: "Successfully Registered Student" }
    });
  } catch (e) {
    //find a way to reset the thing based on the errors
    res.status(400).json(e);
  }
});

StudentRoutes.post("/login", async (req, res) => {
  res.json({ status: 200, data: { message: "Git Gud" } });
});

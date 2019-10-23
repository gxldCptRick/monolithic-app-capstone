import { Router } from "express";
import { StudentHandler } from "../configs/ServerConfig";
export const StudentRoutes = Router();

StudentRoutes.post("/student", async (req, res) => {
  const payload = req.body;
  const result = await StudentHandler.addStudent(payload);
  res.json(result);
});

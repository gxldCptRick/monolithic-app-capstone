import Express from "express";
import { StudentHandler, TokenHandler } from "../configs/ServerConfig";
import Pino from "pino";
const logger = Pino({ level: "info", customLevel: { 0: 0 } });
export const StudentRoutes = Express.Router();

StudentRoutes.get("/", (req, res) => {
    logger.info("Serving Client for basic request");
    res.status(200).json({ status: 200, data: { message: "route is active" } });
});
StudentRoutes.post("/", async (req, res) => {
    const payload = req.body;
    logger.info("Starting the transaction for creating a new student.");
    const results = [
        StudentHandler.addStudent(payload),
        TokenHandler.generateToken(payload)
    ];
    try {
        await Promise.all(results);
        logger.info("Transaction is complete");
        res.status(200).json({
            status: 200,
            data: { message: "Successfully Registered Student" }
        });
    } catch (e) {
    //find a way to reset the thing based on the errors
        logger.error(e);
        logger.error("Was not able to process transaction fully.");
        res.status(400).json(e);
    }
});

StudentRoutes.post("/login", async (req, res) => {
    logger.info("Logging in the user");
    try {
        let promises = [
            StudentHandler.verifyStudent(req.body),
            TokenHandler.generateToken(req.body)
        ];
        await Promise.all(promises);
    } catch (e) {
        logger.error(e);
        logger.error("Could not login user correctly");
        res.status(401).json({
            status: 401,
            message: "Could not properly authenticate",
            cause: e
        });
    }
});

import JWT from "jsonwebtoken";
import { host } from "../config/mainConfig";
import { secret } from "../config/security";

export const createLoginToken = async ({ body }) =>
  JWT.sign({ ...body }, secret, {
    expiresIn: "1hr",
    issuer: host,
    subject: "auth"
  });

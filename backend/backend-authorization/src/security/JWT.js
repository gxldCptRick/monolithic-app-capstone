import JWT from "jsonwebtoken";
import { host } from "../config/mainConfig";
import { secret } from "../config/security";

export const createLoginToken = async ({ body }) =>
  JWT.sign({ ...body }, secret, {
    expiresIn: "1hr",
    issuer: host,
    subject: "auth"
  });

export const validateLoginToken = async ({ jwt }) =>
  new Promise((res, rej) => {
    JWT.verify(jwt, secret, (err, data) => {
      if (err) {
        rej(err);
      } else {
        res(true);
      }
    });
  });

export const parseToken = async ({ jwt }) =>
  new Promise((res, rej) => {
    JWT.verify(jwt, secret, (err, data) => {
      if (err) {
        rej(err);
      } else {
        res(data);
      }
    });
  });

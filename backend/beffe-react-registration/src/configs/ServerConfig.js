import { HttpStudentHandler } from "../data-access/HttpStudentHandler";
import { HttpTokenHandler } from "../data-access/HttpTokenHandler";

export const port = process.env.BE_REACT_PORT | 3030;
export const StudentHandler = new HttpStudentHandler({
  host: "localhost",
  port: 8000
});
export const TokenHandler = new HttpTokenHandler({
  host: "localhost",
  port: 8080
});

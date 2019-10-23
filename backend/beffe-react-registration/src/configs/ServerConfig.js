import { HttpStudentHandler } from "../data-access/HttpStudentHandler";

export const port = process.env.BE_REACT_PORT | 3030;
export const StudentHandler = new HttpStudentHandler();

import StudentHandler from "./StudentHandler";
import axios from "axios";

export class HttpStudentHandler extends StudentHandler {
  constructor({ host, port }) {
    super();
    this.base_url = `http://${host}:${port}/api/`;
  }

  get studentUrl() {
    return `${this.base_url}students`;
  }

  async addStudent(student) {
    const thing = await axios.post(this.studentUrl, student, {});
    if (thing.status !== 201)
      return Promise.reject({
        status: thing.status,
        message: "failed to add the student"
      });
    return thing.data;
  }

  async getStudentInfo({ jwt, username }) {
    const response = await axios.get(`${this.studentUrl}/${username}`, {
      auth: `Bearer ${jwt}`
    });
    if (response.status === 200) {
      return response.data;
    } else {
      return Promise.reject({
        status: response.status,
        message: `failed to fetch student with username: ${username}`
      });
    }
  }
}

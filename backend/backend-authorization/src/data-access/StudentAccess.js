import NotImplemented from "../common/NotImplemented";
import StudentRoleAccess from "./StudentRoleAccess";
import { createLoginToken } from "../security/JWT";
import Http from "http2";
export default class StudentAccess {
  constructor({ studentRoleAccess = new StudentRoleAccess() }) {
    this.rolesAccess = studentRoleAccess;
  }
  async login({ username, password }) {
    try {
      if (await this.validateLogin({ username, password })) {
        let roles = await this.rolesAccess.fetchRolesForUser({ username });
        return createLoginToken({ body: { username, roles } });
      }
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async validateLogin({ username, password }) {
    return Promise.reject(new NotImplemented());
  }

  async register({ username, password }) {
    return Promise.reject(new NotImplemented());
  }
}

import NotImplemented from "../common/NotImplemented";
export default class StudentRoleAccess {
  async fetchRolesForUser({ username }) {
    return Promise.reject(new NotImplemented());
  }
  async addRoleToUser({ username, role }) {
    return Promise.reject(new NotImplemented());
  }
}

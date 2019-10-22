import NotImplementedError from "../common/NotImplemented";
import { createLoginToken } from "../security/JWT";
export default class DataAccess {
  async login({ username, password }) {
    try {
      if (await this.validateLogin({ username, password })) {
        let roles = await this._fetchRoles({ username });
        return createLoginToken({ body: { username, roles } });
      }
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async validateLogin({ username, password }) {
    return Promise.reject(new NotImplementedError());
  }

  async register({ username, password }) {
    return Promise.reject(new NotImplementedError());
  }
}

import { TokenHandler } from "./TokenHandler";

export class HttpTokenHandler extends TokenHandler {
  constructor({ host, port }) {
    super();
    this.baseUrl = `http://${host}:${port}/api`;
  }

  get tokenUrl() {
    return `${this.baseUrl}/token`;
  }
  async generateToken(loginInfo) {}
}

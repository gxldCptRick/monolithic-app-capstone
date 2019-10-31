import { TokenHandler } from "./TokenHandler";
import axios from "axios";

export class HttpTokenHandler extends TokenHandler {
    constructor({ host, port }) {
        super();
        this.baseUrl = `http://${host}:${port}/api`;
    }

    get tokenUrl() {
        return `${this.baseUrl}/token`;
    }
    async generateToken(loginInfo) {
        try {
            const result = await axios.post(this.tokenUrl, { ...loginInfo });
            if (result.status != 200) {
                return Promise.reject(result);
            }

            return result;
        } catch (e) {
            return Promise.reject(e);
        }
    }
}

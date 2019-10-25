export class TokenHandler {
    async generateToken(tokenObj) {
        return this.errorOut();
    }
    errorOut() {
        return Promise.reject(new Error("Not Implemented"));
    }
}

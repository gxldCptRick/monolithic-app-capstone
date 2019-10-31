export default class StudentHandler {
    async addStudent(student) {
        return this.errorOut();
    }

    async verifyStudent(student) {
        return this.errorOut();
    }

    async getStudentInfo({ jwt, username }) {
        return this.errorOut();
    }

    errorOut() {
        Promise.reject(new Error("Not Implemented"));
    }
}

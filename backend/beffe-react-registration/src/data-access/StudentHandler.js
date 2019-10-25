export default class StudentHandler {
    async addStudent(student) {
        return this.errorOut();
    }

    errorOut() {
        Promise.reject(new Error("Not Implemented"));
    }
}


const Employee = require('../library/engineer')

const billy = new Employee('Billy', '123', 'me@me.com', 'me321')

describe("Employee class", () => {
    describe("Employee class methods", () => {
        it("gets name", () => {
            expect(billy.getName()).toBe('Billy');
        });

        it("gets id", () => {
            expect(billy.getId()).toBe('123');
        });

        it("get github", () => {
            expect(billy.getGithub()).toBe('me321')
        });

        it("gets email", () => {
            expect(billy.getEmail()).toBe('me@me.com');
        });

        it("gets role", () => {
            expect(billy.getRole()).toBe('Engineer')
        })
    });
});
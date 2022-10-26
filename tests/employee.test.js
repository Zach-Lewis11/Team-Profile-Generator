const Employee = require('../library/employee')

const billy = new Employee('Billy', '123', 'me@me.com')

describe("Employee class", () => {
    describe("Employee class methods", () => {
        it("gets name", () => {
            expect(billy.getName()).toBe('Billy');
        });

        it("gets id", () => {
            expect(billy.getId()).toBe('123');
        });

        it("gets email", () => {
            expect(billy.getEmail()).toBe('me@me.com');
        });

        it("gets role", () => {
            expect(billy.getRole()).toBe('Employee')
        })
    });
});
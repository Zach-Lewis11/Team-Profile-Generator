
const Employee = require('../library/intern')

const billy = new Employee('Billy', '123', 'me@me.com', 'uni')

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

        it("gets school", ()=> {
            expect(billy.getSchool()).toBe('uni')
        })

        it("gets role", () => {
            expect(billy.getRole()).toBe('Intern')
        })
    });
});

const Manager = require('../library/manager')

const billy = new Manager('Billy', '123', 'me@me.com', '1234567890')

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

        it("gets officeNumber", ()=>{
            expect(billy.getOfficeNum()).toBe("1234567890")
        })

        it("gets role", () => {
            expect(billy.getRole()).toBe('Manager')
        })
    });
});
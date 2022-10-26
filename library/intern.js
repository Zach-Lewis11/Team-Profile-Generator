const Employee = require('./employee')

class Intern extends Employee{
    constructor(personName, id, email, school){
        super(personName, id, email)
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return `Intern`;
    }
}

module.exports = Intern;
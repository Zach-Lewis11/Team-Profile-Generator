const Employee = require('./employee')

class Manager extends Employee{
    constructor(personName, id, email, officeNumber){
        super(personName, id, email)
        this.officeNumber = officeNumber;
    }
    getOfficeNum(){
        return this.officeNumber;
    }
    getRole(){
        return `Manager`;
    }
}

module.exports = Manager;
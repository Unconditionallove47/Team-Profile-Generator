// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name,getID,email) {
      this.name = name;
      this.id= getID;
      this.email = email;
  
    }
  addEmployee(name,id,email) {
    const e = new Employee(name,id,email);
    this.Employee.push(e);
  }
  getRole() {return "Employee"}
  getEmail() {return this.email}
  getId() {return this.id}
  getName() {return this.name}
   }

   module.exports = Employee;
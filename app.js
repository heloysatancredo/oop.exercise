class Employee {
  constructor(name, role, dept, bMonth) {
      this.name = name,
      this.role = role,
      this.department = dept,
      this.birthMonth = bMonth,
      this.company = "Langara"
  }

  hasDepID() {
    console.log(`${this.name} - ${this.department}`);
  }

  hasComputer() {
    console.log(`${this.name} has a computer.`)
  }

  isBirthdayMonth() {
    let today = new Date();
    let todayMonth = today.getMonth();
    let birthM = this.birthMonth;
    if (birthM - 1 == todayMonth) {
      console.log('Happy Birthday!');
    } else {
      console.log("It's not your birthiday month")
    }
  }
}

let emp1 = new Employee("Heloysa", "Developer", "IT Dep", "03");

console.log(emp1.name);
emp1.hasDepID();
emp1.isBirthdayMonth();
console.log(emp1.company);

class Driver extends Employee {
  constructor(name, role, dept, bMonth, vehicle, license) {
    super(name, role, dept, bMonth)
    this.vehicle = vehicle;
    this.license = license;
  }

  isDriving() {
    console.log(`${this.name} is driving ${this.vehicle}`);
  }

  validateLicense() {
    console.log(`${this.license} is a valid license.`)
  }
}

let driver1 = new Driver("Alencar", "Staff", "Transportation", "08", "Car", "A-B");

console.log(driver1.vehicle);
driver1.hasDepID();
driver1.isBirthdayMonth();
driver1.isDriving();
driver1.validateLicense();
console.log(driver1.company);  
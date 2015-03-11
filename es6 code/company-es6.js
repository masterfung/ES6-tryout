class Person {
  constructor(name, age) {
    this.name = name,
    this.age = age
  } 
}

class Worker extends Person{
  constructor(name, age, title, salary, status) {
    super(name, age)
    this.title = title,
    this.salary = salary,
    this.status = status,
    this.permissions = []
  }
  
  setPermission(args) {
    for(let i = 0; i<args.length; i++) {
      this.permissions.push(i);
    }
  }
  
  changeSalary(newSalary) {
    return this.salary = newSalary;
  }
  
  checkSalary() {
    return this.salary
  }
  
}

class Department {
  constructor(name) {
    this.name = name,
    this.team = {}
  }
  
  addTeamMembers(args) {
    for (let i = 0; i < args.length; i++) {
      this.team[i] = i;
    }
  }
  
  removeTeamMember(arg) {
    if (arg in this.team) {
      delete this.team[arg];
    }
  }
}
const MAXDEPARTMENTSIZE = 4

class Company {
  constructor(name) {
    this.name = name,
    this.departments = {}
  }
  
  createNewDepartment(name) {
    console.log(Object.keys(this.departments).length);
    if (Object.keys(this.departments).length >= MAXDEPARTMENTSIZE) {
      let message = `You have exceeded the maximum Departments allowed by ${this.name}.`;
      console.log(message);
      return message;
    } else {
      this.departments[name] = new Department(name);
    }
  }
  
  createTeamMember(name, age, title, salary, status) {
    let individual = new Worker(name, age, title, salary, status)
    return individual;
  }
  
  howManyDepartments() {
    return Object.keys(this.departments);
  }
  
  addTeamToDept(departmentName, args){
    let departmentName = departmentName.toLowerCase();
    if (departmentName in this.departments) {
      this.departments[departmentName].team = args;
    } else {
      return 'Something went wrong. Please check your inputs.'
    }
  }
  
  terminateWorker(departmentName, name) {
    let departmentName = departmentName.toLowerCase();

  }
  
}

let apple = new Company('Apple');
apple.createNewDepartment('product');
apple.createNewDepartment('engineering');
apple.createNewDepartment('management');
apple.createNewDepartment('human resources');

let jerry = new Worker('Jerry', 22, 'Product Designer', 67000, 'fulltime');
let ken = new Worker('Ken', 32, 'Senior Product Designer', 237000, 'fulltime');

let product = [jerry, ken];

apple.addTeamToDept('PRODUCT', product);

let ralph = new Worker('Ralph', 33, 'Software Engineer', 160000, 'fulltime');
let henry = new Worker('Henry', 33, 'Software Engineer', 160000, 'fulltime');
let lauren = new Worker('Lauren', 33, 'Dev Ops Engineer', 120000, 'fulltime');
let jenkins = new Worker('Jenkins', 33, 'Database Engineer', 175000, 'fulltime');
let matthews = new Worker('Matthews', 33, 'Software Engineer', 210000, 'fulltime');
let amy = new Worker('Amy', 33, 'Senior Software Engineer', 210000, 'fulltime');

let engineering = [ralph, henry, lauren, jenkins, matthews, amy];
apple.addTeamToDept('engineering', engineering);

let joy = new Worker('Joy', 55, 'Chief Financial Officer', 850000, 'fulltime');

console.log(apple.howManyDepartments());
console.log(apple);

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
    this.permission,
    this.dateHired = new Date()
  }
  
  setPermission(permission) {
    this.permission = permission;
  }
  
  changeSalary(newSalary) {
    return this.salary = newSalary;
  }
  
  checkSalary() {
    return this.salary
  }
  
  changeStatus(newStatus) {
    this.status = newStatus
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

class Building {
  constructor(name, capacity, floor, buildingNumber) {
    this.name = name,
    this.capacity = capacity,
    this.floor = floor,
    this.buildingNumber = buildingNumber,
    this.clearanceLevel = [],
    this.amenities = ['restrooms', 'kitchens', 'conference room', 'high-speed internet', 'play center', 'workspace'],
    this.conferenceRooms = {},
    this.usedRooms = []
  }
  declareClearance(levels) {
    for (let i = 0; i < levels.length; i++) {
      this.clearanceLevel.push(levels[i]);
    }
  }
  
  checkClearance() {
    return this.clearanceLevel;
  }
  
  addAmenities(args) {
    for (let i = 0; i < args.length; i++) {
      this.amenities.push(i);
    }
  }
  
  checkAmenities() {
    return this.amenities;
  }
  
  removeAmenity(item) {
    if (item in this.amenities) {
      let indexNumer = this.amenities.indexOf(item);
      this.amenities.splice(indexNumber, 1)
    }
  }
  
  declareConferenceRooms(conferenceListNames) {
    for (let i = 0; i < conferenceListNames.length; i++) {
      this.conferenceRooms[conferenceListNames[i]] = conferenceListNames[i];
    }
  }
  
  useConferenceRoom(name) {
    for (let i = 0; i < Object.keys(this.conferenceRooms).length; i++) {
      if (name.toLowerCase() === Object.keys(this.conferenceRooms)[i].toLowerCase()) {
        this.usedRooms.push(name);
        return 'Completed! Your request has been added. You can use the room now!'
      }
    }
    return 'Oops! Something went wrong. Either the name is incorrect or the room is taken.'
  }
  
  returnConferenceRoom(name) {
    let found = false;
    for (let i = 0; i < this.usedRooms.length; i++) {
      if (name === this.usedRooms[i]) {
        found = true;
    }
    }
    if (found) {
      let roomIndex = this.usedRooms.indexOf(name);
      this.usedRooms.splice(roomIndex, 1);
    } else {
      return 'The room you are trying to return is not found. Please check your input.'
    }
  }
  
  clearanceChecker(building, individual) {
    console.log(building)
    for (let i = 0; i < building.clearanceLevel.length; i++) {
      if (individual === building.clearanceLevel[i]) {
        return 'Access granted!';
      } 
    }
    return 'Access Denied!';
  }
  
}

const MAXDEPARTMENTSIZE = 4
const MAXBUILDINGS = 10

class Company {
  constructor(name) {
    this.name = name,
    this.departments = {},
    this.clearance = {
      standard: 'A',
      research: 'B',
      mechanical: 'C',
      executive: 'D',
      visitor: 'E'
    },
    this.buildings = {}
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
  
  createNewBuilding(name, capacity, floor, buildingNumber) {
    this.buildings[name] = new Building(name, capacity, floor, buildingNumber);
    return `${name} has been created`;
  }
  
  checkBuildings() {
    return this.buildings;
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

apple.createNewBuilding("Fera", 10000, 30, 100);
apple.buildings["Fera"].declareClearance(['E', "A", "D", "C", "B"])

apple.createNewBuilding("Kent", 200, 2, 110);
apple.buildings["Kent"].declareClearance(["A", "D"]);

let jerry = new Worker('Jerry', 22, 'Product Designer', 67000, 'fulltime');
let ken = new Worker('Ken', 32, 'Senior Product Designer', 237000, 'fulltime');

let product = [jerry, ken];

apple.addTeamToDept('PRODUCT', product);

let ralph = new Worker('Ralph', 23, 'Software Engineer', 160000, 'fulltime');
let henry = new Worker('Henry', 55, 'Senior Director Software Engineer', 290000, 'fulltime');
let lauren = new Worker('Lauren', 25, 'Dev Ops Engineer', 120000, 'fulltime');
let jenkins = new Worker('Jenkins', 29, 'Database Engineer', 175000, 'fulltime');
let matthews = new Worker('Matthews', 33, 'Software Engineer', 210000, 'fulltime');
let amy = new Worker('Amy', 43, 'Senior Software Engineer', 210000, 'fulltime');
let jessica = new Worker('Jessica', 17, 'iTunes', 30000, 'intern');
let tanner = new Worker('Tanner', 66, 'Interational Trade Ambassador Lawyer', 300000, 'fulltime');

let engineering = [ralph, henry, lauren, jenkins, matthews, amy, jessica, tanner];
apple.addTeamToDept('engineering', engineering);

let joy = new Worker('Joy', 61, 'Chief Financial Officer', 850000, 'fulltime');
let tim = new Worker('Tim', 55, 'Chief Operational Officer', 8150000, 'fulltime');
let steve = new Worker('Steve', 59, 'Chief Executive Officer', 11150000, 'fulltime');
let jony = new Worker('Jony', 56, 'Senior Vice President of Everything Awesome', 6150000, 'fulltime');

let management = [joy, steve, tim, steve, jony];
apple.addTeamToDept('management', management);

jony.setPermission("D");
apple.buildings['Fera'].clearanceChecker(apple.buildings['Fera'], jony.permission);

apple.buildings["Fera"].declareConferenceRooms(['Pluto', 'Jupiter', 'Saturn', 'Mars', 'Earth', 'Mercury', 'Venus']);
apple.buildings["Fera"].useConferenceRoom('Pluto');
apple.buildings["Fera"].returnConferenceRoom('Pluto');

let saraj = new Worker('Saraj', 35, 'Director of Human Resources', 1150000, 'fulltime');

let hr = [saraj];
apple.addTeamToDept('human resources', hr);

console.log(apple.howManyDepartments());
console.log(apple.buildings['Fera']);

let s = "subs";
console.log(s.slice(0,1).toUpperCase() + s.slice(1))
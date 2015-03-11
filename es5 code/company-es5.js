"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Person = function Person(name, age) {
  _classCallCheck(this, Person);

  this.name = name, this.age = age;
};

var Worker = (function (_Person) {
  function Worker(name, age, title, salary, status) {
    _classCallCheck(this, Worker);

    _get(Object.getPrototypeOf(Worker.prototype), "constructor", this).call(this, name, age);
    this.title = title, this.salary = salary, this.status = status, this.permissions = [], this.dateHired = new Date();
  }

  _inherits(Worker, _Person);

  _createClass(Worker, {
    setPermission: {
      value: function setPermission(args) {
        for (var i = 0; i < args.length; i++) {
          this.permissions.push(i);
        }
      }
    },
    changeSalary: {
      value: function changeSalary(newSalary) {
        return this.salary = newSalary;
      }
    },
    checkSalary: {
      value: function checkSalary() {
        return this.salary;
      }
    },
    changeStatus: {
      value: function changeStatus(newStatus) {
        this.status = newStatus;
      }
    }
  });

  return Worker;
})(Person);

var Department = (function () {
  function Department(name) {
    _classCallCheck(this, Department);

    this.name = name, this.team = {};
  }

  _createClass(Department, {
    addTeamMembers: {
      value: function addTeamMembers(args) {
        for (var i = 0; i < args.length; i++) {
          this.team[i] = i;
        }
      }
    },
    removeTeamMember: {
      value: function removeTeamMember(arg) {
        if (arg in this.team) {
          delete this.team[arg];
        }
      }
    }
  });

  return Department;
})();

var Building = (function () {
  function Building(name, capacity, floor, buildingNumber) {
    _classCallCheck(this, Building);

    this.name = name, this.capacity = capacity, this.floor = floor, this.buildingNumber = buildingNumber, this.clearanceLevel = [], this.amenities = ["restrooms", "kitchens", "confernece room", "high-speed internet", "play center", "workspace"], this.conferenceRooms = {};
  }

  _createClass(Building, {
    declareClearance: {
      value: function declareClearance(levels) {
        for (var i = 0; i < levels.length; i++) {
          this.clearanceLevel.push(i);
        }
      }
    },
    checkClearance: {
      value: function checkClearance() {
        return this.clearanceLevel;
      }
    },
    addAmenities: {
      value: function addAmenities(args) {
        for (var i = 0; i < args.length; i++) {
          this.amenities.push(i);
        }
      }
    },
    checkAmenities: {
      value: function checkAmenities() {
        return this.amenities;
      }
    },
    removeAmenity: {
      value: function removeAmenity(item) {
        if (item in this.amenities) {
          var indexNumer = this.amenities.indexOf(item);
          this.amenities.splice(indexNumber, 1);
        }
      }
    },
    declareConferenceRoom: {
      value: function declareConferenceRoom(conferenceList) {}
    }
  });

  return Building;
})();

var MAXDEPARTMENTSIZE = 4;
var MAXBUILDINGS = 10;

var Company = (function () {
  function Company(name) {
    _classCallCheck(this, Company);

    this.name = name, this.departments = {}, this.clearance = {
      standard: "A",
      research: "B",
      mechanical: "C",
      executive: "D",
      visitor: "E"
    }, this.buildings = {};
  }

  _createClass(Company, {
    createNewDepartment: {
      value: function createNewDepartment(name) {
        console.log(Object.keys(this.departments).length);
        if (Object.keys(this.departments).length >= MAXDEPARTMENTSIZE) {
          var message = "You have exceeded the maximum Departments allowed by " + this.name + ".";
          console.log(message);
          return message;
        } else {
          this.departments[name] = new Department(name);
        }
      }
    },
    createNewBuilding: {
      value: function createNewBuilding(name, capacity, floor, buildingNumber) {
        this.buildings[name] = new Building(name, capacity, floor, buildingNumber);
        return "" + name + " has been created";
      }
    },
    checkBuildings: {
      value: function checkBuildings() {
        return this.buildings;
      }
    },
    createTeamMember: {
      value: function createTeamMember(name, age, title, salary, status) {
        var individual = new Worker(name, age, title, salary, status);
        return individual;
      }
    },
    howManyDepartments: {
      value: function howManyDepartments() {
        return Object.keys(this.departments);
      }
    },
    addTeamToDept: {
      value: function addTeamToDept(departmentName, args) {
        var departmentName = departmentName.toLowerCase();
        if (departmentName in this.departments) {
          this.departments[departmentName].team = args;
        } else {
          return "Something went wrong. Please check your inputs.";
        }
      }
    },
    terminateWorker: {
      value: function terminateWorker(departmentName, name) {
        var departmentName = departmentName.toLowerCase();
      }
    },
    clearanceChecker: {
      value: function clearanceChecker(clearance) {
        var clearance = clearance.toUpperCase();
      }
    }
  });

  return Company;
})();

var apple = new Company("Apple");

apple.createNewDepartment("product");
apple.createNewDepartment("engineering");
apple.createNewDepartment("management");
apple.createNewDepartment("human resources");

apple.createNewBuilding("Fera", 1000, 3, 100);
apple.buildings.Fera.declareClearance(["E", "A"]);

var jerry = new Worker("Jerry", 22, "Product Designer", 67000, "fulltime");
var ken = new Worker("Ken", 32, "Senior Product Designer", 237000, "fulltime");

var product = [jerry, ken];

apple.addTeamToDept("PRODUCT", product);

var ralph = new Worker("Ralph", 23, "Software Engineer", 160000, "fulltime");
var henry = new Worker("Henry", 55, "Senior Director Software Engineer", 290000, "fulltime");
var lauren = new Worker("Lauren", 25, "Dev Ops Engineer", 120000, "fulltime");
var jenkins = new Worker("Jenkins", 29, "Database Engineer", 175000, "fulltime");
var matthews = new Worker("Matthews", 33, "Software Engineer", 210000, "fulltime");
var amy = new Worker("Amy", 43, "Senior Software Engineer", 210000, "fulltime");
var jessica = new Worker("Jessica", 17, "iTunes", 30000, "intern");
var tanner = new Worker("Tanner", 66, "Interational Trade Ambassador Lawyer", 300000, "fulltime");

var engineering = [ralph, henry, lauren, jenkins, matthews, amy, jessica, tanner];
apple.addTeamToDept("engineering", engineering);

var joy = new Worker("Joy", 61, "Chief Financial Officer", 850000, "fulltime");
var tim = new Worker("Tim", 55, "Chief Operational Officer", 8150000, "fulltime");
var steve = new Worker("Steve", 59, "Chief Executive Officer", 11150000, "fulltime");
var jony = new Worker("Jony", 56, "Senior Vice President of Everything Awesome", 6150000, "fulltime");

var management = [joy, steve, tim, steve, jony];
apple.addTeamToDept("management", management);

var saraj = new Worker("Saraj", 35, "Director of Human Resources", 1150000, "fulltime");

var hr = [saraj];
apple.addTeamToDept("human resources", hr);

console.log(apple.howManyDepartments());
console.log(apple);

var s = "subs";
console.log(s.slice(0, 1).toUpperCase() + s.slice(1));
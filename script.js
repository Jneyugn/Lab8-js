
//part 1 - creating objects
const student = {
    name: "Jenny Nguyen",
    age: 24,
    enrolled: true,
    courses: ["Math", " Writ", " Programming"],
    displayInfo() {
        return `Student Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled ? "Yes" : "No"}, Courses: ${this.courses}`;
      }
};

console.log("Name:", student.name);
console.log("Age:", student.age);

console.log(student.displayInfo());

//part 2 - json

const studentJSON = JSON.stringify(student);
console.log("JSON String:", studentJSON);

const newStudent = JSON.parse(studentJSON);
console.log("Converted Object:", newStudent);

console.log("Are the two objects equal?", JSON.stringify(student) === JSON.stringify(newStudent));


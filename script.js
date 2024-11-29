const student = {
    name: "Jenny Nguyen",
    age: 24,
    enrolled: true,
    courses: ["Math", " Writ", " Programming"],
    displayInfo() {
        return `Student Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled} ? "Yes" : "No", Courses: ${this.courses}`;
      }
}

console.log("Name:", student.name);
console.log("Age:", student.age);

console.log(student.displayInfo());

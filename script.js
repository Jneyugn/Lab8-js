
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

// Part 3: Using Destructuring 

const { name, courses } = student;
console.log("Name:", name);
console.log("Courses:", courses);

//Array
const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;
console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);

// Part 4: The Spread Operator
const clonedStudent = { ...student, graduationYear: 2025 };
console.log("Cloned Student:", clonedStudent);

const additionalCourses = ["Science", "Programming"];
const mergedCourses = [...student.courses, ...additionalCourses];
console.log("Merged Courses:", mergedCourses);
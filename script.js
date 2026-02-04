let inpName = document.getElementById('inpName');
let inpAge = document.getElementById('inpAge');
let inpMarks = document.getElementById('inpMarks');
let btnSubmit = document.getElementById('btnSubmit');
let dataDisplay = document.getElementById('dataDisplay');

let students = JSON.parse(localStorage.getItem('students')) || [];

subBtn.addEventListener('click', function (e) {
    e.preventDefault();
    addStudent();
});

function addStudent() {
    const name = inpName.value.trim();
    const age = Number(inpAge.value);
    const marks = Number(inpMarks.value);

    if (name === "" || inpAge.value === "" || inpMarks.value === "") {
        alert("Please fill in all fields.");
        return;
    }
    let result = "";

    if (marks >= 90) {
        result = "A+";
    } else if (marks >= 80) {
        result = "A";
    } else if (marks >= 70) {
        result = "B";
    } else if (marks >= 60) {
        result = "C";
    } else if (marks >= 50) {
        result = "D";
    } else if (marks >= 40) {
        result = "E";
    } else if (marks < 33) {
        result = "F";
    }

    const student = { name, age, marks, result }

    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    renderStudents();
    clearInputs();

};


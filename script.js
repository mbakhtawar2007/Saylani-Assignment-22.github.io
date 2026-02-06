const inpName = document.getElementById("inpName");
const inpAge = document.getElementById("inpAge");
const inpMarks = document.getElementById("inpMarks");
const subBtn = document.getElementById("subBtn");
const dataDisplay = document.getElementById("dataDisplay");

let students = JSON.parse(localStorage.getItem("students")) || [];

subBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addStudent();
});

function addStudent() {
  const name = inpName.value.trim();
  const age = Number(inpAge.value);
  const marks = Number(inpMarks.value);

  if (name === "" || inpAge.value === "" || inpMarks.value === "") {
    alert("All fields are required.");
    return;
  }

  // if (age < 18) {
  //   alert("Students under 18 are not allowed.");
  //   return;
  // }

  let result = "";
  if (marks >= 80) result = "A+";
  else if (marks >= 70) result = "A";
  else if (marks >= 60) result = "B";
  else if (marks >= 50) result = "C";
  else if (marks < 40) result = "F";


  const student = { name, age, marks, result };

  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));

  renderStudents();
  clearInputs();
}

function renderStudents() {
  let html = `
    <span>Student List</span>
    <table border="1" width="100%" cellpadding="10">
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Marks</th>
        <th>Result</th>
        <th>Action</th>
      </tr>
  `;

  students.forEach((std, index) => {
    let color = "";
    if (std.result === "A+") color = "rgb(0, 180, 0)";
    else if (std.result === "A") color = "rgb(0, 180, 0)";
    else if (std.result === "B") color = "rgb(0, 180, 0)";
    else if (std.result === "C") color = "rgb(0, 180, 0)";
    else color = "red";

    html += `
      <tr>
        <td>${std.name}</td>
        <td>${std.age}</td>
        <td>${std.marks}</td>
        <td>
          <span style="color:white; padding:5px 10px; border-radius:5px; background:${color}">
            ${std.result}
          </span>
        </td>
        <td>
          <button onclick="deleteStudent(${index})" style="background:red; color:white; border:none; padding:5px 10px; cursor:pointer;">
            Delete
          </button>
        </td>
      </tr>
    `;
  });

  html += `
    </table>
    <p><strong>Total Students:</strong> ${students.length}</p>
  `;

  dataDisplay.innerHTML = html;
}

function deleteStudent(index) {
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  renderStudents();
}

function clearInputs() {
  inpName.value = "";
  inpAge.value = "";
  inpMarks.value = "";
}

renderStudents();

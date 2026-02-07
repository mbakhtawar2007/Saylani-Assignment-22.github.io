# Student Management System (SMS)

## 1. Project Overview

The Student Management System is a simple web-based application built using **HTML, CSS, and JavaScript**. The purpose of this project is to demonstrate practical usage of **DOM manipulation, form validation, conditional logic, and browser localStorage**.

The system allows users to add, view, and delete student records while ensuring data persistence across page reloads.

### Example Image

![Student Management System Interface](./Example%20Img.png)

---

## 2. Objectives

* Practice DOM manipulation using JavaScript
* Implement client-side form validation
* Use conditional logic for business rules
* Store and retrieve data using localStorage
* Build a responsive user interface
* Deploy a working project on Netlify

---

## 3. Technology Stack

* **HTML5** – Structure of the application
* **CSS3** – Styling and responsive design
* **JavaScript (ES6)** – Application logic and DOM manipulation
* **Browser localStorage** – Data persistence
* **Netlify** – Deployment platform

---

## 4. Functional Requirements

### 4.1 Add Student

A form must be provided with the following input fields:

* Student Name (Text)
* Age (Number)
* Marks (Number)

#### Validation Rules:

* All fields are mandatory
* If any field is empty, display the error message:

  > "All fields are required."

---

### 4.3 Marks-Based Result System

After successful validation, the system must calculate the result based on marks:

| Marks Range | Result | Badge Color |
| ----------- | ------ | ----------- |
| 80 – 100    | A+     | Green       |
| 70 – 79     | A      | Green       |
| 60 – 69     | B      | Green       |
| 50 – 59     | C      | Green       |
| Below 50    | F      | Red         |

* The result must be displayed clearly in the student list
* Badge color must visually represent the result status

---

### 4.2 Display Student List

* Students must be displayed in a table format

* Table columns:

  1. Name
  2. Age
  3. Marks
  4. Result
  5. Action

* Each row must represent a single student record

---

### 4.3 Delete Student

* Each student entry must include a **Delete** button
* On clicking Delete:

  * The student must be removed from the UI
  * The student must be removed from localStorage

---

### 4.4 Data Persistence

* All student data must be stored in browser localStorage
* On page reload:

  * Previously stored student records must be retrieved
  * Student list must be rendered automatically

---

## 5. Technical Requirements

* Use JavaScript arrays and objects to manage student data
* Use DOM manipulation to dynamically update the table
* Prevent default form submission behavior (if using `<form>` tag)
* Use `if / else` conditional statements for:

  * Field validation
  * Age restriction
  * Result calculation

---

## 6. User Interface & Responsiveness

* The UI must be responsive across:

  * Desktop / PC
  * Laptop
  * Tablets
  * Mobile devices

* Responsive techniques may include:

  * Flexbox or CSS Grid
  * Media queries
  * Scalable fonts and buttons

---

## 7. Non-Functional Requirements

* Simple and clean user interface
* Fast execution with minimal page reloads
* Code should be readable and well-structured
* No external libraries or frameworks required

---

## 8. Deployment Requirement

* The completed project must be deployed on **Netlify**
* A live, publicly accessible URL must be generated
* The Netlify link must be submitted as final output

---

## 9. Acceptance Criteria

The project will be considered complete when:

* All validations work correctly
* Student records persist after page refresh
* Results are calculated accurately
* Delete functionality works correctly
* UI is responsive on all screen sizes
* Project is successfully deployed on Netlify

---

## 10. Future Enhancements (Optional)

* Edit student details
* Search and filter students
* Sort students by marks or name
* Export data as CSV

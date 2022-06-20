//TODO: HARD-Create a JSON file that will have 10 employees in it, their employeeID, their name, their salary and department name.

const fs = require("fs");
const employees = require("./employees.json");
const express = require("express");
const { nextTick } = require("process");
const app = express();

// const readMe = fs.readFileSync("planets.txt", "utf8");
// console.log(readMe);

// app.use(express.json());
// app.use(express.urlencoded());
//TODO:Create an express API so that when you hit the endpoint with a GET request we want the api to respond with all data on the employees.

app.get("/employees", (req, res) => {
  res.send(employees);
});

// TODO: Get employee id from JSON file
//TODO: If you hit the endpoint with an incorrect employeeID, send back the correct HTTP status code and an error message stating that the employee was not found.
app.get("/employees/:id", (req, res, next) => {
  const id = req.params.id;
  if (employees.Employees[id - 1] != undefined) {
    res.send(employees.Employees[id - 1]);
  } else {
    res.status(404).send({ message: "404 Not Found" });
  }
  //console.log(employees.Employees[0].employeeId);
  //const data = JSON.parse(id);
  //res.send(id);
});

//* PORT
app.listen(4040, () => {
  console.log(`listening on port 3000`);
});

var createBtn = document.getElementById("createBtn");

async function create() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var age = Number(document.getElementById("age").value);
  var salary = Number(document.getElementById("salary").value);
  var department = document.getElementById("department").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var empId = document.getElementById("id");

  createBtn.innerHTML = "Add";

  var employee = {
    firstName,
    lastName,
    age,
    salary,
    department,
    gender,
  };

  if (empId.value == "") {
    var response = await fetch(
      "https://first-project-c31f2-default-rtdb.firebaseio.com/employees.json",
      {
        method: "POST",
        body: JSON.stringify(employee),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } else {
    var response = await fetch(
      `https://first-project-c31f2-default-rtdb.firebaseio.com/employees/${empId.value}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(employee),
      }
    );
  }
  tableBody.innerHTML = "";
  clear();
  show();
}

async function show() {
  var response = await fetch(
    "https://first-project-c31f2-default-rtdb.firebaseio.com/employees.json"
  );

  var empData = await response.json();
  var tableBody = document.getElementById("tableBody");

  for (var key in empData) {
    tableBody.innerHTML += `
    <tr>
    <th scope="row">${key}</th>
    <td>${empData[key].firstName} </td>
    <td>${empData[key].lastName}</td>
    <td>${empData[key].age}</td>
    <td>${empData[key].salary}</td>
    <td>${empData[key].department}</td>
    <td>${empData[key].gender}</td>
    <td>
    <button class="btn btn-success" onclick="updateEmp('${key}', '${empData[key].firstName}', '${empData[key].lastName}','${empData[key].age}','${empData[key].salary}', '${empData[key].department}', '${empData[key].gender}')">Update</button>
    <button class="btn btn-danger" onclick="deleteEmp('${key}')">Delete</button>
    </td>
  </tr>
`;
  }
}

async function deleteEmp(id) {
  var response = await fetch(
    `https://first-project-c31f2-default-rtdb.firebaseio.com/employees/${id}.json`,
    {
      method: "DELETE",
    }
  );

  tableBody.innerHTML = "";
  show();
}

async function updateEmp(
  id,
  fName,
  lName,
  empAge,
  empSalary,
  empDepartment,
  empGender
) {
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var age = document.getElementById("age");
  var salary = document.getElementById("salary");
  var department = document.getElementById("department");
  var maleGender = document.getElementById("male");
  var femaleGender = document.getElementById("female");
  var empId = document.getElementById("id");
  createBtn.innerHTML = "Update";

  // var response = await fetch(
  //   `https://first-project-c31f2-default-rtdb.firebaseio.com/employees/${id}.json`
  // );

  // var empData = await response.json();
  // for (var key in empData) {
  empId.value = id;
  firstName.value = fName;
  lastName.value = lName;
  age.value = Number(empAge);
  salary.value = Number(empSalary);
  department.value = empDepartment;
  if (empGender == "Male") {
    maleGender.checked = true;
  } else {
    femaleGender.checked = true;
  }
  // }
}

function clear() {
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var age = document.getElementById("age");
  var salary = document.getElementById("salary");
  var department = document.getElementById("department");
  var gender = document.querySelector('input[name="gender"]:checked');
  var empId = document.getElementById("id");

  firstName.value = "";
  lastName.value = "";
  age.value = "";
  salary.value = "";
  department.value = "default";
  empId.value = "";
  gender.checked = false;
}

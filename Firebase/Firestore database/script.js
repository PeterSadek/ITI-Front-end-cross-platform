// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getFirestore,
  addDoc,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  query,
  getDoc,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1F9aMTvK372TJqxobsaYDZKBo-WaAH-k",
  authDomain: "first-project-c31f2.firebaseapp.com",
  databaseURL: "https://first-project-c31f2-default-rtdb.firebaseio.com",
  projectId: "first-project-c31f2",
  storageBucket: "first-project-c31f2.appspot.com",
  messagingSenderId: "271975702204",
  appId: "1:271975702204:web:9a080d5df4c7c7e6e87ab9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

async function addCourse() {
  document.getElementById("createBtn").innerHTML = "Add";
  var name = document.getElementById("name").value;
  var finalMark = parseFloat(document.getElementById("finalMark").value);
  var hours = parseFloat(document.getElementById("hours").value);
  var availability = document.querySelector(
    'input[name= "availability"]:checked'
  ).value;
  var id = document.getElementById("id").value;

  let course = {
    name,
    finalMark,
    hours,
    availability,
  };
  if (id === "") {
    await addDoc(collection(firestore, "Courses"), course);
  } else {
    await updateDoc(doc(firestore, "Courses", id), course);
  }

  clearFields();
}

function clearFields() {
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("finalMark").value = "";
  document.getElementById("hours").value = "";
  document.querySelector('input[name= "availability"]:checked').checked = false;
}

onSnapshot(collection(firestore, "Courses"), function (snapshot) {
  var courses = [];
  for (var course of snapshot.docs) {
    courses.push({ ...course.data(), id: course.id });
  }
  showCourses(courses);
});

function showCourses(data) {
  var tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
  for (var course of data) {
    tableBody.innerHTML += `
        <tr>
    <th scope="row">${course.id}</th>
    <td>${course.name}</td>
    <td>${course.finalMark}</td>
    <td>${course.hours}</td>
    <td>${course.availability}</td>
    <td>
    <button class="btn btn-success" onclick="updateCourse('${course.id}', '${course.name}','${course.finalMark}','${course.hours}', '${course.availability}')">Update</button>
    <button class="btn btn-danger" onclick="deleteCourse('${course.id}')">Delete</button>
    </td>
  </tr>
    `;
  }
}

function deleteCourse(courseId) {
  deleteDoc(doc(firestore, "Courses", courseId));
}

function updateCourse(
  courseId,
  courseName,
  courseFinalMark,
  courseHours,
  courseAvailability
) {
  document.getElementById("createBtn").innerHTML = "Update";
  document.getElementById("id").value = courseId;
  document.getElementById("name").value = courseName;
  document.getElementById("finalMark").value = parseFloat(courseFinalMark);
  document.getElementById("hours").value = parseFloat(courseHours);

  if (courseAvailability === "Available") {
    document.getElementById("avail").checked = true;
  }
  document.getElementById("notAvail").checked = false;
}

async function qCoursesByHours() {
  var q = query(collection(firestore, "Courses"), where("hours", "<", 10));
  var res = await getDocs(q);
  for (var course of res.docs) {
    console.log("Query by hours: ", { ...course.data() });
  }
}

async function qCoursesById() {
  var docRef = doc(firestore, "Courses", "F44S3kVB26puyIU4OrvG");
  var docSnap = await getDoc(docRef);

  console.log("Query by id: ", docSnap.data());
}

qCoursesByHours();
qCoursesById();

window.addCourse = addCourse;
window.deleteCourse = deleteCourse;
window.updateCourse = updateCourse;
window.qCoursesByHours = qCoursesByHours;
window.qCoursesById = qCoursesById;

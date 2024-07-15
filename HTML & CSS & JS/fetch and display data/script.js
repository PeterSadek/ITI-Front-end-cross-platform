////then catch

var buttonsContainer = document.getElementById("list");
var dataContainer = document.getElementById("data");

function userInfo() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      users;

      var list = document.createElement("ul");
      users.map((item) => {
        var button = document.createElement("button");
        buttonsContainer.appendChild(button);
        document.body.append(buttonsContainer);
        dataContainer.appendChild(list);
        document.body.append(dataContainer);

        button.addEventListener("click", () => {
          fetch("https://jsonplaceholder.typicode.com/posts?userId=" + item.id)
            .then((response2) => {
              return response2.json();
            })
            .then((users2) => {
              users2;

              list.innerHTML = users2
                .map((data) => {
                  return `<li>${data.title}</li>`;
                })
                .join("");
            });
        });

        button.innerHTML = item.name;
      });
    })
    .catch((error) => console.log(error));
}

userInfo();

////////////////////////////////////////////////////////////////////
//// async await

// var buttonsContainer = document.getElementById("list");
// var dataContainer = document.getElementById("data");

// async function userInfo() {
//   try {
//     var response = await fetch("https://jsonplaceholder.typicode.com/users");
//     var users = await response.json();
//   } catch (error) {
//     console.log(error);
//   }

//   var list = document.createElement("ul");

//   users.map((item) => {
//     var button = document.createElement("button");
//     buttonsContainer.appendChild(button);
//     document.body.append(buttonsContainer);
//     dataContainer.appendChild(list);
//     document.body.append(dataContainer);

//     button.addEventListener("click", async () => {
//       try {
//         var response2 = await fetch(
//           "https://jsonplaceholder.typicode.com/posts?userId=" + item.id
//         );
//         var users2 = await response2.json();
//       } catch (error) {
//         console.log(error);
//       }

//       list.innerHTML = users2
//         .map((data) => {
//           return `<li>${data.title}</li>`;
//         })
//         .join("");
//     });
//     button.innerHTML = item.name;
//   });
// }

// userInfo();

////////////////////////////////////////////////////////////////////
//// mix

// var buttonsContainer = document.getElementById("list");
// var dataContainer = document.getElementById("data");

// function userInfo() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       return response.json();
//     })
//     .then((users) => {
//       users;
//       var list = document.createElement("ul");

//       users.map((item) => {
//         var button = document.createElement("button");
//         buttonsContainer.appendChild(button);
//         document.body.append(buttonsContainer);
//         dataContainer.appendChild(list);
//         document.body.append(dataContainer);

//         button.addEventListener("click", async () => {
//           try {
//             var response2 = await fetch(
//               "https://jsonplaceholder.typicode.com/posts?userId=" + item.id
//             );
//             var users2 = await response2.json();
//           } catch (error) {
//             console.log(error);
//           }

//           list.innerHTML = users2
//             .map((data) => {
//               return `<li>${data.title}</li>`;
//             })
//             .join("");
//         });
//         button.innerHTML = item.name;
//       });
//     })
//     .catch((error) => console.log(error));
// }

// userInfo();

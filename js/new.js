function newButton(data) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => showData(data));
}
function showData(data) {
  console.log(data);
  const ul = document.getElementById("users-list");
  for (user of data) {
    const li = document.createElement("li");
    li.innerText = `{$} Name:- ${user.name},
    User Name:- ${user.username},
    Email:- ${user.email},
    Website:- ${user.website}
    `;
    ul.appendChild(li);
  }
}

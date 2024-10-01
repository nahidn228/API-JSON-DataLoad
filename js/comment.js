const commentLoad = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => loadData(data));
};

const loadData = (data) => {
  const divContainer = document.getElementById("div-container");
  for (user of data) {
    const createDiv = document.createElement("div");
    createDiv.innerHTML = `
    <h5>User: ${user.id} </h5>
    <h3>Name: ${user.name} </h3>
    <p>Comment: ${user.body}</p>
    `;
    divContainer.appendChild(createDiv);
  }
};

const commentLoad1 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  console.log(data);
};

/*
const commentLoad1 = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();
    console.log(data);
  } catch {
    console.error("Data Load Error");
  }
};

*/

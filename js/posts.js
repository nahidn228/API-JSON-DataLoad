function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => showPost(data));
}

function showPost(posts) {
  const postsContainer = document.getElementById("posts-container");

  for (user of posts) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
     <h4>User: ${user.id}</h4>
      <h5>Title: ${user.title} </h5>
      <p>Posts: ${user.body}</p>
    
    
    `;
    postsContainer.appendChild(postDiv);
    console.log(user);
  }
}

loadPosts();

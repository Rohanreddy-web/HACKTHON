let app = document.querySelector(".first");
let input = document.querySelector(".form-control");
let data = fetch("https://jsonplaceholder.typicode.com/users");
let array;

data.then((value) => {
  return value.json();
}).then((value) => {
  array = value.map((value) => {
    return value;
  });
  array.forEach(element => {
    let div = document.createElement("div");
    div.className = "user-card";
    div.innerHTML = `
      <div class="card w-100 p-3">
        <div class="card-header">User Information</div>
        <div class="card-body">
          <h5 class="card-title"><strong>Username:</strong> ${element.username}</h5>
          <p class="email"><strong>Email:</strong> ${element.email}</p>
          <p><strong>Phone:</strong> ${element.phone}</p>
        </div>
      </div>`;
    app.append(div);
  });
});

input.addEventListener("input", (e) => {
  let cards = document.querySelectorAll(".user-card");
  let searchitem = e.target.value.toLowerCase();

  cards.forEach((value) => {
    let username = value.querySelector(".card-title").textContent.toLowerCase();
    let email = value.querySelector(".email").textContent.toLowerCase();

    if (username.includes(searchitem) || email.includes(searchitem)) {
      value.style.display = "block";
    } else {
      value.style.display = "none";
    }
  });
});
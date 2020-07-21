let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});



// response data, make a `<div class="card">` for each toy and add it to the
// toy-collection `div`.

// DOM content load, you'll need a fetch to get all toy objects
// fetch
// find HTML elements to refer to

fetchToys()

function fetchToys() {
  fetch("http://localhost:3000/toys")
  .then(resp => resp.json())
  .then(function(toys) {
    addToyInfo(toys)
  })
}

function addToyInfo(toys) {
  for (const toy of toys) {
    createToyCard()
  }
}

function createToyCard() {
  const toyCollection = document.getElementById("toy-collection")
  let toyCard = document.createElement("div")
  toyCard.setAttribute("class", "card")
  toyCollection.append(toyCard)
}

// <div class="card">
//     <h2>Woody</h2>
//     <img src=toy_image_url class="toy-avatar" />
//     <p>4 Likes </p>
//     <button class="like-btn">Like <3</button>
//   </div>
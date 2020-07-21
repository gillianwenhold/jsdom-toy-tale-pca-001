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

  let toyH2 = document.createElement("h2")
  let toyImg = document.createElement("img")
  let toyLikes = document.createElement("p")
  let toyBtn = document.createElement("button")

  toyImg.setAttribute("class", "toy-avatar")
  toyBtn.setAttribute("class", "like-btn")
}

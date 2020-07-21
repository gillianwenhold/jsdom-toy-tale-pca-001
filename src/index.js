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
    createToyCard(toy)
  }
}

function createToyCard(toy) {
  const toyCollection = document.getElementById("toy-collection")
  let toyCard = document.createElement("div")
  toyCard.setAttribute("class", "card")

  let toyH2 = document.createElement("h2")
  let toyImg = document.createElement("img")
  let toyLikes = document.createElement("p")
  let toyBtn = document.createElement("button")

  toyH2.innerHTML = toy.name
  toyLikes.innerHTML = `${toy.likes} Likes`
  toyBtn.innerHTML = "Like <3"

  toyImg.setAttribute("src", toy.image)

  toyImg.setAttribute("class", "toy-avatar")
  toyBtn.setAttribute("class", "like-btn")

  toyCard.append(toyH2, toyImg, toyLikes, toyBtn)
  toyCollection.append(toyCard)
}


// When a user submits the toy form
// a POST request is sent to http://localhost:3000/toys
// and the new toy is added to Andy's Toy Collection.
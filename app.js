import {recipes} from "./data.js"
// const navbar = document.querySelector("#nav");
// const navBtn = document.querySelector("#nav-btn");
// const sidebar = document.querySelector("#sidebar");
// const recipeBtn = document.getElementById("btn")
const recipesSection = document.querySelector(".recipes")
const modal = document.querySelector(".modal-overlay")
const closeModalButton = document.querySelector(".close-modal-btn")
const modalContainer = document.querySelector(".modal-container")
const closeModal = document.querySelector(".modal-overlay")

 recipes.map((recipeItem)=>{
     
     //map a new recipe list and create each recipe
     const {id, title, img, desc, time, ingredients, steps} = recipeItem
     const recipeDiv = document.createElement('article')
     recipeDiv.innerHTML = 
     `<article class='recipe-item item'>
        <img src="${img}" alt="${title}" class='photo'/>
        <div class='item-info'>
            <header>
                <h4 class='time'>${title} ${time} minutes</h4>
            </header>
            <h5>${desc}</h5>
            <p>Ingredients: ${ingredients}</p>
        </div>
      </article>`
   //add the div to the recipe section
   recipesSection.appendChild(recipeDiv)
   //wait for click by user
   recipeDiv.addEventListener("click", function(){
       //create div inside modal
    const modalContent = document.createElement("div")
    //create an OL with the steps in each recipe
    function makeOL(steps) {
        var list = document.createElement('ol');
        for (var i = 0; i < steps.length; i++) {
            var item = document.createElement('li');
            item.appendChild(document.createTextNode(steps[i]));
            list.appendChild(item);
        }
        return list;        //return the list
    }
    //add content to the div inside modal
    modalContent.innerHTML =
    `<div class="modal">
        <h3>${recipeItem.title}</h3>
        <img class="modal-photo" src="${img}"/>
        <h5>${desc}</h5>
        <p>Ingredients: ${ingredients}</p>
        <div class="steps">${makeOL(steps).outerHTML}</div>
    </div>
    `
    modalContainer.appendChild(modalContent)    //add modal content to container
})
    recipeDiv.addEventListener("click", function(){     //when clicking on recipe...
        modal.classList.add("show-modal")               //add class to show modal
    })
    closeModalButton.addEventListener("click", function(){  //when close btn is clicked...
        const modalStuff = document.querySelector(".modal")   
         //remove the class displaying that displays the modal
        modal.classList.remove("show-modal")
        modalStuff.remove()
    })
 })
 //close modal when clicking outside modal
 window.onclick = function(event) {
    const modalStuff = document.querySelector(".modal")   

    if (event.target == closeModal) {
        modal.classList.remove("show-modal")  
        modalStuff.remove()  
    }
  }




// window.addEventListener("scroll", function () {
//     if (window.pageYOffset > 80) {
//       navbar.classList.add("navbar-fixed");
//     } else {
//       navbar.classList.remove("navbar-fixed");
//     }
//   });
  // show sidebar
//   navBtn.addEventListener("click", function () {
//     sidebar.classList.add("show-sidebar");
//   });
//   closeBtn.addEventListener("click", function () {
//     sidebar.classList.remove("show-sidebar");
//   });
  // set year
  //date.innerHTML = new Date().getFullYear();
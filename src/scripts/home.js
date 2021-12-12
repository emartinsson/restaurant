import addMenu from "./menu";

//Creates Home page
function addHome(){
    //Cache DOM
    let contentDiv = document.querySelector(".backgroundDiv");
    contentDiv.innerHTML = "";

    //Creating elements
    let homeHeaderOne = document.createElement("h1");
    let homeHeaderTwo = document.createElement("h4");
    let p = document.createElement("p")
    let button = document.createElement("button");
    
    //Adding classes
    homeHeaderOne.classList.add("headerOne");
    homeHeaderTwo.classList.add("headerTwo");
    p.classList.add("paragraphText");
    button.classList.add("orderButton");

    //Eventbinders
    button.addEventListener("click", addMenu);

    //Adding textcontent
    homeHeaderOne.textContent = "SANTOS RESTAURANT";
    homeHeaderTwo.textContent = "HERE YOU CAN FIND DELICIOUS FOOD";
    p.textContent="Feel free to check out todays menu below";
    button.textContent="MENU";

    //Appending elements
    contentDiv.appendChild(homeHeaderTwo);
    contentDiv.appendChild(homeHeaderOne);
    contentDiv.appendChild(p);
    contentDiv.appendChild(button);
};


export default addHome;
import addHome from "./home";
import addMenu from "./menu";
import addAbout from "./about";
import addContact from "./contact";

//Creates header.
function addHeader(){ 
    //Cache DOM
    let contentDiv = document.getElementById("content");

    //Creating navigation bar
    let navBar = createNavBar();
    navBar.classList.add("header");

    //Appending elements
    contentDiv.appendChild(navBar);
};


//Creates the navigation bar, which si returned as a div.
function createNavBar(){
    let navBarDiv = document.createElement("div");
   
    let menuList = ["Home", "Menu", "Contact", "About"];
    menuList.forEach(element => {
        //Create elements
        let header = document.createElement("h3");
        let button = document.createElement("button");

        //Adding classes
        header.classList.add("headLinks");
        button.classList.add("navLinks");

        //Adding content
        button.textContent=element.toString();

        //Eventbinders
        button.addEventListener("click", selectedPage);

        //Appending elements
        header.appendChild(button);
        navBarDiv.appendChild(header);
    });
    
    return navBarDiv;
}



//Function for navigation bar. Calls the correct website from the pressed button.
function selectedPage(e){
    const buttonName = e.target.textContent;
    switch (buttonName){
        case "Home":
            addHome();
            break;
        case "Menu":
            addMenu();
            break;
        case "About":
            addAbout();
            break;
        case "Contact":
            addContact();
            break;
    }
}

export default addHeader;

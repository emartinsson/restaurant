import addHeader from "./header"
import addFooter from "./footer"
//Initializes the website. 

//Creates a HTML-skeleton for the "main-section" which
//the different pages are appended to.
function addMainSection(){
    //Cache DOM
    let contentDiv = document.getElementById("content");

    //Creating elements
    let main = document.createElement("main");
    let div = document.createElement("div");
    let backgroundDiv = document.createElement("div");

    //Adding classes
    div.classList.add("mainContent");
    main.classList.add("main");
    backgroundDiv.classList.add("backgroundDiv");

    //Appending elements.
    div.appendChild(backgroundDiv);
    main.appendChild(div);
    contentDiv.appendChild(main);
}

//Function that loads the header, mainsection and footer.
function loadWebsite(){
    addHeader();
    addMainSection();
    addFooter();
}

export default loadWebsite;
//Creates footer.
function addFooter(){
    //Cache DOM
    let contentDiv = document.getElementById("content");

    //Creating elements
    let footerDiv = document.createElement("div");
    let footerP = document.createElement("p");

    //Adding classes
    footerDiv.classList.add("footer");

    //Adding content
    footerP.innerHTML = "Copyright &#169 2021";

    //Appending elements
    footerDiv.appendChild(footerP);
    contentDiv.appendChild(footerDiv);
}

export default addFooter;
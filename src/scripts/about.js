//Creates About page
function addAbout(){
    //Cache DOM
    let contentDiv = document.querySelector(".backgroundDiv");
    contentDiv.innerHTML = "";

    //Creating elements
    let aboutHeader = document.createElement("h2");
    let p = document.createElement("p");
    let pTwo = document.createElement("p");

    //Adding classes
    aboutHeader.classList.add("headerOne");
    p.classList.add("paragraphText");
    pTwo.classList.add("paragraphText");

    //Adding content
    const textString = `Lorem ipsum dolor sit amet, consectetur adipiscing
    elit, sed do eiusmod tempor incididunt ut labore et dolore magna
     aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
      cupidatat non proident, sunt in culpa qui officia deserunt mollit
       anim id est laborum.`;
    
    aboutHeader.textContent = "ABOUT";
    p.textContent = textString;
    pTwo.textContent = textString;
    
    //Appending elements
    contentDiv.appendChild(aboutHeader);
    contentDiv.appendChild(p);
    contentDiv.appendChild(pTwo)
}
    



export default addAbout;
import Location from '../img/digitalmap.png';

//Creates Contact page.
function addContact(){
    //Cache DOM
    let contentDiv = document.querySelector(".backgroundDiv");
    contentDiv.innerHTML = "";

    //Creating elements
    let contactHeader = document.createElement("h2");
    let p = document.createElement("p");
    let pAdress = document.createElement("p");
    const locationImage = new Image();

    //Adding classes
    contactHeader.classList.add("headerOne");
    p.classList.add("paragraphText");
    locationImage.classList.add("contactus-img");

    //Adding content
    const textString = "Contact information below."
    const address = "123 Raffle avenue, Stockholm, Sweden";

    contactHeader.textContent = "CONTACT US";
    p.textContent=textString;
    pAdress.textContent = address;
    locationImage.src = Location;

    //Appending elements
    contentDiv.appendChild(contactHeader);
    contentDiv.appendChild(p);
    contentDiv.appendChild(pAdress);
    contentDiv.appendChild(locationImage);
}
export default addContact;
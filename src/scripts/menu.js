import Foodpic1 from '../img/foodpic1.jpg';
import Foodpic2 from '../img/foodpic2.jpg';
import Foodpic3 from '../img/foodpic3.jpg';
import Foodpic4 from '../img/foodpic4.jpg';
import Foodpic5 from '../img/foodpic5.jpg';
import Foodpic6 from '../img/foodpic6.jpg';
import Foodpic7 from '../img/foodpic7.jpg';
import Foodpic8 from '../img/foodpic8.jpg';
import Foodpic9 from '../img/foodpic9.jpg';

//Creates menu page
function addMenu() {
    //Cache DOM
    let contentDiv = document.querySelector(".backgroundDiv");
    contentDiv.innerHTML = "";

    //Creating elements
    let menuHeader = document.createElement("h2");
    let menuDiv = createFood(foodItems);
    

    //Adding classes
    menuHeader.classList.add("headerOne");
    menuDiv.classList.add("flex-container");
    
    //Adding textcontent
    menuHeader.textContent = "MENU";


    //Appending elements
    contentDiv.appendChild(menuHeader);
    contentDiv.appendChild(menuDiv);
};


//Function creates div with foodlist
function createFood(foodArray){
    let menuDiv = document.createElement("div");
    for (let i=0; i<foodArray.length; i++){

        //Creating elements
        let li = document.createElement("li");
        let iconHolder = document.createElement("div");
        let itemTitle = document.createElement("h3");
        const foodImage = new Image();
        let price = document.createElement("p");

        //Adding classes
        li.classList.add("flex-item");
        iconHolder.classList.add("iconHolder");
        foodImage.classList.add("menu-img");

        //Setting content from list.
        itemTitle.textContent = foodArray[i]["title"]
        foodImage.src = foodArray[i]["src"]
        foodImage.alt = foodArray[i]["alt"]
        price.textContent = foodArray[i]["price"]

        //Appending elements
        iconHolder.appendChild(foodImage);
        li.appendChild(iconHolder);
        li.appendChild(itemTitle);
        li.appendChild(price);

        menuDiv.appendChild(li);
    }
    return menuDiv;
}

/* INVENTORY SYSTEM */
const foodItems = [
    {
        src: Foodpic1,
        title: "Pasta",
        price: "Price: 10.50$",
        alt: "Food picture"
    },
    {
        src: Foodpic2,
        title: "Pasta",
        price: "Price: 10.50$",
        alt: "Food picture"
    },
    {
        src: Foodpic3,
        title: "Pasta",
        price: "Price: 10.50$",
        alt: "Food picture"
    },
    {
        src: Foodpic4,
        title: "Pasta",
        price: "Price: 10.50$",
        alt: "Food picture"
    },
    {
        src: Foodpic5,
        title: "Pasta",
        price: "Price: 10.50$",
        alt: "Food picture"
    },
    {
        src: Foodpic6,
        title: "Pasta",
        price: "Price: 10.50$",
        alt: "Food picture"
    },
    {
        src: Foodpic7,
        title: "Pasta",
        price: "Price: 10.50$",
        alt: "Food picture"
    },
    {
        src: Foodpic8,
        title: "Pasta",
        price: "Price: 10.50$",
        alt: "Food picture"
    },
    {
        src: Foodpic9,
        title: "Pasta",
        price: "Price: 10.50$",
        alt: "Food picture"
    },
]

export default addMenu;


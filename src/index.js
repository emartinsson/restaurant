import loadWebsite from "./scripts/initwebsite"
import addHome from "./scripts/home"
import "./css/styles.css";

//Initializing website.
(() => {
    loadWebsite();
    addHome();
})();


/* TO DO
Se över om funktionerna ska inkapslas på något sätt.
Fixa designen på hemsidan.
*/
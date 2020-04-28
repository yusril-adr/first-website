
const main = () => {
    const headerElement = document.querySelector("header");
    const jumbotronElement = document.querySelector(".jumbotron");
    const userElement = document.querySelector("#user");
    const navElement = document.querySelector("nav");
    const username = prompt("Siapa nama anda ?");

    const greeting = name => {
        headerElement.removeChild(jumbotronElement);

        if(name !== "" && name !== null){
            userElement.innerHTML = name;
        }

        headerElement.insertBefore(jumbotronElement, navElement);
    };
    
    greeting(username);
};


document.addEventListener("DOMContentLoaded", main);
import "./greeting-message.js";

const main = () => {
    const bodyElement = document.querySelector("body");
    const headerElement = document.querySelector("header");
    const jumbotronElement = document.querySelector(".jumbotron");
    const userElement = document.querySelector("#user");
    const navElement = document.querySelector("nav");
    const greetingElement = document.createElement("greeting-message");

    const insertName = () => {
        headerElement.removeChild(jumbotronElement);
        const username = greetingElement.value;

        if(username) {
            userElement.innerHTML = username;
        }

        bodyElement.removeChild(greetingElement);
        headerElement.insertBefore(jumbotronElement, navElement);
    }

    bodyElement.appendChild(greetingElement);
    greetingElement.clickEvent = insertName;
};


document.addEventListener("DOMContentLoaded", main);
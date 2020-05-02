class GreetingMessage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        document.querySelector("#nameButton").addEventListener("click", this._clickEvent);
    }

    get value() {
        return document.querySelector("#nameBox").value;
    }

    render() {
        this.innerHTML = `
        <style>
            @keyframes popUp {
                from {
                    transform: scale(0);
                } to {
                    transform: scale(1);
                }
            }

            .greeting-message {
                position: fixed;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                background-color: rgba(0, 0, 0, 0.7);
                display: flex;
            }
            
            .greeting-message .card {
                width: 250px;
                margin: auto;
                background-color: white;
                border-radius: 12px;
                display: flex;
                flex-direction: column;
                align-items: center;
                transform: scale(0);
                animation: popUp .5s forwards;
            }
            
            .greeting-message p {
                font-size: 26px;
                margin: 0 0 20px 0;
            }
            
            .greeting-message input {
                width: 75%;
                border: 2px solid cadetblue;
                border-radius: 12px;
                box-sizing: border-box;
                padding: 5px 10px;
                margin-bottom: 20px;
                font-size: 16px;
            }
            
            .greeting-message button {
                background-color: springgreen;
                border: none;
                border-radius: 8px;
                padding: 5px 10px;
                font-size: 18px;
                color: white;
                transition: transform .3s;
            }
            
            .greeting-message button:hover {
                background-color: tomato;
                transform: scale(1.15);
            }
        </style>

        <div class="greeting-message">
            <div class="card">
                <p>Siapa nama anda ?</p>
                <input type="text" id="nameBox" placeholder="Nama anda">
                <button id="nameButton">Oke</button>
            </div>
        </div>
        `;
    }
}

customElements.define("greeting-message",GreetingMessage);
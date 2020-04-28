const username = prompt("Siapa nama anda ?");

if (username != "" && username != null){
    user.innerText = username;
} else {
    user.innerText = "User";
}
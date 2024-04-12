const buzzer = document.querySelector(".buzzer");
const cookie = document.querySelector("#cookie");
const actualCookie = document.querySelector("#actual-cookie");
document.getElementById("actual-cookie").style.visibility='hidden'; //calls actual cookie emoji and hides it


actualCookie.visibility = 'hidden';
buzzer.addEventListener("click", () => {
    cookie.textContent = "You get a cookie!";
    alert("You got a cookie! ");
    // reveal = "visible";
    document.getElementById("actual-cookie").style.visibility='visible'; //reveals cookie once buzzer is pushed.
})


const buzzer = document.querySelector(".buzzer");
const cookie = document.querySelector("#cookie");
const actualCookie = document.querySelector("#actual-cookie");
const reveal = document.getElementById("actual-cookie").style.visibility='hidden';


actualCookie.visibility = 'hidden';
buzzer.addEventListener("click", () => {
    cookie.textContent = "You get a cookie!";
    alert("You got a cookie! ");
    reveal.visibility = "visible";
})


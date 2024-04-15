const buzzer = document.querySelector(".buzzer");
const cookie = document.querySelector("#cookie");
const actualCookie = document.querySelector("#actual-cookie");
document.getElementById("actual-cookie").style.visibility='hidden'; //calls actual cookie emoji and hides it

// const buzzButton = document.getElementById(".buzzer");


actualCookie.visibility = 'hidden';
buzzer.clicked = false;


buzzer.addEventListener("click", () => {
    cookie.textContent = "You get a cookie!";
    //alert("You got a cookie! ");
    // reveal = "visible";
    document.getElementById("actual-cookie").style.visibility='visible'; //reveals cookie once buzzer is pushed.
})

const timer = () => {
    if(buzzer.clicked = true) {
        alert('YOU CLICKED THE BUZZER IN TIME! YOU WIN! ... a cookie');
    }
    else {
        alert('YOU LOSE! No cookie.');
    }

}


setTimeout(timer, 5000);

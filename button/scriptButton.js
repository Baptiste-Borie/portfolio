const boutons = document.querySelectorAll(".button");

boutons.forEach((bouton, index) => {
    let clique = false; 
    bouton.addEventListener("click", function() {
        if (bouton.textContent === "Click me again !") {
            bouton.textContent = "Bouton " + (index + 1);
        } else {
            bouton.textContent = "Click me again !";
        }
    });
});

const button6 = document.querySelector('.button6');
button6.textContent ="" ;

var home = document.getElementById("home")
console.log(home)
home.addEventListener("click",function(){
    window.location.href = "../"
});

/* Ajout du style dans la banniere. */
/* document.addEventListener('scroll', function() {
    var welcomeSection = document.querySelector('.welcome');
    var workSection = document.querySelector('.work'); 
    var navBar = document.getElementById('nav');

    var welcomeSectionRect = welcomeSection.getBoundingClientRect();
    var workSectionRect = workSection.getBoundingClientRect();

    if (workSectionRect.top <= window.innerHeight && workSectionRect.bottom >= 0 ) {
        if (welcomeSectionRect.bottom <= 0){
            navBar.classList.add('navColor');
        } else {
            navBar.classList.remove('navColor');
        }
    } else {
        navBar.classList.remove('navColor');
    }
}); */


/* Smooth scrolling */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const sectionWork = document.getElementById(targetId);
            if (sectionWork) {
            window.scrollTo({
                top: sectionWork.offsetTop,
                behavior: 'smooth' 
            });
        }
    });
});
/* Progress Dots */
const indicators = document.querySelectorAll(".progressDots");
const sections = ["welcome", "work", "contact"];

window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY + windowHeight / 2; // Décalage de la position de défilement

    sections.forEach((section, index) => {
        const sectionElement = document.getElementById(section);
        
        if (sectionElement) {
            const sectionTop = sectionElement.offsetTop;
            const sectionBottom = sectionTop + sectionElement.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                setActiveIndicator(index);
            }
        }
    });
});

function setActiveIndicator(index) {
    indicators.forEach((indicator, i) => {
        if (i === index) {
            setTimeout(() => {
                indicator.classList.add("active");
            }, 50); // Déclencher l'animation après 50 ms
        } else {
            indicator.classList.remove("active");
        }
    });
}

/* Formulaire error */
var form = document.getElementById("form")
form.addEventListener('submit',function(event){
    event.preventDefault();
    alert(" This section is currently empty and doesnt work cause PHP or any server-side languages is not supported on GITHUB Pages. You can still reach me at baptisteboriepro@gmail.com");
})

/* Bouton de contexte d'image */

var imageContainers = document.querySelectorAll(".imageContainer");

// Ajoutez un gestionnaire d'événements pour chaque bouton
imageContainers.forEach(function(container) {
    container.addEventListener("click", function() {
        var url = container.getAttribute("data-url");
        window.location.href = url;
    });
});

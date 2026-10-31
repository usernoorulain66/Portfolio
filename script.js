let themeButton = document.getElementById("themeButton");
if (themeButton) {
    themeButton.onclick = function() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeButton.innerText = "Light Mode";
        } else {
            themeButton.innerText = "Dark Mode";
        }
    };
}
let topButton = document.createElement("button");
topButton.innerText = "Back to Top";
topButton.id = "topButton";
document.body.appendChild(topButton);
topButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
let menuButton = document.querySelector(".menu-toggle");
let navLinks = document.querySelector("nav ul");
if (menuButton && navLinks) {
    menuButton.onclick = function() {
        navLinks.classList.toggle("show-menu");
    };
}
let navigationLinks = document.querySelectorAll("nav ul a");

navigationLinks.forEach(function(link) {
    link.onclick = function() {
        if (navLinks) {
            navLinks.classList.remove("show-menu");
        }
    };
});
let filterButtons = document.querySelectorAll(".filter-button");
let projectCards = document.querySelectorAll(".project-item");
filterButtons.forEach(function(button) {
    button.onclick = function() {
        let category = button.getAttribute("data-filter");
        projectCards.forEach(function(card) {
            let projectCategory = card.getAttribute("data-category");

            if (category === "all" || category === projectCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    };
});
let contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.onsubmit = function(event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all the fields.");
        } else {
            alert("Thank you! Your message has been submitted.");
            contactForm.reset();
        }
    };
}
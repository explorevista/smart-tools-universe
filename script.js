// Smart Tools Universe - Basic Interactivity

// Smooth scroll for button
document.querySelector(".hero button").addEventListener("click", () => {
    document.querySelector(".tools-section").scrollIntoView({
        behavior: "smooth"
    });
});


// TOOL CARD CLICK ACTION
let cards = document.querySelectorAll(".tool-card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        alert("Tool feature coming soon!");
    });
});


// FUTURE DARK/LIGHT TOGGLE SYSTEM (READY STRUCTURE)
function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

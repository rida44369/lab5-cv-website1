// Automatically update the footer year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
